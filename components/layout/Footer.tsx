import Link from 'next/link';
import { PhoneCall, MapPin, Mail, Clock, ChevronRight, ArrowUpRight } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="relative bg-slate-950 text-slate-400 pt-24 pb-12 overflow-hidden border-t border-slate-900">
      
      {/* Ambient Top Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-px bg-gradient-to-r from-transparent via-teal-500/50 to-transparent"></div>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-24 bg-teal-500/10 blur-[80px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 relative z-10">
        
        {/* 1. Brand & Emergency (Spans 4 columns) */}
        <div className="lg:col-span-4 space-y-8">
          <Link href="/" className="group flex items-center gap-4 w-fit">
            <div className="bg-white text-slate-950 w-12 h-12 flex items-center justify-center rounded-2xl shadow-lg group-hover:bg-teal-500 group-hover:text-white group-hover:-rotate-6 transition-all duration-500 font-black text-2xl">
              +
            </div>
            <div className="flex flex-col">
              <h2 className="font-black text-2xl text-white tracking-tighter leading-none transition-colors group-hover:text-teal-400">
                Jadon Hospital
              </h2>
              <span className="text-[10px] text-teal-600 font-black mt-1 tracking-[0.2em] uppercase">
                Ultrasound & Trauma
              </span>
            </div>
          </Link>
          
          <p className="text-sm leading-relaxed text-slate-400 pr-4">
            Delivering advanced medical diagnostics, 24/7 trauma response, and dedicated patient care to the Mathura district.
          </p>
          
          {/* Interactive Emergency Card */}
          <a href="tel:+918384844353" className="block bg-slate-900/50 border border-slate-800 p-5 rounded-2xl hover:bg-slate-900 hover:border-red-500/30 transition-all duration-300 group">
            <p className="text-[10px] text-slate-500 font-black uppercase tracking-[0.2em] mb-2 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
              24/7 Emergency Line
            </p>
            <p className="text-white font-black text-2xl flex items-center justify-between">
              +91-8384844353
              <ArrowUpRight className="w-5 h-5 text-slate-600 group-hover:text-red-400 transition-colors" />
            </p>
          </a>
        </div>

        {/* 2. Quick Links (Spans 2 columns) */}
        <div className="lg:col-span-2 lg:col-start-6">
          <h3 className="text-white font-black text-lg mb-6 tracking-tight">Patient Links</h3>
          <ul className="space-y-4 text-sm font-medium">
            {[
              { name: 'Book Appointment', href: '/patient-info' },
              { name: 'Find a Doctor', href: '/team' },
              { name: 'Accepted Insurance', href: '/patient-info' },
              { name: 'Patient Portal', href: '/portal', highlight: true },
            ].map((link) => (
              <li key={link.name}>
                <Link href={link.href} className={`group flex items-center transition-colors ${link.highlight ? 'text-teal-400 hover:text-teal-300' : 'text-slate-400 hover:text-white'}`}>
                  <ChevronRight className="w-4 h-4 opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300 text-teal-500 mr-1" />
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* 3. Departments (Spans 2 columns) */}
        <div className="lg:col-span-2">
          <h3 className="text-white font-black text-lg mb-6 tracking-tight">Departments</h3>
          <ul className="space-y-4 text-sm font-medium">
            {['Trauma & ER', 'High-Res Ultrasound', 'Pathology Lab', 'General Surgery'].map((dept) => (
              <li key={dept}>
                <Link href="/services" className="group flex items-center text-slate-400 hover:text-white transition-colors">
                  <ChevronRight className="w-4 h-4 opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300 text-teal-500 mr-1" />
                  {dept}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* 4. Contact Info (Spans 3 columns) */}
        <div className="lg:col-span-3">
          <h3 className="text-white font-black text-lg mb-6 tracking-tight">Contact & Hours</h3>
          <ul className="space-y-5 text-sm">
            <li className="flex items-start gap-4 group">
              <div className="bg-slate-900 p-2.5 rounded-xl text-teal-500 group-hover:bg-teal-500 group-hover:text-white transition-colors shrink-0">
                <MapPin className="w-4 h-4" />
              </div>
              <span className="text-slate-400 leading-relaxed mt-1">NH-19, Nearby PM Shri Govt. Girls' Inter College, Farah, Mathura, UP 281122</span>
            </li>
            <li className="flex items-center gap-4 group">
              <div className="bg-slate-900 p-2.5 rounded-xl text-teal-500 group-hover:bg-teal-500 group-hover:text-white transition-colors shrink-0">
                <Mail className="w-4 h-4" />
              </div>
              <a href="mailto:nvsict06@gmail.com" className="text-slate-400 hover:text-white transition-colors">nvsict06@gmail.com</a>
            </li>
            <li className="flex items-center gap-4 group">
              <div className="bg-slate-900 p-2.5 rounded-xl text-teal-500 group-hover:bg-teal-500 group-hover:text-white transition-colors shrink-0">
                <Clock className="w-4 h-4" />
              </div>
              <span className="text-slate-400">Open 24 Hours, 7 Days a week</span>
            </li>
          </ul>
        </div>

      </div>

      {/* Bottom Legal Bar */}
      <div className="max-w-7xl mx-auto px-6 mt-20 pt-8 border-t border-slate-800/50 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-slate-500 font-medium">
          © {new Date().getFullYear()} <span className="text-slate-300">Jadon Hospital & Ultrasound Centre.</span> All rights reserved.
        </p>
        <div className="flex items-center gap-6 text-sm font-medium">
          <Link href="/privacy" className="text-slate-500 hover:text-white transition-colors">Privacy Policy</Link>
          <div className="w-1 h-1 rounded-full bg-slate-700"></div>
          <Link href="/terms" className="text-slate-500 hover:text-white transition-colors">Terms of Service</Link>
        </div>
      </div>
    </footer>
  );
}