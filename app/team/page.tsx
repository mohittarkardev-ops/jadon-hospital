import SchemaMarkup from '@/components/seo/SchemaMarkup';
import Link from 'next/link';
import { Stethoscope, Award, GraduationCap, ArrowRight, ShieldCheck, Microscope } from 'lucide-react';

export default function TeamPage() {
  // E-E-A-T: Physician Schema linked to your Hospital Entity
  const teamSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Physician",
        "name": "Dr. John Doe", 
        "jobTitle": "Chief Radiologist",
        "medicalSpecialty": "Radiology",
        "worksFor": { "@id": "https://jadon-hospital.vercel.app/#clinic" },
        "url": "https://jadon-hospital.vercel.app/team"
      },
      {
        "@type": "Physician",
        "name": "Dr. Jane Smith", 
        "jobTitle": "Senior Pathologist",
        "medicalSpecialty": "Pathology",
        "worksFor": { "@id": "https://jadon-hospital.vercel.app/#clinic" },
        "url": "https://jadon-hospital.vercel.app/team"
      }
    ]
  };

  return (
    <main className="min-h-screen bg-slate-50 font-sans pb-24 selection:bg-teal-200 selection:text-teal-900">
      <SchemaMarkup schema={teamSchema} />
      
      {/* Premium Hero Section */}
      <section className="bg-slate-900 pt-20 pb-40 px-6 relative overflow-hidden">
        {/* Background Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-full bg-teal-900/30 blur-[120px] rounded-full pointer-events-none"></div>
        
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-teal-500/10 border border-teal-500/20 text-teal-400 text-sm font-bold tracking-wide mb-6">
            <ShieldCheck className="w-4 h-4" /> Verified Medical Experts
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold text-white tracking-tight mb-6">
            Meet Our Specialists
          </h1>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed">
            Expert care delivered by highly qualified professionals. Our medical team brings decades of combined experience to ensure your health is in the best hands.
          </p>
        </div>
      </section>

      {/* Team Grid Overlapping the Hero */}
      <section className="max-w-5xl mx-auto px-6 -mt-24 relative z-20">
        <div className="grid md:grid-cols-2 gap-8">
          
          {/* Doctor Card 1: Radiologist */}
          <div className="bg-white p-8 rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-100 hover:-translate-y-2 transition-transform duration-300 flex flex-col group">
            
            <div className="flex items-start justify-between mb-6">
              <div className="bg-teal-50 w-16 h-16 rounded-2xl flex items-center justify-center text-teal-600 group-hover:bg-teal-600 group-hover:text-white transition-colors duration-300 shrink-0">
                <Stethoscope className="w-8 h-8" />
              </div>
              <span className="bg-slate-50 text-slate-600 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider border border-slate-200">
                Radiology
              </span>
            </div>

            <h2 className="text-3xl font-extrabold text-slate-900 mb-1 tracking-tight">Dr. John Doe</h2>
            <p className="text-teal-600 font-bold mb-8 text-lg">Chief Radiologist</p>

            <div className="space-y-4 mb-10 flex-grow">
              <div className="flex items-start gap-3 text-slate-600">
                <GraduationCap className="w-5 h-5 text-teal-500 shrink-0 mt-0.5" />
                <p><strong className="text-slate-900">Education:</strong><br/>MBBS, MD (Radiology)</p>
              </div>
              <div className="flex items-start gap-3 text-slate-600">
                <Award className="w-5 h-5 text-teal-500 shrink-0 mt-0.5" />
                <p><strong className="text-slate-900">Experience:</strong><br/>Over 15 years in advanced diagnostic imaging and ultrasonography.</p>
              </div>
              <div className="flex items-start gap-3 text-slate-600">
                <ShieldCheck className="w-5 h-5 text-teal-500 shrink-0 mt-0.5" />
                <p><strong className="text-slate-900">Registration No:</strong><br/>XXXXXX</p>
              </div>
            </div>

            <div className="pt-6 border-t border-slate-100 mt-auto">
              <Link href="/patient-info" className="flex items-center justify-between w-full text-slate-900 font-bold group-hover:text-teal-600 transition-colors">
                Book Consultation
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

          {/* Doctor Card 2: Pathologist */}
          <div className="bg-white p-8 rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-100 hover:-translate-y-2 transition-transform duration-300 flex flex-col group">
            
            <div className="flex items-start justify-between mb-6">
              <div className="bg-teal-50 w-16 h-16 rounded-2xl flex items-center justify-center text-teal-600 group-hover:bg-teal-600 group-hover:text-white transition-colors duration-300 shrink-0">
                <Microscope className="w-8 h-8" />
              </div>
              <span className="bg-slate-50 text-slate-600 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider border border-slate-200">
                Pathology
              </span>
            </div>

            <h2 className="text-3xl font-extrabold text-slate-900 mb-1 tracking-tight">Dr. Jane Smith</h2>
            <p className="text-teal-600 font-bold mb-8 text-lg">Senior Pathologist</p>

            <div className="space-y-4 mb-10 flex-grow">
              <div className="flex items-start gap-3 text-slate-600">
                <GraduationCap className="w-5 h-5 text-teal-500 shrink-0 mt-0.5" />
                <p><strong className="text-slate-900">Education:</strong><br/>MBBS, MD (Pathology)</p>
              </div>
              <div className="flex items-start gap-3 text-slate-600">
                <Award className="w-5 h-5 text-teal-500 shrink-0 mt-0.5" />
                <p><strong className="text-slate-900">Experience:</strong><br/>Specializing in clinical pathology with a focus on rapid, accurate lab results.</p>
              </div>
              <div className="flex items-start gap-3 text-slate-600">
                <ShieldCheck className="w-5 h-5 text-teal-500 shrink-0 mt-0.5" />
                <p><strong className="text-slate-900">Registration No:</strong><br/>YYYYYY</p>
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