"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Ambulance, FileText, Menu, X, ChevronRight, Phone } from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Handle scroll effect for glassmorphism
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`sticky top-0 z-[100] transition-all duration-500 ${
        isScrolled 
          ? 'bg-white/90 backdrop-blur-2xl py-3 shadow-xl shadow-slate-900/5' 
          : 'bg-white/50 backdrop-blur-md py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-6 flex items-center justify-between">
        
        {/* 1. BRAND LOGO */}
        <Link href="/" className="group flex items-center gap-3">
          <div className="bg-slate-950 text-white w-11 h-11 flex items-center justify-center rounded-2xl shadow-lg group-hover:bg-teal-600 group-hover:rotate-[10deg] transition-all duration-500 font-bold text-2xl">
            +
          </div>
          <div className="flex flex-col">
            <h1 className="font-black text-xl text-slate-950 tracking-tighter leading-none">
              Jadon Hospital
            </h1>
            <span className="text-[9px] text-teal-600 font-black mt-1 tracking-[0.2em] uppercase">
              Ultrasound & Trauma
            </span>
          </div>
        </Link>
        
        {/* 2. DESKTOP NAVIGATION */}
        <nav className="hidden lg:flex items-center gap-10">
          {['Home', 'About', 'Doctors'].map((item) => (
            <Link 
              key={item}
              href={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
              className="relative text-sm font-bold text-slate-600 hover:text-slate-950 transition-colors group"
            >
              {item}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-teal-500 transition-all duration-300 group-hover:w-full"></span>
            </Link>
          ))}
          
          <Link href="/patient-info" className="flex items-center gap-2 bg-red-500 text-white px-5 py-2 rounded-full text-xs font-black uppercase tracking-widest hover:bg-red-600 hover:shadow-lg hover:shadow-red-500/30 transition-all active:scale-95">
            <Ambulance className="w-3.5 h-3.5 animate-pulse" /> 
            Ambulance
          </Link>
        </nav>

        {/* 3. DESKTOP ACTIONS */}
        <div className="hidden md:flex items-center gap-6">
          <Link href="/portal" className="group flex items-center gap-2">
            <div className="relative">
              <FileText className="w-5 h-5 text-slate-400 group-hover:text-teal-600 transition-colors" />
              <span className="absolute -top-1 -right-1 w-2 h-2 bg-teal-500 rounded-full border-2 border-white animate-bounce"></span>
            </div>
            <span className="text-xs font-bold text-slate-500 group-hover:text-slate-950 transition-colors hidden xl:inline">
              Patient Portal
            </span>
          </Link>
          
          <Link 
            href="/patient-info" 
            className="bg-slate-950 text-white px-7 py-3 rounded-2xl text-xs font-black uppercase tracking-[0.1em] hover:bg-teal-600 hover:shadow-2xl hover:shadow-teal-600/40 transition-all duration-500"
          >
            Book Appointment
          </Link>
        </div>

        {/* 4. MOBILE TOGGLE */}
        <button 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 text-slate-900 bg-slate-100 rounded-xl hover:bg-teal-50 hover:text-teal-600 transition-all"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>

      </div>

      {/* 5. MOBILE OVERLAY MENU */}
      <div className={`fixed inset-0 top-20 bg-white/95 backdrop-blur-3xl lg:hidden transition-all duration-500 ${
        mobileMenuOpen ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-full pointer-events-none'
      }`}>
        <div className="flex flex-col p-8 gap-8">
          <div className="space-y-4">
            <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Navigation</p>
            {['Home', 'About', 'Doctors', 'Patient Info'].map((item) => (
              <Link 
                key={item}
                href={item === 'Home' ? '/' : `/${item.toLowerCase().replace(' ', '-')}`}
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between text-2xl font-black text-slate-950 group"
              >
                {item}
                <ChevronRight className="w-6 h-6 text-teal-500 group-hover:translate-x-2 transition-transform" />
              </Link>
            ))}
          </div>
          
          <div className="pt-8 border-t border-slate-100 space-y-4">
             <Link href="tel:+918384844353" className="flex items-center justify-center gap-3 bg-teal-600 text-white p-5 rounded-2xl font-black">
                <Phone className="w-5 h-5" /> Call Reception
             </Link>
             <Link href="/patient-info" className="flex items-center justify-center gap-3 bg-red-600 text-white p-5 rounded-2xl font-black">
                <Ambulance className="w-5 h-5" /> Emergency Ambulance
             </Link>
          </div>
        </div>
      </div>
    </header>
  );
}