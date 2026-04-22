import Image from 'next/link'; // Using standard img tags below for simplicity, but you can upgrade to next/image later
import Link from 'next/link';
import { ArrowRight, CheckCircle2, HeartPulse, ShieldCheck, Microscope } from 'lucide-react';

export const metadata = {
  title: 'About Us',
  description: 'Learn about Jadon Hospital & Ultrasound Centre. Delivering advanced medical diagnostics and 24/7 trauma care to Farah, Mathura.',
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-slate-50 selection:bg-teal-200 selection:text-teal-900 pb-24">
      
      {/* 1. Premium Hero Section */}
      <section className="relative bg-slate-950 pt-20 pb-32 md:pt-32 md:pb-40 px-6 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('/your-hospital-facade.jpg')] bg-cover bg-center opacity-20 mix-blend-overlay"></div>
        <div className="absolute top-0 right-1/4 w-full max-w-3xl h-full bg-teal-900/40 blur-[120px] rounded-full pointer-events-none"></div>
        
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md text-teal-400 text-sm font-bold tracking-tight mb-8">
            <ShieldCheck className="w-4 h-4" /> Established in Excellence
          </div>
          <h1 className="text-5xl md:text-7xl font-extralight text-white tracking-tight mb-8 leading-[1.1]">
            Committed to <br />
            <span className="font-black italic text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-white">
              clinical precision.
            </span>
          </h1>
          <p className="text-lg md:text-xl text-slate-400 max-w-2xl leading-relaxed font-medium">
            Jadon Hospital & Ultrasound Centre was founded with a single mission: to bring world-class, life-saving medical infrastructure to the heart of Farah, Mathura.
          </p>
        </div>
      </section>

      {/* 2. Our Story / Mission (Overlapping Hero) */}
      <section className="max-w-6xl mx-auto px-6 -mt-20 relative z-20">
        <div className="bg-white rounded-[2.5rem] p-8 md:p-16 shadow-2xl shadow-slate-200/50 border border-slate-100 flex flex-col lg:flex-row gap-12 items-center">
          <div className="flex-1 space-y-6">
            <h2 className="text-3xl md:text-4xl font-black text-slate-950 tracking-tight">Our Mission</h2>
            <p className="text-slate-600 text-lg leading-relaxed">
              We understand that in moments of medical crisis or critical diagnostics, time and accuracy are everything. That is why we have invested in state-of-the-art pathology, high-resolution ultrasound imaging, and a 24/7 trauma response unit.
            </p>
            <p className="text-slate-600 text-lg leading-relaxed">
              Our facility is designed not just to treat, but to heal. From our rigorously sanitized environments to our compassionate staff, every detail is engineered for patient recovery.
            </p>
            <ul className="space-y-3 pt-4">
              {['NABL Accredited Laboratory', 'Advanced 3D/4D Ultrasound', '24/7 Emergency & Ambulance', 'Expert Surgical Team'].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-slate-950 font-bold">
                  <CheckCircle2 className="w-5 h-5 text-teal-500" /> {item}
                </li>
              ))}
            </ul>
          </div>
          
          {/* REPLACE THIS WITH YOUR RECEPTION OR DOCTOR PHOTO */}
          <div className="flex-1 w-full relative">
            <div className="aspect-[4/5] bg-slate-200 rounded-[2rem] overflow-hidden relative border-8 border-white shadow-xl">
              <img 
                src="/reception-image.jpg" 
                alt="Jadon Hospital Reception" 
                className="w-full h-full object-cover"
              />
              {/* Fallback overlay if image doesn't exist yet */}
              <div className="absolute inset-0 flex items-center justify-center text-slate-400 font-bold text-sm bg-slate-100/50 backdrop-blur-sm -z-10">
                [Insert Reception Image: /public/reception-image.jpg]
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Infrastructure Gallery */}
      <section className="py-32 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-black text-slate-950 tracking-tight mb-4">World-Class Infrastructure</h2>
          <p className="text-slate-500 text-lg max-w-2xl mx-auto">Take a look inside our modern facility designed for patient comfort and clinical efficiency.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Photo 1 */}
          <div className="aspect-square bg-slate-200 rounded-[2rem] overflow-hidden group relative">
            <img src="/ultrasound-room.jpg" alt="High-Res Ultrasound Room" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-8">
              <span className="text-white font-bold text-lg">Ultrasound Suite</span>
            </div>
          </div>
          
          {/* Photo 2 */}
          <div className="aspect-square bg-slate-200 rounded-[2rem] overflow-hidden group relative">
            <img src="/pathology-lab.jpg" alt="Pathology Laboratory" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-8">
              <span className="text-white font-bold text-lg">Pathology Lab</span>
            </div>
          </div>

          {/* Photo 3 */}
          <div className="aspect-square bg-slate-200 rounded-[2rem] overflow-hidden group relative">
            <img src="/patient-ward.jpg" alt="Patient Recovery Ward" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-8">
              <span className="text-white font-bold text-lg">Recovery Wards</span>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Core Values Bento */}
      <section className="px-6 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-slate-950 p-10 rounded-[2.5rem] flex items-start gap-6 group hover:bg-slate-900 transition-colors">
            <div className="bg-teal-500/20 p-4 rounded-2xl text-teal-400 shrink-0">
              <HeartPulse className="w-8 h-8" />
            </div>
            <div>
              <h3 className="text-2xl font-black text-white mb-2">Patient-First Care</h3>
              <p className="text-slate-400 leading-relaxed">Every decision we make is centered around the well-being, comfort, and swift recovery of the individuals who walk through our doors.</p>
            </div>
          </div>
          
          <div className="bg-white border border-slate-200 p-10 rounded-[2.5rem] flex items-start gap-6 group hover:border-teal-500 transition-colors shadow-sm hover:shadow-xl">
            <div className="bg-teal-50 p-4 rounded-2xl text-teal-600 shrink-0 group-hover:bg-teal-500 group-hover:text-white transition-colors">
              <Microscope className="w-8 h-8" />
            </div>
            <div>
              <h3 className="text-2xl font-black text-slate-950 mb-2">Clinical Precision</h3>
              <p className="text-slate-500 leading-relaxed">By continually upgrading our diagnostic technology and laboratory equipment, we ensure our doctors have the exact data they need.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. CTA */}
      <section className="mt-32 text-center px-6">
        <h2 className="text-3xl md:text-4xl font-black text-slate-950 mb-6">Experience the Jadon Standard</h2>
        <Link 
          href="/patient-info" 
          className="inline-flex items-center gap-3 bg-teal-600 text-white px-10 py-4 rounded-2xl font-bold text-lg hover:bg-slate-950 transition-all duration-300 hover:-translate-y-1"
        >
          Book a Consultation <ArrowRight className="w-5 h-5" />
        </Link>
      </section>

    </main>
  );
}