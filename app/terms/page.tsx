import Link from 'next/link';
import { ArrowLeft, Scale, MapPin } from 'lucide-react';

export const metadata = {
  title: 'Terms of Service',
  description: 'Terms and conditions for using Jadon Hospital website and services.',
};

export default function TermsOfServicePage() {
  return (
    <main className="min-h-screen bg-slate-50 py-20 selection:bg-teal-200 selection:text-teal-900">
      <div className="max-w-4xl mx-auto px-6">
        
        {/* Header */}
        <div className="mb-12">
          <Link href="/" className="inline-flex items-center gap-2 text-sm font-bold text-slate-500 hover:text-teal-600 transition-colors mb-8">
            <ArrowLeft className="w-4 h-4" /> Back to Home
          </Link>
          <div className="flex items-center gap-4 mb-4">
            <div className="bg-slate-950 text-white p-3 rounded-2xl">
              <Scale className="w-8 h-8" />
            </div>
            <h1 className="text-4xl md:text-5xl font-black text-slate-950 tracking-tight">Terms of Service</h1>
          </div>
          <p className="text-slate-500 font-medium">Last Updated: April 2026</p>
        </div>

        {/* Document Content */}
        <div className="bg-white rounded-[2.5rem] p-8 md:p-12 shadow-xl shadow-slate-200/50 border border-slate-100 prose prose-slate max-w-none prose-headings:font-black prose-headings:tracking-tight">
          
          <h2 className="text-2xl text-slate-950 mb-4">1. Agreement to Terms</h2>
          <p className="text-slate-600 leading-relaxed mb-8">
            By accessing the Jadon Hospital & Ultrasound Centre website or utilizing our facility's services, you agree to be bound by these Terms of Service. If you disagree with any part of the terms, you may not access our digital services.
          </p>

          <h2 className="text-2xl text-slate-950 mb-4 mt-8 text-red-600">2. Medical Disclaimer (Important)</h2>
          <div className="bg-red-50 p-6 rounded-2xl border border-red-100 mb-8">
            <p className="text-red-800 leading-relaxed font-medium m-0">
              The content provided on this website—including text, graphics, images, and other material—is for informational purposes only. It is <strong>NOT</strong> intended to be a substitute for professional medical advice, diagnosis, or treatment. Always seek the advice of your physician or other qualified health provider with any questions you may have regarding a medical condition. <strong>In the event of a medical emergency, call our emergency line or local emergency services immediately.</strong>
            </p>
          </div>

          <h2 className="text-2xl text-slate-950 mb-4 mt-8">3. Appointments and Services</h2>
          <p className="text-slate-600 leading-relaxed mb-8">
            While we strive to accommodate all patients at their scheduled times, medical emergencies take precedence. Appointment times are estimates, and wait times may vary based on the critical needs of other patients in the Trauma & ER department.
          </p>

          <h2 className="text-2xl text-slate-950 mb-4 mt-8">4. Use of Website</h2>
          <p className="text-slate-600 leading-relaxed mb-4">You agree not to:</p>
          <ul className="list-disc pl-6 space-y-2 text-slate-600 mb-8 marker:text-teal-500">
            <li>Use the website in any way that violates any applicable local, national, or international law.</li>
            <li>Attempt to gain unauthorized access to our patient portal, servers, or databases.</li>
            <li>Transmit any malicious code, viruses, or harmful data.</li>
          </ul>

          <h2 className="text-2xl text-slate-950 mb-4 mt-8">5. Limitation of Liability</h2>
          <p className="text-slate-600 leading-relaxed mb-8">
            Jadon Hospital, its directors, employees, and partners shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your access to or use of, or inability to access or use, this website.
          </p>

          <h2 className="text-2xl text-slate-950 mb-4 mt-8">6. Governing Law</h2>
          <p className="text-slate-600 leading-relaxed mb-8">
            These Terms shall be governed and construed in accordance with the laws of India. Any disputes arising under or in connection with these terms shall be subject to the exclusive jurisdiction of the courts in Mathura, Uttar Pradesh.
          </p>

          <hr className="my-12 border-slate-100" />

          {/* Location Block */}
          <div className="flex items-start gap-4 bg-slate-950 p-6 rounded-2xl">
            <div className="bg-white/10 p-2 rounded-lg text-white mt-1">
              <MapPin className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-white font-bold mb-1">Jadon Hospital & Ultrasound Centre</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                NH-19, Nearby PM Shri Govt. Girls' Inter College,<br />
                Farah, Mathura, Uttar Pradesh 281122
              </p>
            </div>
          </div>

        </div>
      </div>
    </main>
  );
}