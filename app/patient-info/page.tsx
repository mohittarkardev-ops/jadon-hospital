import SchemaMarkup from '@/components/seo/SchemaMarkup';
import { MapPin, Phone, Mail, Clock, Send, Info, HelpCircle } from 'lucide-react';
import AddressPicker from '@/components/home/AddressPicker';

export default function PatientInfoPage() {
  // E-E-A-T: FAQ Schema for Rich Snippets
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What are your opening hours?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Jadon Hospital & Ultrasound Centre is open 24 hours a day, 7 days a week for emergencies and inpatient care."
        }
      },
      {
        "@type": "Question",
        "name": "Where are you located?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We are located at NH-19, nearby PM Shri Govt. Girls' Inter College, Farah, Mathura, Uttar Pradesh 281122."
        }
      }
    ]
  };

  return (
    <main className="min-h-screen bg-slate-50 font-sans pb-24 selection:bg-teal-200 selection:text-teal-900">
      <SchemaMarkup schema={faqSchema} />

      {/* Premium Hero Section */}
      <section className="bg-slate-900 pt-20 pb-40 px-6 relative overflow-hidden">
        {/* Background Glow */}
        <div className="absolute top-0 right-1/4 w-full max-w-3xl h-full bg-teal-900/30 blur-[120px] rounded-full pointer-events-none"></div>
        
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-teal-500/10 border border-teal-500/20 text-teal-400 text-sm font-bold tracking-wide mb-6">
            <Info className="w-4 h-4" /> Patient Resources
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold text-white tracking-tight mb-6">
            Contact & Information
          </h1>
          <p className="text-lg text-slate-400 max-w-2xl leading-relaxed">
            Everything you need to know before your visit. Find our facility, reach out for emergency assistance, or request a scheduled callback from our reception team.
          </p>
        </div>
      </section>

      {/* Main Content Grid Overlapping the Hero */}
      <section className="max-w-6xl mx-auto px-6 -mt-24 relative z-20">
        <div className="grid lg:grid-cols-12 gap-8">
          
          {/* Left Column: Contact Details & Form (Spans 5 cols) */}
          <div className="lg:col-span-5 space-y-8">
            
            {/* Contact Info Card */}
            <div className="bg-white p-8 rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-100 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-teal-50 rounded-bl-[100px] -z-10 transition-transform hover:scale-110"></div>
              
              <h2 className="text-2xl font-extrabold text-slate-900 mb-8 tracking-tight">Get in Touch</h2>
              
              <ul className="space-y-6">
                <li className="flex items-start gap-4">
                  <div className="bg-slate-50 w-12 h-12 rounded-xl flex items-center justify-center text-teal-600 shrink-0 border border-slate-100">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="font-bold text-slate-900 mb-1">Location</p>
                    <p className="text-slate-600 text-sm leading-relaxed">NH-19, nearby PM Shri Govt. Girls&apos; Inter College,<br />Farah, Mathura, UP 281122</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="bg-red-50 w-12 h-12 rounded-xl flex items-center justify-center text-red-600 shrink-0 border border-red-100">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="font-bold text-slate-900 mb-1">24/7 Emergency Line</p>
                    <p className="text-slate-600 text-sm">+91-8384844353</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="bg-slate-50 w-12 h-12 rounded-xl flex items-center justify-center text-teal-600 shrink-0 border border-slate-100">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="font-bold text-slate-900 mb-1">Email Support</p>
                    <p className="text-slate-600 text-sm">contact@jadonhospital.com</p>
                  </div>
                </li>
              </ul>
            </div>

            {/* Form Card */}
            <div className="bg-slate-900 p-8 rounded-3xl shadow-xl shadow-slate-900/10 border border-slate-800">
              <h3 className="text-xl font-bold text-white mb-2">Request a Callback</h3>
              <p className="text-slate-400 text-sm mb-6">Leave your details and our reception team will call you back shortly.</p>
              
              {/* Form UI - No Client Handlers */}
              <form className="space-y-4">
                <input 
                  type="text" 
                  placeholder="Your Full Name" 
                  className="w-full bg-slate-800/50 border border-slate-700 text-white placeholder:text-slate-500 p-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all" 
                />
                <input 
                  type="tel" 
                  placeholder="Phone Number" 
                  className="w-full bg-slate-800/50 border border-slate-700 text-white placeholder:text-slate-500 p-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all" 
                />
                <button className="group w-full bg-teal-600 text-white font-bold py-4 rounded-xl hover:bg-teal-500 transition-all flex items-center justify-center gap-2">
                  Submit Request
                  <Send className="w-4 h-4 group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />
                </button>
              </form>
            </div>

          </div>

          {/* Right Column: FAQs (Spans 7 cols) */}
          <div className="lg:col-span-7">
            <div className="bg-white p-8 md:p-10 rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-100 h-full">
              <div className="flex items-center gap-3 mb-8">
                <HelpCircle className="w-8 h-8 text-teal-600" />
                <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">Frequently Asked Questions</h2>
              </div>
              
              <div className="space-y-6">
                
                {/* FAQ Item 1 */}
                <div className="p-6 rounded-2xl bg-slate-50 border border-slate-100 hover:border-teal-100 hover:bg-teal-50/30 transition-colors group">
                  <div className="flex items-start gap-4">
                    <div className="bg-white w-8 h-8 rounded-full flex items-center justify-center text-teal-600 font-bold shadow-sm shrink-0 mt-0.5">1</div>
                    <div>
                      <h3 className="font-bold text-slate-900 mb-2 text-lg group-hover:text-teal-900 transition-colors">What are your opening hours?</h3>
                      <p className="text-slate-600 leading-relaxed">
                        We operate a 24/7 facility. The Ultrasound centre, emergency room, and essential diagnostic services are open <strong className="text-slate-800">24 hours a day, 7 days a week</strong> for all inpatient and emergency care.
                      </p>
                    </div>
                  </div>
                </div>

                {/* FAQ Item 2 */}
                <div className="p-6 rounded-2xl bg-slate-50 border border-slate-100 hover:border-teal-100 hover:bg-teal-50/30 transition-colors group">
                  <div className="flex items-start gap-4">
                    <div className="bg-white w-8 h-8 rounded-full flex items-center justify-center text-teal-600 font-bold shadow-sm shrink-0 mt-0.5">2</div>
                    <div>
                      <h3 className="font-bold text-slate-900 mb-2 text-lg group-hover:text-teal-900 transition-colors">Do I need an appointment for an ultrasound?</h3>
                      <p className="text-slate-600 leading-relaxed">
                        While walk-ins are immediately accommodated for emergencies and urgent Ultrasound cases, we highly recommend calling ahead or booking online to minimize your wait time for routine and pregnancy-related scans.
                      </p>
                    </div>
                  </div>
                </div>

                {/* FAQ Item 3 */}
                <div className="p-6 rounded-2xl bg-slate-50 border border-slate-100 hover:border-teal-100 hover:bg-teal-50/30 transition-colors group">
                  <div className="flex items-start gap-4">
                    <div className="bg-white w-8 h-8 rounded-full flex items-center justify-center text-teal-600 font-bold shadow-sm shrink-0 mt-0.5">3</div>
                    <div>
                      <h3 className="font-bold text-slate-900 mb-2 text-lg group-hover:text-teal-900 transition-colors">What facilities are available in the Pathology Lab?</h3>
                      <p className="text-slate-600 leading-relaxed">
                        Our in-house pathology laboratory is equipped for comprehensive blood testing, biochemistry, hematology, and rapid-result diagnostics to ensure our doctors can make swift, accurate medical decisions.
                      </p>
                    </div>
                  </div>
                </div>

              </div>
              
              <div className="mt-10 pt-8 border-t border-slate-100 flex items-center gap-4 text-sm text-slate-500">
                <Clock className="w-5 h-5 text-teal-600" />
                <p>Have a question not listed here? Our reception desk is available around the clock to assist you.</p>
              </div>

            </div>
          </div>

        </div>
      </section>
      <AddressPicker />
    </main>
  );
}