"use client";

import { useEffect, useRef } from 'react';

export default function AddressPicker() {
  const mapRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    // Load the Google Maps Script
    const script = document.createElement('script');
    script.src = `https://maps.googleapis.com/maps/api/js?key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}&libraries=places&callback=initMap`;
    script.async = true;
    script.defer = true;
    document.head.appendChild(script);

    (window as any).initMap = () => {
      const hospitalCoords = { lat: 27.3235, lng: 77.7654 };
      
      const map = new google.maps.Map(mapRef.current!, {
        center: hospitalCoords,
        zoom: 15,
        mapId: "DEMO_MAP_ID", // Replace with your Map ID if you have one
      });

      const marker = new google.maps.Marker({
        position: hospitalCoords,
        map: map,
        title: "Jadon Hospital",
      });

      const autocomplete = new google.maps.places.Autocomplete(inputRef.current!, {
        fields: ["address_components", "geometry", "name"],
        types: ["address"],
      });

      autocomplete.addListener("place_changed", () => {
        const place = autocomplete.getPlace();
        if (!place.geometry || !place.geometry.location) return;

        map.setCenter(place.geometry.location);
        marker.setPosition(place.geometry.location);
      });
    };
  }, []);

  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="bg-white rounded-[2.5rem] overflow-hidden shadow-2xl border border-slate-100 flex flex-col md:flex-row h-[600px]">
          
          {/* Left Panel: Inputs */}
          <div className="w-full md:w-2/5 p-10 flex flex-col justify-center gap-6 border-r border-slate-100">
            <div>
              <h2 className="text-3xl font-black text-slate-900 tracking-tight">Locate Us</h2>
              <p className="text-slate-500 text-sm mt-2">Find the quickest route to Jadon Hospital.</p>
            </div>

            <div className="space-y-4">
              <div className="space-y-1">
                <label className="text-[10px] font-black uppercase tracking-widest text-teal-600">Search Address</label>
                <input 
                  ref={inputRef}
                  type="text" 
                  placeholder="Enter your location..." 
                  className="w-full bg-slate-50 border-b-2 border-slate-200 p-3 focus:border-teal-500 outline-none transition-all text-sm"
                />
              </div>
              
              <input type="text" placeholder="City" className="w-full bg-slate-50 border-b-2 border-slate-100 p-3 text-sm outline-none cursor-not-allowed opacity-50" disabled />
              
              <div className="flex gap-4">
                <input type="text" placeholder="State" className="w-1/2 bg-slate-50 border-b-2 border-slate-100 p-3 text-sm outline-none cursor-not-allowed opacity-50" disabled />
                <input type="text" placeholder="Zip" className="w-1/2 bg-slate-50 border-b-2 border-slate-100 p-3 text-sm outline-none cursor-not-allowed opacity-50" disabled />
              </div>
            </div>

            <button className="mt-4 bg-slate-950 text-white py-4 rounded-2xl font-bold hover:bg-teal-600 transition-all shadow-lg shadow-teal-600/10">
              Get Directions
            </button>
          </div>

          {/* Right Panel: The Map */}
          <div className="flex-1 h-full relative">
            <div ref={mapRef} className="w-full h-full" />
          </div>

        </div>
      </div>
    </section>
  );
}