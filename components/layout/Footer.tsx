import Link from 'next/link';
import { PhoneCall, MapPin, Mail, Clock } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-400 py-16 border-t-[6px] border-teal-600">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        
        {/* Brand & Emergency */}
        <div className="space-y-6">
          <Link href="/" className="flex items-center gap-3 inline-block">
            <div className="bg-teal-600 text-white w-10 h-10 flex items-center justify-center rounded-lg shadow-sm font-bold text-xl">
              +
            </div>
            <div>
              <h2 className="font-bold text-xl text-white leading-none">Jadon Hospital</h2>
              <p className="text-[10px] text-teal-500 font-semibold mt-1">HOSPITAL & Ultrasound CENTRE</p>
            </div>
          </Link>
          <p className="text-sm leading-relaxed">
            Delivering advanced medical diagnostics, Ultrasound response, and dedicated patient care to the Mathura district.
          </p>
          <div className="bg-slate-900 p-4 rounded-xl border border-slate-800">
            <p className="text-xs text-slate-500 uppercase tracking-wider font-bold mb-1">24/7 Emergency</p>
            <p className="text-red-400 font-bold text-lg flex items-center gap-2">
              <PhoneCall className="w-4 h-4" /> +91-8384844353
            </p>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-white font-bold text-lg mb-6">Patient Links</h3>
          <ul className="space-y-3 text-sm font-medium">
            <li><Link href="/patient-info" className="hover:text-teal-400 transition">Book Appointment</Link></li>
            <li><Link href="/team" className="hover:text-teal-400 transition">Find a Doctor</Link></li>
            <li><Link href="/patient-info" className="hover:text-teal-400 transition">Accepted Insurance</Link></li>
            <li><Link href="/portal" className="hover:text-teal-400 transition text-teal-500">Open Patient Portal</Link></li>
          </ul>
        </div>

        {/* Departments */}
        <div>
          <h3 className="text-white font-bold text-lg mb-6">Departments</h3>
          <ul className="space-y-3 text-sm font-medium">
            <li className="hover:text-white transition cursor-pointer">Ultrasound & Emergency</li>
            <li className="hover:text-white transition cursor-pointer">High-Res Ultrasound</li>
            <li className="hover:text-white transition cursor-pointer">Pathology Laboratory</li>
            <li className="hover:text-white transition cursor-pointer">General Surgery</li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-white font-bold text-lg mb-6">Contact & Hours</h3>
          <ul className="space-y-4 text-sm">
            <li className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-teal-600 shrink-0" />
              <span>NH-19, nearby PM Shri Govt. Girls' Inter College, Farah, Mathura, UP 281122</span>
            </li>
            <li className="flex items-center gap-3">
              <Mail className="w-5 h-5 text-teal-600 shrink-0" />
              <span>contact@jadonhospital.com</span>
            </li>
            <li className="flex items-center gap-3">
              <Clock className="w-5 h-5 text-teal-600 shrink-0" />
              <span>Open 24 Hours, 7 Days a week</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 mt-16 pt-8 border-t border-slate-800 text-sm text-slate-500 flex flex-col md:flex-row items-center justify-between gap-4">
        <p>© {new Date().getFullYear()} Jadon Hospital & Ultrasound Centre. All rights reserved.</p>
        <div className="flex gap-4">
          <Link href="/privacy" className="hover:text-white transition">Privacy Policy</Link>
          <Link href="/terms" className="hover:text-white transition">Terms of Service</Link>
        </div>
      </div>
    </footer>
  );
}