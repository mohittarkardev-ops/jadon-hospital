import { Check, Sparkles, Activity, Heart, ShieldCheck, ArrowUpRight } from 'lucide-react';
import Link from 'next/link';

const packages = [
  {
    name: "General Wellness",
    tag: "Basic",
    price: "999",
    oldPrice: "2000",
    icon: <Activity className="w-6 h-6" />,
    color: "teal",
    features: ['CBC (Blood Count)', 'Blood Sugar (F/PP)', 'Lipid Profile', 'Doctor Consultation']
  },
  {
    name: "Total Body Checkup",
    tag: "Most Popular",
    price: "2,499",
    oldPrice: "5500",
    icon: <Sparkles className="w-6 h-6" />,
    color: "emerald",
    featured: true,
    features: ['65+ Parameters', 'Liver & Kidney Function', 'Thyroid Profile', 'ECG & Chest X-Ray', 'Vitamin D & B12']
  },
  {
    name: "Cardiac Screening",
    tag: "Specialized",
    price: "1,999",
    oldPrice: "4000",
    icon: <Heart className="w-6 h-6" />,
    color: "red",
    features: ['2D Echo Color Doppler', 'TMT (Treadmill Test)', 'Cardiologist Consult', 'ECG']
  }
];

export default function HealthPackages() {
  return (
    <section className="py-32 px-6 max-w-7xl mx-auto bg-white overflow-hidden">
      
      {/* Header with Background Decorative Text */}
      <div className="relative mb-20">
        <span className="absolute -top-10 left-0 text-9xl font-black text-slate-50 select-none -z-10">
          PREVENT
        </span>
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 relative z-10">
          <div className="max-w-xl">
            <h2 className="text-4xl md:text-5xl font-black text-slate-950 tracking-tight">
              Preventive <span className="text-teal-600">Health</span> Packages
            </h2>
            <p className="text-slate-500 mt-4 text-lg">
              Early detection is the best cure. Choose from our curated screening plans designed for every lifestyle.
            </p>
          </div>
          <Link href="/services" className="group inline-flex items-center gap-2 bg-slate-100 text-slate-900 px-6 py-3 rounded-full font-bold hover:bg-slate-950 hover:text-white transition-all">
            View All Plans <ArrowUpRight className="w-4 h-4 group-hover:rotate-45 transition-transform" />
          </Link>
        </div>
      </div>

      {/* Modern Card Grid */}
      <div className="grid lg:grid-cols-3 gap-8">
        {packages.map((pkg, idx) => (
          <div 
            key={idx}
            className={`group relative p-8 rounded-[2.5rem] border transition-all duration-500 ${
              pkg.featured 
              ? 'border-emerald-500 bg-emerald-50/30 shadow-2xl shadow-emerald-900/10 scale-105 z-10' 
              : 'border-slate-100 bg-white hover:border-teal-500 hover:shadow-xl hover:shadow-slate-200'
            }`}
          >
            {/* Top Row: Icon & Tag */}
            <div className="flex justify-between items-start mb-10">
              <div className={`p-4 rounded-2xl ${
                pkg.featured ? 'bg-emerald-500 text-white' : 'bg-slate-50 text-slate-600 group-hover:bg-teal-500 group-hover:text-white'
              } transition-colors duration-300`}>
                {pkg.icon}
              </div>
              <span className={`px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-widest border ${
                pkg.featured ? 'bg-emerald-100 border-emerald-200 text-emerald-700' : 'bg-white border-slate-200 text-slate-400 group-hover:border-teal-200 group-hover:text-teal-600'
              }`}>
                {pkg.tag}
              </span>
            </div>

            {/* Pricing Section */}
            <div className="mb-8">
              <h3 className="text-2xl font-black text-slate-950 mb-2 tracking-tight">{pkg.name}</h3>
              <div className="flex items-baseline gap-3">
                <span className={`text-4xl font-black ${pkg.featured ? 'text-emerald-600' : 'text-teal-600'}`}>
                  ₹{pkg.price}
                </span>
                <span className="text-slate-400 line-through font-medium italic">
                  ₹{pkg.oldPrice}
                </span>
              </div>
            </div>

            {/* Feature List */}
            <ul className="space-y-4 mb-12">
              {pkg.features.map((feature, fIdx) => (
                <li key={fIdx} className="flex items-center gap-3 text-sm font-medium text-slate-600">
                  <div className={`shrink-0 w-5 h-5 rounded-full flex items-center justify-center ${
                    pkg.featured ? 'bg-emerald-100 text-emerald-600' : 'bg-slate-100 text-slate-400 group-hover:bg-teal-100 group-hover:text-teal-600'
                  }`}>
                    <Check className="w-3 h-3 stroke-[3]" />
                  </div>
                  {feature}
                </li>
              ))}
            </ul>

            {/* CTA Button */}
            <button className={`w-full py-4 rounded-2xl font-black text-sm uppercase tracking-widest transition-all duration-300 flex items-center justify-center gap-2 ${
              pkg.featured 
              ? 'bg-emerald-600 text-white hover:bg-emerald-700 shadow-lg shadow-emerald-600/30' 
              : 'bg-slate-950 text-white hover:bg-teal-600'
            }`}>
              Book Package
              <ShieldCheck className="w-4 h-4" />
            </button>
          </div>
        ))}
      </div>

      {/* Trust Signal Footer */}
      <div className="mt-16 text-center">
        <p className="inline-flex items-center gap-2 text-slate-400 text-sm font-medium">
          <ShieldCheck className="w-4 h-4 text-teal-500" />
          All samples are processed in our NABL accredited laboratory.
        </p>
      </div>

    </section>
  );
}