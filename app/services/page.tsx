import Link from 'next/link';
import { 
  Activity, Ambulance, Microscope, Stethoscope, 
  ArrowRight, ShieldCheck, HeartPulse, FileText, CheckCircle2
} from 'lucide-react';

export const metadata = {
  title: 'Medical Services & Diagnostics',
  description: 'Comprehensive healthcare services including 24/7 Trauma Care, High-Resolution Ultrasound, and NABL Accredited Pathology at Jadon Hospital.',
};

const services = [
  {
    id: "ultrasound",
    title: "High-Resolution Ultrasound",
    icon: <Activity className="w-8 h-8" />,
    shortDesc: "State-of-the-art 3D/4D diagnostic imaging for prenatal, abdominal, and vascular screenings.",
    features: ["Anomaly Scans", "Fetal Doppler", "Whole Abdomen", "KUB & Pelvic Scans"],
    color: "teal",
    image: "/ultrasound-room.jpg",
  },
  {
    id: "trauma",
    title: "24/7 Emergency & Trauma",
    icon: <Ambulance className="w-8 h-8" />,
    shortDesc: "Immediate, life-saving medical response with a fully equipped ER and critical care stabilization unit.",
    features: ["Accident Response", "Cardiac Emergencies", "Minor Surgeries", "On-Call Ambulance"],
    color: "red",
    image: "/reception-image.jpg",
  },
  {
    id: "pathology",
    title: "Pathology Laboratory",
    icon: <Microscope className="w-8 h-8" />,
    shortDesc: "Rapid and precise biochemistry, hematology, and clinical pathology tests in our advanced lab.",
    features: ["Complete Blood Count", "Lipid & Thyroid Profiles", "Liver Function Tests", "Hormonal Assays"],
    color: "indigo",
    image: "/pathology-lab.jpg",
  },
  {
    id: "general-medicine",
    title: "General Medicine & Surgery",
    icon: <Stethoscope className="w-8 h-8" />,
    shortDesc: "Expert outpatient consultations and surgical interventions led by Dr. Madhupal Singh and Dr. Neha Singh.",
    features: ["General Surgery", "Fever & Infection Care", "Chronic Disease Management", "Post-Op Recovery"],
    color: "slate",
    image: "/patient-ward.jpg",
  }
];

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-slate-50 selection:bg-teal-200 selection:text-teal-900 pb-24">
      
      {/* 1. Hero Section */}
      <section className="bg-slate-950 pt-20 pb-32 px-6 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-full h-full pointer-events-none">
          <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-teal-600/20 blur-[120px] rounded-full"></div>
        </div>
        
        <div className="max-w-6xl mx-auto relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md text-teal-400 text-sm font-bold tracking-tight mb-6">
            <HeartPulse className="w-4 h-4" /> Comprehensive Care
          </div>
          <h1 className="text-4xl md:text-7xl font-black text-white tracking-tighter leading-[1.1] mb-6 max-w-4xl mx-auto">
            Advanced Diagnostics. <br />
            <span className="font-light italic text-slate-300">Compassionate Healing.</span>
          </h1>
          <p className="text-slate-400 text-lg md:text-xl font-medium max-w-2xl mx-auto leading-relaxed">
            Explore our specialized medical departments. We combine cutting-edge technology with rigorous clinical protocols to ensure accurate diagnoses and rapid recovery.
          </p>
        </div>
      </section>

      {/* 2. Z-Pattern Services Layout */}
      <section className="max-w-6xl mx-auto px-6 -mt-16 relative z-20 space-y-8 md:space-y-12">
        {services.map((service, idx) => {
          // Dynamic colors based on the service theme
          const isTeal = service.color === 'teal';
          const isRed = service.color === 'red';
          const isIndigo = service.color === 'indigo';
          
          let iconBg = 'bg-slate-100 text-slate-600';
          let highlightColor = 'text-slate-950';
          
          if (isTeal) { iconBg = 'bg-teal-50 text-teal-600'; highlightColor = 'text-teal-600'; }
          if (isRed) { iconBg = 'bg-red-50 text-red-600'; highlightColor = 'text-red-600'; }
          if (isIndigo) { iconBg = 'bg-indigo-50 text-indigo-600'; highlightColor = 'text-indigo-600'; }

          // Alternate layout direction
          const isEven = idx % 2 !== 0;

          return (
            <div key={service.id} id={service.id} className={`bg-white rounded-[2.5rem] p-6 md:p-10 shadow-xl shadow-slate-200/50 border border-slate-100 flex flex-col ${isEven ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-10 lg:gap-16 items-center group overflow-hidden`}>
              
              {/* Image Block */}
              <div className="w-full lg:w-1/2 relative aspect-[4/3] rounded-[2rem] overflow-hidden bg-slate-100 shrink-0">
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                />
                <div className="absolute inset-0 bg-slate-950/10 group-hover:bg-transparent transition-colors duration-500"></div>
              </div>

              {/* Content Block */}
              <div className="w-full lg:w-1/2 flex flex-col justify-center">
                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 ${iconBg}`}>
                  {service.icon}
                </div>
                
                <h2 className="text-3xl md:text-4xl font-black text-slate-950 tracking-tight mb-4">
                  {service.title}
                </h2>
                
                <p className="text-slate-500 text-lg leading-relaxed mb-8 font-medium">
                  {service.shortDesc}
                </p>

                <div className="mb-10">
                  <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-4">Key Procedures & Facilities</p>
                  <ul className="grid sm:grid-cols-2 gap-4">
                    {service.features.map((feature, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-3 font-bold text-slate-700">
                        <CheckCircle2 className={`w-5 h-5 shrink-0 ${highlightColor}`} />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <Link 
                  href={service.id === 'trauma' ? 'tel:+918384844353' : '/patient-info'} 
                  className={`inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl font-bold text-sm uppercase tracking-widest transition-all w-full sm:w-max ${
                    isRed 
                      ? 'bg-red-50 text-red-600 hover:bg-red-600 hover:text-white' 
                      : 'bg-slate-50 text-slate-900 hover:bg-slate-950 hover:text-white'
                  }`}
                >
                  {service.id === 'trauma' ? 'Call Emergency' : 'Book this Service'} <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

            </div>
          );
        })}
      </section>

      {/* 3. Bottom Trust Banner */}
      <section className="max-w-6xl mx-auto px-6 mt-20">
        <div className="bg-teal-600 rounded-[2.5rem] p-10 md:p-16 flex flex-col md:flex-row items-center justify-between gap-10 overflow-hidden relative">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-teal-500 rounded-full mix-blend-screen blur-[80px] pointer-events-none"></div>
          
          <div className="relative z-10 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-teal-700/50 text-teal-100 text-sm font-bold tracking-tight mb-6">
              <ShieldCheck className="w-4 h-4" /> NHA India Guidelines
            </div>
            <h3 className="text-3xl font-black text-white mb-4">Need your diagnostic reports?</h3>
            <p className="text-teal-100 text-lg leading-relaxed">
              Jadon Hospital is transitioning to a fully digital infrastructure. Soon, you will be able to access all your ultrasound and lab reports securely online.
            </p>
          </div>
          
          <Link href="/portal" className="relative z-10 shrink-0 bg-slate-950 text-white px-8 py-5 rounded-[2rem] font-black text-lg hover:bg-white hover:text-teal-900 transition-colors flex items-center gap-3">
            <FileText className="w-6 h-6" /> Access Patient Portal
          </Link>
        </div>
      </section>

    </main>
  );
}