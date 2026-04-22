import Link from 'next/link';
import { ArrowLeft, ShieldCheck, Mail } from 'lucide-react';

export const metadata = {
  title: 'Privacy Policy',
  description: 'Learn how Jadon Hospital collects, uses, and protects your personal and medical information.',
};

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-slate-50 py-20 selection:bg-teal-200 selection:text-teal-900">
      <div className="max-w-4xl mx-auto px-6">
        
        {/* Header */}
        <div className="mb-12">
          <Link href="/" className="inline-flex items-center gap-2 text-sm font-bold text-slate-500 hover:text-teal-600 transition-colors mb-8">
            <ArrowLeft className="w-4 h-4" /> Back to Home
          </Link>
          <div className="flex items-center gap-4 mb-4">
            <div className="bg-teal-100 text-teal-600 p-3 rounded-2xl">
              <ShieldCheck className="w-8 h-8" />
            </div>
            <h1 className="text-4xl md:text-5xl font-black text-slate-950 tracking-tight">Privacy Policy</h1>
          </div>
          <p className="text-slate-500 font-medium">Last Updated: April 2026</p>
        </div>

        {/* Document Content */}
        <div className="bg-white rounded-[2.5rem] p-8 md:p-12 shadow-xl shadow-slate-200/50 border border-slate-100 prose prose-slate max-w-none prose-headings:font-black prose-headings:tracking-tight prose-a:text-teal-600 hover:prose-a:text-teal-700">
          
          <h2 className="text-2xl text-slate-950 mb-4">1. Introduction</h2>
          <p className="text-slate-600 leading-relaxed mb-8">
            At Jadon Hospital & Ultrasound Centre ("we," "our," or "us"), your privacy and the security of your personal and medical information are our highest priorities. This Privacy Policy outlines how we collect, use, disclose, and safeguard your information when you visit our facility, use our website, or interact with our services.
          </p>

          <h2 className="text-2xl text-slate-950 mb-4 mt-8">2. Information We Collect</h2>
          <p className="text-slate-600 leading-relaxed mb-4">We may collect the following types of information:</p>
          <ul className="list-disc pl-6 space-y-2 text-slate-600 mb-8 marker:text-teal-500">
            <li><strong>Personal Identification Information:</strong> Name, date of birth, gender, address, phone number, and email address.</li>
            <li><strong>Medical Information:</strong> Medical history, test results, ultrasound scans, diagnoses, treatment plans, and prescriptions.</li>
            <li><strong>Financial Information:</strong> Billing details, insurance provider information, and payment records.</li>
            <li><strong>Digital Information:</strong> IP addresses, browser types, and usage data when you access our patient portal or website.</li>
          </ul>

          <h2 className="text-2xl text-slate-950 mb-4 mt-8">3. How We Use Your Information</h2>
          <p className="text-slate-600 leading-relaxed mb-8">
            The information we collect is strictly used to provide high-quality healthcare services. This includes diagnosing medical conditions, scheduling appointments, processing billing and insurance claims, communicating test results, and improving our internal clinical operations.
          </p>

          <h2 className="text-2xl text-slate-950 mb-4 mt-8">4. Data Security</h2>
          <p className="text-slate-600 leading-relaxed mb-8">
            We implement robust physical, technical, and administrative security measures to protect your personal and health information against unauthorized access, alteration, disclosure, or destruction. All digital medical records are encrypted and stored in secure environments.
          </p>

          <h2 className="text-2xl text-slate-950 mb-4 mt-8">5. Sharing of Information</h2>
          <p className="text-slate-600 leading-relaxed mb-8">
            We do not sell or rent your personal information to third parties. We may share your information only when necessary: with your referred specialists, insurance providers for claim processing, or when mandated by law and local health authorities in India.
          </p>

          <hr className="my-12 border-slate-100" />

          {/* Contact Block */}
          <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
            <h3 className="text-lg font-black text-slate-950 mb-2">Questions about your privacy?</h3>
            <p className="text-slate-600 text-sm mb-4">If you have any questions or concerns regarding how your data is handled, please contact our administrative desk.</p>
            <a href="mailto:nvsict06@gmail.com" className="inline-flex items-center gap-2 text-teal-600 font-bold hover:text-slate-950 transition-colors">
              <Mail className="w-4 h-4" /> nvsict06@gmail.com
            </a>
          </div>

        </div>
      </div>
    </main>
  );
}