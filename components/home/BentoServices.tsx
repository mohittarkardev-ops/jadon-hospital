import { Activity, Stethoscope, Droplets, Ambulance, ArrowRight, Microscope, Zap } from 'lucide-react';
import Link from 'next/link';

export default function BentoServices() {
  return (
    <section className="py-32 px-6 max-w-7xl mx-auto bg-slate-50">
      
      <div className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div className="max-w-2xl">
          <div className="flex items-center gap-2 text-teal-600 font-bold text-sm uppercase tracking-[0.2em] mb-4">
            <Zap className="w-4 h-4 fill-teal-600" />
            Clinical Excellence
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-slate-950 tracking-tight leading-none">
            Specialized Care <br /> 
            <span className="text-slate-400 font-light italic">Without Compromise.</span>
          </h2>
        </div>
        <Link href="/team" className="group flex items-center gap-2 text-slate-900 font-bold hover:text-teal-600 transition-colors">
          Explore All Departments <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>

      {/* Modern Bento Grid with Variable Heights */}
      <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-6 min-h-[600px]">
        
        {/* 1. PRIMARY FOCUS: Ultrasound (Spans 2x2) */}
        <div className="md:col-span-2 md:row-span-2 bg-slate-900 rounded-[2.5rem] p-10 text-white relative overflow-hidden group border border-slate-800 shadow-2xl shadow-teal-900/20">
          {/* Animated Background Glow */}
          <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-teal-500/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
          
          <div className="relative z-10 h-full flex flex-col">
            <div className="flex justify-between items-start mb-12">
              <div className="bg-teal-500 p-4 rounded-2xl shadow-lg shadow-teal-500/40">
                <Activity className="w-8 h-8 text-white" />
              </div>
              <div className="text-right">
                <p className="text-3xl font-black text-white">15k+</p>
                <p className="text-xs font-bold text-teal-400 uppercase tracking-widest">Scans Performed</p>
              </div>
            </div>
            
            <div className="mt-auto">
              <h3 className="text-3xl md:text-4xl font-black mb-4 leading-tight">
                High-Resolution <br />Ultrasound Imaging
              </h3>
              <p className="text-slate-400 text-lg leading-relaxed max-w-sm mb-8">
                Unrivaled clarity in 3D/4D diagnostics, setting the gold standard for prenatal and internal health screenings in Mathura.
              </p>
              <Link href="/patient-info" className="inline-flex items-center gap-3 bg-white text-slate-950 px-6 py-3 rounded-full font-bold hover:bg-teal-400 hover:text-white transition-all">
                Book Diagnostic <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>

        {/* 2. EMERGENCY: Ultrasound (Spans 2x1) */}
        <div className="md:col-span-2 bg-red-600 rounded-[2.5rem] p-8 text-white flex items-center justify-between group hover:shadow-2xl hover:shadow-red-600/30 transition-all duration-500 relative overflow-hidden">
          {/* Ambulance Icon Background Decor */}
          <Ambulance className="absolute -right-8 -bottom-8 w-48 h-48 text-white/10 -rotate-12 group-hover:rotate-0 transition-transform duration-700" />
          
          <div className="relative z-10 flex items-center gap-8">
            <div className="bg-white/20 backdrop-blur-md p-5 rounded-3xl border border-white/20">
              <Ambulance className="w-10 h-10" />
            </div>
            <div>
              <h3 className="text-2xl font-black mb-1 italic">24/7 Ultrasound Care</h3>
              <p className="text-red-100 font-medium">Immediate Emergency Response</p>
            </div>
          </div>
          <Link href="tel:+91XXXXXXXXXX" className="relative z-10 bg-white text-red-600 p-4 rounded-full hover:scale-110 transition-transform shadow-xl">
            <ArrowRight className="w-6 h-6" />
          </Link>
        </div>

        {/* 3. LABORATORY: Pathology (Spans 1x1) */}
        <div className="bg-white border border-slate-200 rounded-[2.5rem] p-8 group hover:border-teal-500 transition-all duration-300 shadow-sm hover:shadow-xl">
          <div className="bg-teal-50 w-14 h-14 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-teal-500 transition-colors">
            <Microscope className="w-7 h-7 text-teal-600 group-hover:text-white" />
          </div>
          <h3 className="text-xl font-black text-slate-950 mb-2">Advanced Lab</h3>
          <p className="text-slate-500 text-sm leading-relaxed">
            Rapid, precise blood work and biochemistry tests.
          </p>
        </div>

        {/* 4. TEAM: Specialists (Spans 1x1) */}
        <div className="bg-slate-100 rounded-[2.5rem] p-8 flex flex-col justify-between group hover:bg-slate-200 transition-colors border border-transparent hover:border-slate-300">
           <div className="flex -space-x-3">
              {[1,2,3].map((i) => (
                <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-slate-300 flex items-center justify-center">
                  <Stethoscope className="w-4 h-4 text-slate-600" />
                </div>
              ))}
              <div className="w-10 h-10 rounded-full border-2 border-white bg-teal-600 flex items-center justify-center text-[10px] text-white font-bold">
                +12
              </div>
           </div>
           <div>
             <h3 className="text-xl font-black text-slate-950 mb-1 leading-tight">Expert <br/>Specialists</h3>
             <Link href="/team" className="text-teal-600 text-xs font-black uppercase tracking-widest flex items-center gap-1 mt-2 group-hover:gap-3 transition-all">
               View Team <ArrowRight className="w-3 h-3" />
             </Link>
           </div>
        </div>

      </div>
    </section>
  );
}