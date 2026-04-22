"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
  FileText, Menu, X, ChevronRight, Phone, CalendarCheck, Ambulance 
} from 'lucide-react';

// 1. Structured Navigation Data (Prevents broken links)
const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Services', href: '/services' },
  { name: 'Doctors', href: '/doctors' },
];

const mobileExtraLinks = [
  { name: 'Patient Portal', href: '/portal' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname(); // Allows us to track the active page

  // Smooth Glassmorphism on Scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    // Cleanup on unmount
    return () => { document.body.style.overflow = 'unset'; };
  }, [mobileMenuOpen]);

  // Close mobile menu automatically when the route changes
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  return (
    <>
      {/* STICKY HEADER */}
      <header 
        className={`sticky top-0 z-[100] w-full transition-all duration-300 ${
          isScrolled 
            ? 'bg-white/85 backdrop-blur-xl border-b border-slate-200/60 shadow-sm' 
            : 'bg-white/50 backdrop-blur-md border-b border-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-6 h-20 flex items-center justify-between">
          
          {/* BRAND LOGO */}
          <Link href="/" className="group flex items-center gap-3 relative z-[105]">
            <div className="bg-slate-950 text-white w-10 h-10 flex items-center justify-center rounded-xl shadow-md group-hover:bg-teal-600 group-hover:-rotate-6 transition-all duration-300 font-black text-xl">
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
          
          {/* DESKTOP NAVIGATION (With Active State Highlighting) */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link 
                  key={link.name}
                  href={link.href}
                  className={`relative text-[15px] font-bold transition-colors group py-2 ${
                    isActive ? 'text-teal-600' : 'text-slate-600 hover:text-slate-950'
                  }`}
                >
                  {link.name}
                  <span className={`absolute bottom-0 left-0 h-[2px] bg-teal-500 transition-all duration-300 ${
                    isActive ? 'w-full' : 'w-0 group-hover:w-full'
                  }`}></span>
                </Link>
              );
            })}
          </nav>

          {/* DESKTOP ACTIONS */}
          <div className="hidden lg:flex items-center gap-6">
            <Link href="/portal" className="group flex items-center gap-2">
              <div className="relative">
                <FileText className={`w-5 h-5 transition-colors ${pathname === '/portal' ? 'text-teal-600' : 'text-slate-400 group-hover:text-teal-600'}`} />
                <span className="absolute -top-1 -right-1 w-2 h-2 bg-teal-500 rounded-full border border-white animate-pulse"></span>
              </div>
              <span className={`text-xs font-bold transition-colors ${pathname === '/portal' ? 'text-slate-950' : 'text-slate-500 group-hover:text-slate-950'}`}>
                Patient Portal
              </span>
            </Link>

            <div className="h-6 w-px bg-slate-200"></div>
            
            <Link 
              href="/patient-info" 
              className="flex items-center gap-2 bg-slate-950 text-white px-5 py-2.5 rounded-xl text-sm font-bold hover:bg-teal-600 hover:shadow-lg hover:shadow-teal-600/20 transition-all duration-300"
            >
              <CalendarCheck className="w-4 h-4 text-teal-400" />
              Book Visit
            </Link>
          </div>

          {/* MOBILE MENU TOGGLE */}
          <button 
            onClick={() => setMobileMenuOpen(true)}
            className="lg:hidden p-2 -mr-2 text-slate-950 rounded-xl hover:bg-slate-100 transition-all"
            aria-label="Open Menu"
          >
            <Menu className="w-6 h-6" />
          </button>

        </div>
      </header>

      {/* MOBILE SLIDE-OVER MENU */}
      
      {/* Background Dimmer Overlay */}
      <div 
        className={`fixed inset-0 bg-slate-950/30 backdrop-blur-sm z-[110] transition-opacity duration-300 lg:hidden ${
          mobileMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setMobileMenuOpen(false)} 
      />

      {/* Slide-out Panel */}
      <div 
        className={`fixed top-0 right-0 h-full w-[85vw] sm:w-[350px] bg-white z-[120] shadow-2xl flex flex-col transition-transform duration-500 ease-out lg:hidden ${
          mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Menu Header */}
        <div className="flex items-center justify-between px-6 h-20 border-b border-slate-100 shrink-0">
          <span className="font-black text-lg text-slate-950 tracking-tight">Menu</span>
          <button 
            onClick={() => setMobileMenuOpen(false)}
            className="p-2 bg-slate-100 text-slate-500 rounded-full hover:bg-slate-200 hover:text-slate-900 transition-colors"
            aria-label="Close Menu"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Menu Content */}
        <div className="flex-1 overflow-y-auto px-6 py-8 flex flex-col justify-between">
          <div className="space-y-2">
            {[...navLinks, ...mobileExtraLinks].map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link 
                  key={link.name}
                  href={link.href}
                  className={`flex items-center justify-between py-4 px-2 text-2xl font-black rounded-2xl group transition-all ${
                    isActive ? 'text-teal-600 bg-teal-50' : 'text-slate-900 hover:bg-slate-50'
                  }`}
                >
                  {link.name}
                  <ChevronRight className={`w-6 h-6 transition-transform ${
                    isActive ? 'text-teal-500 translate-x-1' : 'text-slate-300 group-hover:text-teal-500 group-hover:translate-x-1'
                  }`} />
                </Link>
              );
            })}
          </div>
          
          {/* Mobile Bottom Actions */}
          <div className="mt-10 space-y-3">
             <Link 
               href="tel:+918384844353" 
               className="flex items-center justify-center gap-3 w-full bg-slate-950 text-white p-4 rounded-xl font-bold hover:bg-teal-600 transition-colors"
             >
                <Phone className="w-5 h-5 text-teal-400" /> Call Reception
             </Link>
             <Link 
               href="/patient-info" 
               className="flex items-center justify-center gap-3 w-full bg-red-50 text-red-600 border border-red-100 p-4 rounded-xl font-bold hover:bg-red-100 transition-colors"
             >
                <Ambulance className="w-5 h-5" /> 24/7 Emergency
             </Link>
          </div>
        </div>
      </div>
    </>
  );
}