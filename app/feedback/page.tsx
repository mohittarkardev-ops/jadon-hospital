"use client";

import { useState } from 'react';
import Link from 'next/link';
import { 
  Star, MessageSquare, Send, CheckCircle2, 
  ArrowLeft, MapPin, ShieldAlert
} from 'lucide-react';

export default function FeedbackPage() {
  const [rating, setRating] = useState<number | null>(null);
  const [hoveredRating, setHoveredRating] = useState<number | null>(null);
  const [step, setStep] = useState<1 | 2 | 3>(1); // 1: Rate, 2: Action, 3: Submitted (Internal)
  const [isSubmitting, setIsSubmitting] = useState(false);

  // INJECTED: Your official Google Maps Review Link
  const GOOGLE_REVIEW_LINK = "https://local.google.com/place?placeid=ChIJWb7Pd36DczkR-QNzQ1CuRXY&utm_medium=noren&utm_source=gbp&utm_campaign=2026";

  const handleRatingClick = (selectedRating: number) => {
    setRating(selectedRating);
    // Add a tiny delay so they see the star fill up before transitioning
    setTimeout(() => {
      setStep(2);
    }, 400);
  };

  const handleInternalSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call to send email to management
    setTimeout(() => {
      setIsSubmitting(false);
      setStep(3);
    }, 1500);
  };

  return (
    <main className="min-h-screen bg-slate-50 selection:bg-teal-200 selection:text-teal-900 pb-24">
      
      {/* 1. Minimal Header */}
      <section className="bg-slate-950 pt-16 pb-32 px-6 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-teal-600/10 blur-[100px] rounded-full pointer-events-none"></div>
        
        <div className="max-w-3xl mx-auto relative z-10 text-center">
          <div className="flex justify-center mb-8">
            <Link href="/" className="inline-flex items-center gap-2 text-sm font-bold text-slate-400 hover:text-white transition-colors">
              <ArrowLeft className="w-4 h-4" /> Back to Home
            </Link>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-black text-white tracking-tight mb-4">
            How was your visit?
          </h1>
          <p className="text-lg text-slate-400 font-medium max-w-xl mx-auto">
            Your honest feedback helps us maintain the highest standard of clinical care in Mathura.
          </p>
        </div>
      </section>

      {/* 2. The Smart Funnel Widget */}
      <section className="max-w-2xl mx-auto px-6 -mt-20 relative z-20">
        <div className="bg-white rounded-[2.5rem] p-8 md:p-12 shadow-2xl shadow-slate-200/50 border border-slate-100 min-h-[400px] flex flex-col justify-center transition-all duration-500">
          
          {/* STEP 1: STAR RATING */}
          {step === 1 && (
            <div className="text-center animate-in fade-in slide-in-from-bottom-4 duration-500">
              <div className="bg-slate-50 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 text-slate-400">
                <MessageSquare className="w-8 h-8" />
              </div>
              <h2 className="text-2xl font-black text-slate-950 mb-8">Please rate your experience</h2>
              
              <div className="flex justify-center gap-2 sm:gap-4">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button
                    key={star}
                    onClick={() => handleRatingClick(star)}
                    onMouseEnter={() => setHoveredRating(star)}
                    onMouseLeave={() => setHoveredRating(null)}
                    className="p-2 transition-transform hover:scale-110 active:scale-95 focus:outline-none"
                  >
                    <Star 
                      className={`w-12 h-12 md:w-16 md:h-16 transition-colors duration-200 ${
                        (hoveredRating !== null ? star <= hoveredRating : rating !== null && star <= rating)
                          ? 'fill-amber-400 text-amber-400' 
                          : 'fill-slate-100 text-slate-200'
                      }`} 
                    />
                  </button>
                ))}
              </div>
              <p className="text-slate-400 font-medium mt-8 text-sm uppercase tracking-widest">
                Tap a star to continue
              </p>
            </div>
          )}

          {/* STEP 2A: POSITIVE FEEDBACK (4-5 Stars) -> Route to Google */}
          {step === 2 && rating && rating >= 4 && (
            <div className="text-center animate-in zoom-in-95 duration-500">
              <div className="bg-teal-50 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 text-teal-600">
                <Star className="w-10 h-10 fill-teal-600" />
              </div>
              <h2 className="text-3xl font-black text-slate-950 mb-4 tracking-tight">We are thrilled!</h2>
              <p className="text-slate-500 font-medium mb-8 leading-relaxed max-w-md mx-auto">
                Thank you for the {rating}-star rating! It would mean the world to our doctors and staff if you could share your experience on Google. It only takes 30 seconds.
              </p>
              
              <a 
                href={GOOGLE_REVIEW_LINK} 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-blue-600 text-white px-10 py-5 rounded-2xl font-bold text-lg hover:bg-blue-700 transition-all shadow-lg shadow-blue-600/20"
              >
                <MapPin className="w-6 h-6" /> Post Review on Google
              </a>
              
              <button 
                onClick={() => setStep(1)} 
                className="block mx-auto mt-6 text-sm font-bold text-slate-400 hover:text-slate-950 transition-colors"
              >
                Go back
              </button>
            </div>
          )}

          {/* STEP 2B: NEGATIVE FEEDBACK (1-3 Stars) -> Route to Internal Form */}
          {step === 2 && rating && rating <= 3 && (
            <div className="animate-in fade-in slide-in-from-right-8 duration-500">
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-red-50 p-3 rounded-xl text-red-600">
                  <ShieldAlert className="w-6 h-6" />
                </div>
                <div>
                  <h2 className="text-2xl font-black text-slate-950 tracking-tight">We want to make this right.</h2>
                  <p className="text-slate-500 text-sm font-medium">Your feedback goes directly to hospital management.</p>
                </div>
              </div>

              <form onSubmit={handleInternalSubmit} className="space-y-4">
                <div>
                  <label className="text-xs font-black text-slate-400 uppercase tracking-widest mb-2 block">What could we have done better?</label>
                  <textarea 
                    required 
                    rows={4} 
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl p-4 text-slate-900 font-medium focus:outline-none focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20 transition-all resize-none"
                    placeholder="Please share details about your visit..."
                  ></textarea>
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-black text-slate-400 uppercase tracking-widest mb-2 block">Your Name (Optional)</label>
                    <input type="text" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-900 font-medium focus:outline-none focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20 transition-all" />
                  </div>
                  <div>
                    <label className="text-xs font-black text-slate-400 uppercase tracking-widest mb-2 block">Phone (Optional)</label>
                    <input type="tel" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-900 font-medium focus:outline-none focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20 transition-all" />
                  </div>
                </div>
                <div className="pt-4 flex items-center justify-between">
                  <button type="button" onClick={() => setStep(1)} className="text-sm font-bold text-slate-500 hover:text-slate-950 transition-colors">
                    Cancel
                  </button>
                  <button 
                    disabled={isSubmitting}
                    type="submit" 
                    className="bg-slate-950 text-white px-8 py-4 rounded-xl font-bold hover:bg-teal-600 transition-all shadow-lg disabled:opacity-70 flex items-center gap-2"
                  >
                    {isSubmitting ? 'Sending...' : <>Send to Management <Send className="w-4 h-4" /></>}
                  </button>
                </div>
              </form>
            </div>
          )}

          {/* STEP 3: SUBMITTED (Internal Only) */}
          {step === 3 && (
            <div className="text-center animate-in zoom-in duration-500 py-8">
              <div className="bg-slate-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 text-slate-950">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h2 className="text-3xl font-black text-slate-950 mb-4 tracking-tight">Message Received.</h2>
              <p className="text-slate-500 font-medium leading-relaxed max-w-sm mx-auto">
                Thank you for bringing this to our attention. Our management team will review your comments immediately to ensure this does not happen again.
              </p>
              <Link href="/" className="inline-block mt-8 text-teal-600 font-bold hover:text-slate-950 transition-colors">
                Return to Homepage
              </Link>
            </div>
          )}

        </div>
      </section>

    </main>
  );
}