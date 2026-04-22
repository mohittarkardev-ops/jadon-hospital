import Link from 'next/link';
import Image from 'next/image';
import { Stethoscope, Award, Activity, ArrowRight, ShieldCheck, CalendarCheck } from 'lucide-react';

export const metadata = {
  title: 'Our Doctors',
  description: 'Meet the expert medical team at Jadon Hospital. Led by Dr. Madhupal Singh (MBBS, MS) and Dr. Neha Singh (MBBS).',
};

const doctors = [
  {
    name: "Dr. Madhupal Singh",
    credentials: "MBBS, MS",
    role: "Chief Surgeon & Head of Trauma",
    specialties: ["General Surgery", "Trauma Response", "Critical Care"],
    image: "/dr-madhupal.jpg", // Add this to your /public folder
    bio: "With extensive surgical expertise, Dr. Madhupal Singh leads the trauma and surgical departments at Jadon Hospital. His rigorous MS background ensures that emergency operations and general surgeries are executed with the highest level of clinical precision and patient safety.",
    color: "teal"
  },
  {
    name: "Dr. Neha Singh",
    credentials: "MBBS",
    role: "Lead Physician & Diagnostics Head",
    specialties: ["General Medicine", "High-Resolution Ultrasound", "Preventive Care"],
    image: "/dr-neha.jpg", // Add this to your /public folder
    bio: "Dr. Neha Singh oversees the diagnostic and general medicine wings. Specializing in advanced ultrasound imaging, she provides highly accurate maternal and internal health screenings, ensuring every patient receives a compassionate and accurate diagnosis.",
    color: "emerald"
  }
];

export default function DoctorsPage() {
  return (
    <main className="min-h-screen bg-slate-50 selection:bg-teal-200 selection:text-teal-900 pb-24">
      
      {/* 1. Page Header */}
      <section className="bg-slate-950 pt-20 pb-32 px-6 relative overflow-hidden">
        {/* Decorative Glow - Hidden on mobile to prevent GPU lag */}
        <div className="hidden md:block absolute top-0 right-1/4 w-full max-w-2xl h-full bg-teal-900/40 blur-[120px] rounded-full pointer-events-none"></div>
        
        <div className="max-w-6xl mx-auto relative z-10 text-center md:text-left flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md text-teal-400 text-sm font-bold tracking-tight mb-6">
              <Award className="w-4 h-4" /> Expert Medical Team
            </div>
            <h1 className="text-4xl md:text-6xl font-black text-white tracking-tighter leading-tight">
              Clinical expertise <br />
              <span className="font-light italic text-slate-300">you can trust.</span>
            </h1>
          </div>
          <p className="text-slate-400 text-lg font-medium max-w-sm md:text-right">
            Led by highly qualified specialists dedicated to bringing world-class healthcare to Mathura.
          </p>
        </div>
      </section>

      {/* 2. Main Doctors Grid */}
      <section className="max-w-6xl mx-auto px-6 -mt-16 relative z-20">
        <div className="grid md:grid-cols-2 gap-8">
          {doctors.map((doctor, idx) => (
            <div key={idx} className="bg-white rounded-[2.5rem] p-8 md:p-10 shadow-2xl shadow-slate-200/50 border border-slate-100 flex flex-col h-full group hover:border-teal-500 transition-all duration-500">
              
              {/* Doctor Header (Image & Name) */}
              <div className="flex flex-col sm:flex-row gap-6 items-start mb-8">
                {/* Optimized Next.js Image */}
                <div className="w-32 h-32 shrink-0 bg-slate-100 rounded-3xl overflow-hidden border-4 border-white shadow-lg relative">
                  <Image 
                    src={doctor.image} 
                    alt={doctor.name} 
                    fill
                    sizes="(max-width: 768px) 128px, 128px"
                    className="object-cover group-hover:scale-110 transition-transform duration-700" 
                  />
                  {/* Fallback if image is missing */}
                  <div className="absolute inset-0 flex items-center justify-center text-slate-300 -z-10">
                    <Stethoscope className="w-12 h-12" />
                  </div>
                </div>
                
                <div className="pt-2">
                  <h2 className="text-3xl font-black text-slate-950 tracking-tight leading-none mb-2 group-hover:text-teal-600 transition-colors">
                    {doctor.name}
                  </h2>
                  <span className="inline-block bg-slate-950 text-white px-3 py-1 rounded-lg text-sm font-black tracking-widest mb-3">
                    {doctor.credentials}
                  </span>
                  <p className="text-teal-600 font-bold text-sm uppercase tracking-wider flex items-center gap-1.5">
                    <ShieldCheck className="w-4 h-4" /> {doctor.role}
                  </p>
                </div>
              </div>

              {/* Bio & Specialties */}
              <div className="flex-1">
                <p className="text-slate-500 leading-relaxed mb-8 font-medium text-lg">
                  "{doctor.bio}"
                </p>
                
                <div className="space-y-3 mb-10">
                  <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Core Specialties</p>
                  <div className="flex flex-wrap gap-2">
                    {doctor.specialties.map((spec, sIdx) => (
                      <span key={sIdx} className="bg-slate-50 border border-slate-200 text-slate-700 px-4 py-2 rounded-xl text-sm font-bold">
                        {spec}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <Link 
                href="/patient-info" 
                className="w-full mt-auto py-4 rounded-2xl font-bold text-sm uppercase tracking-widest transition-all duration-300 flex items-center justify-center gap-2 bg-slate-50 text-slate-900 hover:bg-slate-950 hover:text-white"
              >
                Book with {doctor.name.split(' ')[1]} <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* 3. Support Staff Section */}
      <section className="max-w-6xl mx-auto px-6 mt-20">
        <div className="bg-slate-900 rounded-[2.5rem] p-10 md:p-16 flex flex-col md:flex-row items-center justify-between gap-10 overflow-hidden relative">
          <Activity className="absolute -right-10 -top-10 w-64 h-64 text-slate-800 opacity-50" />
          
          <div className="relative z-10 max-w-2xl">
            <h3 className="text-3xl font-black text-white mb-4">Supported by a Dedicated Clinical Team</h3>
            <p className="text-slate-400 text-lg leading-relaxed">
              Dr. Madhupal and Dr. Neha are backed by a rigorous team of registered nurses, specialized lab technicians, and 24/7 emergency responders. We work as a unified unit to ensure immediate care the second you walk through our doors.
            </p>
          </div>
          
          <Link href="/patient-info" className="relative z-10 shrink-0 bg-teal-500 text-slate-950 px-8 py-5 rounded-[2rem] font-black text-lg hover:bg-white transition-colors flex items-center gap-3">
            <CalendarCheck className="w-6 h-6" /> Contact Desk
          </Link>
        </div>
      </section>

    </main>
  );
}