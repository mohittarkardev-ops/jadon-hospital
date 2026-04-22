"use client";

import { useState } from 'react';
import Link from 'next/link';
import { 
  ShieldCheck, FileText, CalendarClock, Pill, 
  Smartphone, ArrowLeft, BellRing, CheckCircle2, Lock
} from 'lucide-react';

const upcomingFeatures = [
  {
    icon: <FileText className="w-6 h-6 text-teal-600" />,
    title: "Digital Lab & Scan Reports",
    description: "No more waiting in lines. Instantly view and download your Ultrasound and Pathology reports the second they are ready in our secure lab.",
    color: "bg-teal-50"
  },
  {
    icon: <CalendarClock className="w-6 h-6 text-indigo-600" />,
    title: "Real-Time Appointment Booking",
    description: "See the live schedules of Dr. Madhupal Singh and Dr. Neha Singh and lock in your consultation slot with a single click.",
    color: "bg-indigo-50"
  },
  {
    icon: <Pill className="w-6 h-6 text-emerald-600" />,
    title: "Active Prescription Vault",
    description: "Lost your paper prescription? Access your active medications, dosages, and doctor's notes directly from your phone at any pharmacy.",
    color: "bg-emerald-50"
  },
  {
    icon: <Smartphone className="w-6 h-6 text-rose-600" />,
    title: "Direct Doctor Messaging",
    description: "Have a quick follow-up question after your surgery or scan? Send a secure, direct message to your clinical team without having to call.",
    color: "bg-rose-50"
  }
];

export default function PortalComingSoonPage() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleNotifySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setIsSubmitted(true);
  };

  return (
    <main className="min-h-screen bg-slate-50 selection:bg-teal-200 selection:text-teal-900 pb-24">
      
      {/* 1. Hero Section */}
      <section className="bg-slate-950 pt-16 pb-32 px-6 relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-teal-600/20 blur-[120px] rounded-full pointer-events-none"></div>
        
        <div className="max-w-4xl mx-auto relative z-10 text-center">
          <div className="flex justify-center mb-8">
            <Link href="/" className="inline-flex items-center gap-2 text-sm font-bold text-slate-400 hover:text-white transition-colors">
              <ArrowLeft className="w-4 h-4" /> Back to Home
            </Link>
          </div>
          
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-teal-500/10 border border-teal-500/20 text-teal-400 text-sm font-black tracking-widest uppercase mb-8">
            <Lock className="w-4 h-4" /> Secure Patient Portal
          </div>
          
          <h1 className="text-5xl md:text-7xl font-black text-white tracking-tighter leading-[1.1] mb-6">
            The future of your healthcare is <span className="italic text-teal-400 font-light">loading.</span>
          </h1>
          
          <p className="text-lg md:text-xl text-slate-400 leading-relaxed font-medium max-w-2xl mx-auto">
            We are building a highly secure, world-class digital platform to put your medical records, appointments, and doctors right in your pocket. 
          </p>
        </div>
      </section>

      {/* 2. Features Grid (Overlapping Hero) */}
      <section className="max-w-6xl mx-auto px-6 -mt-16 relative z-20">
        <div className="bg-white rounded-[2.5rem] p-8 md:p-12 shadow-2xl shadow-slate-200/50 border border-slate-100">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-black text-slate-950 tracking-tight">What to expect from your portal</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {upcomingFeatures.map((feature, idx) => (
              <div key={idx} className="p-8 rounded-[2rem] border border-slate-100 hover:border-slate-300 transition-colors group">
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 ${feature.color} group-hover:scale-110 transition-transform`}>
                  {feature.icon}
                </div>
                <h3 className="text-xl font-black text-slate-950 mb-3">{feature.title}</h3>
                <p className="text-slate-500 leading-relaxed font-medium">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Waitlist CTA */}
      <section className="max-w-3xl mx-auto px-6 mt-24 text-center">
        <div className="bg-teal-50 rounded-[2.5rem] p-10 border border-teal-100">
          {!isSubmitted ? (
            <>
              <div className="flex justify-center mb-6">
                <div className="bg-teal-100 p-4 rounded-full text-teal-600">
                  <BellRing className="w-8 h-8" />
                </div>
              </div>
              <h3 className="text-3xl font-black text-slate-950 tracking-tight mb-4">Get notified when we launch</h3>
              <p className="text-slate-600 mb-8 font-medium">
                Drop your email or phone number below. We'll send you a secure link to create your account the day the portal goes live.
              </p>
              <form onSubmit={handleNotifySubmit} className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto">
                <input 
                  type="text" 
                  placeholder="Email or Phone Number" 
                  required
                  className="flex-1 bg-white border border-teal-200 rounded-2xl px-6 py-4 text-slate-900 font-medium focus:outline-none focus:ring-2 focus:ring-teal-500/20"
                />
                <button 
                  type="submit" 
                  className="bg-slate-950 text-white px-8 py-4 rounded-2xl font-bold hover:bg-teal-600 transition-all shadow-lg"
                >
                  Notify Me
                </button>
              </form>
              <p className="text-xs font-bold text-teal-600 uppercase tracking-widest mt-6 flex items-center justify-center gap-1.5">
                <ShieldCheck className="w-4 h-4" /> HIPAA & NHA India Compliant
              </p>
            </>
          ) : (
            <div className="py-8 animate-in zoom-in duration-500">
              <div className="flex justify-center mb-6">
                <div className="bg-emerald-100 p-4 rounded-full text-emerald-600">
                  <CheckCircle2 className="w-12 h-12" />
                </div>
              </div>
              <h3 className="text-3xl font-black text-slate-950 tracking-tight mb-4">You're on the list!</h3>
              <p className="text-slate-600 font-medium">
                Thank you. We will reach out securely as soon as the Jadon Patient Portal is ready for you.
              </p>
            </div>
          )}
        </div>
      </section>

    </main>
  );
}