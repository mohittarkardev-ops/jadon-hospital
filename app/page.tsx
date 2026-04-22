import SchemaMarkup from '@/components/seo/SchemaMarkup';
import Hero from '@/components/home/Hero';
import BentoServices from '@/components/home/BentoServices';
import HealthPackages from '@/components/home/HealthPackages';
import Link from 'next/link';
import { CalendarCheck, ArrowRight, ShieldCheck } from 'lucide-react';

export default function Home() {
  // E-E-A-T: Optimized Local SEO JSON-LD Payload
  const hospitalSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalClinic",
    "@id": "https://jadon-hospital.vercel.app/#clinic",
    "name": "Jadon Hospital & Ultrasound Centre",
    "alternateName": "Jadaun Hospital", // SEO: Captures common spelling variations
    "url": "https://jadon-hospital.vercel.app",
    "telephone": "+91-8384844353", 
    "priceRange": "$$", // Resolves Google Search Console non-critical issue
    "image": "https://jadon-hospital.vercel.app/og-image.jpg", // Replace with real photo later
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "NH-19, Nearby PM Shri Govt. Girls' Inter College",
      "addressLocality": "Farah",
      "addressRegion": "Uttar Pradesh",
      "postalCode": "281122",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 27.3235, 
      "longitude": 77.7654 
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
        "opens": "00:00",
        "closes": "23:59"
      }
    ],
    "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Medical Services",
    "itemListElement": [
      { 
        "@type": "Offer", 
        "itemOffered": { 
          "@type": "Service", 
          "name": "Emergency Trauma Care" 
        } 
      },
      { 
        "@type": "Offer", 
        "itemOffered": { 
          "@type": "Service", 
          "name": "High-Resolution Ultrasound",
          "description": "State-of-the-art 3D/4D diagnostic imaging."
        } 
      },
      { 
        "@type": "Offer", 
        "itemOffered": { 
          "@type": "Service", 
          "name": "Pathology Laboratory" 
        } 
      }
    ]
  }
  };

  return (
    <main className="min-h-screen bg-slate-50 selection:bg-teal-200 selection:text-teal-900">
      {/* 1. SEO ENGINE: Injected into the head for Googlebot parsing */}
      <SchemaMarkup schema={hospitalSchema} />
      
      {/* 2. HERO SECTION: Custom Typography & Floating Contact Bar */}
      <Hero />
      
      {/* 3. SERVICES: The Asymmetrical Bento Grid of Excellence */}
      <BentoServices />

      {/* 4. PACKAGES: Premium Preventive Care & Pricing Cards */}
      <HealthPackages />

      {/* 5. CONVERSION: Final Pre-Footer High-Impact CTA */}
      <section className="relative py-32 overflow-hidden bg-white border-t border-slate-100">
        {/* Modern decorative background glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-teal-50/60 rounded-full blur-[120px] -z-10"></div>
        
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-2xl bg-teal-50 text-teal-700 text-sm font-black uppercase tracking-widest mb-8 border border-teal-100/50">
            <ShieldCheck className="w-4 h-4" />
            Trusted by 50,000+ Patients
          </div>
          
          <h2 className="text-4xl md:text-7xl font-black text-slate-950 mb-8 tracking-tighter leading-[0.9]">
            Ready to prioritize <br />
            <span className="text-teal-600 italic">your health?</span>
          </h2>
          
          <p className="text-lg md:text-xl text-slate-500 mb-12 max-w-2xl mx-auto leading-relaxed font-medium">
            From precision Ultrasound diagnostics to immediate emergency response, Jadon Hospital provides the clinical excellence your family deserves.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
            <Link 
              href="/patient-info" 
              className="group w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-slate-950 text-white px-12 py-5 rounded-[2rem] font-bold text-lg hover:bg-teal-600 hover:shadow-[0_20px_50px_-10px_rgba(13,148,136,0.4)] transition-all duration-500 hover:-translate-y-1"
            >
              <CalendarCheck className="w-6 h-6 text-teal-400 group-hover:text-white transition-colors" />
              Schedule Appointment
              <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
            </Link>
            
            <Link 
              href="tel:+918384844353" 
              className="w-full sm:w-auto inline-flex items-center justify-center px-12 py-5 rounded-[2rem] font-bold text-lg text-slate-900 bg-slate-50 hover:bg-slate-100 transition-all border border-slate-200"
            >
              Call Reception
            </Link>
          </div>
        </div>
      </section>

    </main>
  );
}