import { Calendar, PhoneCall, ArrowRight, ShieldPlus, HeartPulse } from 'lucide-react';
import Link from 'next/link';

export default function Hero() {
  return (
    /* 1. KEY FIX: Added mb-24 to md:mb-32 to create space for the floating bar to "live" in */
    /* 2. KEY FIX: Changed overflow-hidden to overflow-visible on the section level */
    <section className="relative bg-slate-950 pt-20 pb-32 md:pt-32 md:pb-48 px-6 overflow-visible mb-24 md:mb-32">
      
      {/* 1. Dynamic Background Elements - Kept these restricted so they don't cause horizontal scroll */}
      <div className="absolute top-0 right-0 w-full h-full pointer-events-none overflow-hidden">
        <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-teal-600/10 blur-[120px] rounded-full animate-pulse"></div>
        <div className="absolute bottom-[10%] left-[-5%] w-[400px] h-[400px] bg-blue-900/20 blur-[100px] rounded-full"></div>
      </div>
      
      {/* 2. Main Content Wrapper */}
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="max-w-4xl">
          
          {/* Animated Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md text-teal-400 text-sm font-bold tracking-tight mb-8">
            <div className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-teal-500"></span>
            </div>
            Accredited Medical Excellence
          </div>
          
          <h1 className="text-5xl md:text-8xl text-white font-extralight tracking-tight leading-[0.95] mb-8">
            Redefining care. <br />
            <span className="font-black italic text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-teal-200 to-white">
              Restoring health.
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-slate-400 mb-12 max-w-xl leading-relaxed font-medium">
            Jadon Hospital & Ultrasound Centre combines elite medical expertise with cutting-edge diagnostics to provide a sanctuary for recovery.
          </p>
        </div>
      </div>

      {/* 3. The Floating Quick-Action Bar */}
      {/* 3. KEY FIX: translate-y-1/2 ensures the bar sits EXACTLY on the bottom edge line */}
      <div className="absolute bottom-0 left-0 w-full translate-y-1/2 px-4 z-30">
        <div className="max-w-6xl mx-auto">
          <div className="bg-white/90 backdrop-blur-2xl border border-slate-200 p-2 md:p-3 rounded-[2rem] md:rounded-[2.5rem] shadow-[0_32px_64px_-16px_rgba(0,0,0,0.3)] flex flex-col md:flex-row items-center gap-2">
            
            {/* Action Item 1 */}
            <div className="flex-1 w-full flex items-center gap-4 px-6 py-4 md:py-0">
              <div className="bg-teal-50 p-3 rounded-2xl">
                <HeartPulse className="w-6 h-6 text-teal-600" />
              </div>
              <div>
                <p className="text-[10px] font-black text-teal-600 uppercase tracking-[0.2em] mb-0.5">Availability</p>
                <h3 className="text-slate-950 font-bold text-base leading-tight">Consult a Specialist</h3>
              </div>
            </div>

            <div className="hidden md:block w-px h-12 bg-slate-200"></div>

            {/* Action Item 2 */}
            <div className="flex-1 w-full flex items-center gap-4 px-6 py-4 md:py-0">
              <div className="bg-slate-100 p-3 rounded-2xl">
                <PhoneCall className="w-6 h-6 text-slate-900" />
              </div>
              <div>
                <p className="text-[10px] font-black text-slate-500 uppercase tracking-[0.2em] mb-0.5">Emergency Line</p>
                <h3 className="text-slate-950 font-bold text-base leading-tight tracking-tight">+91-8384844353</h3>
              </div>
            </div>

            {/* Primary CTA Button */}
            <Link 
              href="/patient-info" 
              className="group w-full md:w-auto flex items-center justify-center gap-3 bg-slate-950 text-white px-10 py-5 rounded-[1.8rem] md:rounded-[2rem] font-bold text-lg hover:bg-teal-600 transition-all duration-500"
            >
              <Calendar className="w-5 h-5 text-teal-400 group-hover:text-white transition-colors" />
              <span className="whitespace-nowrap">Book Appointment</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1.5 transition-transform" />
            </Link>
            
          </div>
        </div>
      </div>
    </section>
  );
}