import SchemaMarkup from '@/components/seo/SchemaMarkup';
import Link from 'next/link';
import { Stethoscope, Award, GraduationCap, ArrowRight, ShieldCheck, Microscope, Activity } from 'lucide-react';

export const metadata = {
  title: 'Our Doctors',
  description: 'Meet the expert medical team at Jadon Hospital. Led by Dr. Madhupal Singh (MBBS, MS) and Dr. Neha Singh (MBBS).',
};

export default function TeamPage() {
  // E-E-A-T: Physician Schema linked to your Hospital Entity
  const teamSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Physician",
        "name": "Dr. Madhupal Singh", 
        "jobTitle": "Chief Surgeon & Head of Trauma",
        "medicalSpecialty": "General Surgery",
        "worksFor": { "@id": "https://jadon-hospital.vercel.app/#clinic" },
        "url": "https://jadon-hospital.vercel.app/team"
      },
      {
        "@type": "Physician",
        "name": "Dr. Neha Singh", 
        "jobTitle": "Lead Physician & Diagnostics Head",
        "medicalSpecialty": "General Medicine",
        "worksFor": { "@id": "https://jadon-hospital.vercel.app/#clinic" },
        "url": "https://jadon-hospital.vercel.app/team"
      }
    ]
  };

  return (
    <main className="min-h-screen bg-slate-50 font-sans pb-24 selection:bg-teal-200 selection:text-teal-900">
      {/* Invisible SEO Engine */}
      <SchemaMarkup schema={teamSchema} />
      
      {/* Premium Hero Section */}
      <section className="bg-slate-950 pt-20 pb-40 px-6 relative overflow-hidden">
        {/* Background Glow - Hidden on mobile for GPU performance */}
        <div className="hidden md:block absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-full bg-teal-900/30 blur-[120px] rounded-full pointer-events-none"></div>
        
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-teal-500/10 border border-teal-500/20 text-teal-400 text-sm font-bold tracking-wide mb-6">
            <ShieldCheck className="w-4 h-4" /> Verified Medical Experts
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold text-white tracking-tight mb-6">
            Meet Our Specialists
          </h1>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed">
            Expert care delivered by highly qualified professionals. Our clinical team brings decades of combined experience to ensure your health is in the best hands.
          </p>
        </div>
      </section>

      {/* Team Grid Overlapping the Hero */}
      <section className="max-w-5xl mx-auto px-6 -mt-24 relative z-20">
        <div className="grid md:grid-cols-2 gap-8">
          
          {/* Doctor Card 1: Dr. Madhupal Singh */}
          <div className="bg-white p-8 rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-100 hover:-translate-y-2 transition-transform duration-300 flex flex-col group">
            
            <div className="flex items-start justify-between mb-6">
              <div className="bg-teal-50 w-16 h-16 rounded-2xl flex items-center justify-center text-teal-600 group-hover:bg-teal-600 group-hover:text-white transition-colors duration-300 shrink-0">
                <Activity className="w-8 h-8" />
              </div>
              <span className="bg-slate-50 text-slate-600 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider border border-slate-200">
                Surgery & Trauma
              </span>
            </div>

            <h2 className="text-3xl font-extrabold text-slate-900 mb-1 tracking-tight">Dr. Madhupal Singh</h2>
            <p className="text-teal-600 font-bold mb-8 text-lg">Chief Surgeon & Head of Trauma</p>

            <div className="space-y-4 mb-10 flex-grow">
              <div className="flex items-start gap-3 text-slate-600">
                <GraduationCap className="w-5 h-5 text-teal-500 shrink-0 mt-0.5" />
                <p><strong className="text-slate-900">Education:</strong><br/>MBBS, MS</p>
              </div>
              <div className="flex items-start gap-3 text-slate-600">
                <Award className="w-5 h-5 text-teal-500 shrink-0 mt-0.5" />
                <p><strong className="text-slate-900">Expertise:</strong><br/>Extensive surgical expertise leading the trauma and surgical departments at Jadon Hospital.</p>
              </div>
              <div className="flex items-start gap-3 text-slate-600">
                <ShieldCheck className="w-5 h-5 text-teal-500 shrink-0 mt-0.5" />
                <p><strong className="text-slate-900">Commitment:</strong><br/>Ensures emergency operations and general surgeries are executed with peak clinical precision.</p>
              </div>
            </div>

            <div className="pt-6 border-t border-slate-100 mt-auto">
              <Link href="/patient-info" className="flex items-center justify-between w-full text-slate-900 font-bold group-hover:text-teal-600 transition-colors">
                Book Consultation
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

          {/* Doctor Card 2: Dr. Neha Singh */}
          <div className="bg-white p-8 rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-100 hover:-translate-y-2 transition-transform duration-300 flex flex-col group">
            
            <div className="flex items-start justify-between mb-6">
              <div className="bg-teal-50 w-16 h-16 rounded-2xl flex items-center justify-center text-teal-600 group-hover:bg-teal-600 group-hover:text-white transition-colors duration-300 shrink-0">
                <Stethoscope className="w-8 h-8" />
              </div>
              <span className="bg-slate-50 text-slate-600 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider border border-slate-200">
                Diagnostics & Medicine
              </span>
            </div>

            <h2 className="text-3xl font-extrabold text-slate-900 mb-1 tracking-tight">Dr. Neha Singh</h2>
            <p className="text-teal-600 font-bold mb-8 text-lg">Lead Physician & Diagnostics Head</p>

            <div className="space-y-4 mb-10 flex-grow">
              <div className="flex items-start gap-3 text-slate-600">
                <GraduationCap className="w-5 h-5 text-teal-500 shrink-0 mt-0.5" />
                <p><strong className="text-slate-900">Education:</strong><br/>MBBS</p>
              </div>
              <div className="flex items-start gap-3 text-slate-600">
                <Award className="w-5 h-5 text-teal-500 shrink-0 mt-0.5" />
                <p><strong className="text-slate-900">Expertise:</strong><br/>Oversees the diagnostic and general medicine wings with a focus on high-resolution ultrasound imaging.</p>
              </div>
              <div className="flex items-start gap-3 text-slate-600">
                <ShieldCheck className="w-5 h-5 text-teal-500 shrink-0 mt-0.5" />
                <p><strong className="text-slate-900">Commitment:</strong><br/>Dedicated to providing highly accurate maternal and internal health screenings.</p>
              </div>
            </div>

            <div className="pt-6 border-t border-slate-100 mt-auto">
              <Link href="/patient-info" className="flex items-center justify-between w-full text-slate-900 font-bold group-hover:text-teal-600 transition-colors">
                Book Consultation
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

        </div>
      </section>
    </main>
  );
}