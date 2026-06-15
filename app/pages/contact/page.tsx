'use client';

import { useEffect, useState } from "react";
import axios from "axios";
import { Mail, MapPin, Clock, Send, HelpCircle } from "lucide-react";

const iconMap: Record<string, any> = {
  Mail,
  MapPin,
  Clock
};

interface ContactInfo {
  title: string;
  subtitle: string;
  infoCards: Array<{ type: string; value: string; subtext: string; icon: string }>;
}

export default function ContactPage() {
  const [info, setInfo] = useState<ContactInfo | null>(null);
  
  // Form States
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{ success: boolean; msg: string } | null>(null);

  useEffect(() => {
    axios.get("/api/contact")
      .then((res) => setInfo(res.data))
      .catch((err) => console.error("Contact data fetch error:", err));
  }, []);

  // Form Submit Handler
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // Mock API call for form submission (Aap ise apne real backend endpoint se replace kar sakte hain)
      await new Promise((resolve) => setTimeout(resolve, 1500)); 
      
      setSubmitStatus({ success: true, msg: "Thank you! Your message has been sent successfully." });
      setFormData({ name: "", email: "", message: "" }); // Reset Form
    } catch (error) {
      setSubmitStatus({ success: false, msg: "Something went wrong. Please try again later." });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!info) {
    return (
      <div className="w-full min-h-[calc(100vh-69px)] bg-background flex items-center justify-center">
        <div className="w-12 h-12 rounded-full border-4 border-foreground/10 border-t-teal-500 animate-spin" />
      </div>
    );
  }

  return (
    <div className="w-full min-h-[calc(100vh-69px)] bg-background text-foreground py-12 md:py-20 px-6 transition-colors duration-200">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
        
        {/* LEFT COLUMN: DYNAMIC INFO CARDS */}
        <div className="flex flex-col gap-8">
          <div>
            <h1 className="text-4xl font-black tracking-tight leading-none mb-4">
              {info.title}
            </h1>
            <p className="text-sm sm:text-base text-foreground/60 leading-relaxed max-w-md">
              {info.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
            {info.infoCards.map((card, idx) => {
              const IconComponent = iconMap[card.icon] || HelpCircle;
              return (
                <div key={idx} className="flex items-start gap-4 p-5 rounded-2xl bg-card border border-foreground/5 shadow-sm">
                  <div className="p-2.5 rounded-xl bg-foreground/5 text-teal-500 shrink-0">
                    <IconComponent className="h-5 w-5" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-xs font-semibold uppercase tracking-wider text-foreground/40">
                      {card.type}
                    </span>
                    <span className="text-base font-bold tracking-tight mt-0.5">
                      {card.value}
                    </span>
                    <span className="text-xs text-foreground/50 mt-0.5">
                      {card.subtext}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* RIGHT COLUMN: INTERACTIVE FORM */}
        <div className="w-full p-6 sm:p-8 rounded-2xl bg-card border border-foreground/5 shadow-md relative overflow-hidden">
          <h2 className="text-xl font-bold tracking-tight mb-6">Send us a Message</h2>
          
          <form onSubmit={handleSubmit} className="flex flex-col gap-5">
            {/* Name Input */}
            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-semibold text-foreground/60">Full Name</label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="John Doe"
                className="w-full px-4 py-2.5 rounded-xl border border-foreground/10 bg-background text-sm text-foreground focus:outline-none focus:border-teal-500/50 focus:ring-2 focus:ring-teal-500/10 transition-all duration-200"
              />
            </div>

            {/* Email Input */}
            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-semibold text-foreground/60">Email Address</label>
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="john@example.com"
                className="w-full px-4 py-2.5 rounded-xl border border-foreground/10 bg-background text-sm text-foreground focus:outline-none focus:border-teal-500/50 focus:ring-2 focus:ring-teal-500/10 transition-all duration-200"
              />
            </div>

            {/* Message Input */}
            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-semibold text-foreground/60">Your Message</label>
              <textarea
                required
                rows={4}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder="How can we help your business scale?"
                className="w-full px-4 py-2.5 rounded-xl border border-foreground/10 bg-background text-sm text-foreground focus:outline-none focus:border-teal-500/50 focus:ring-2 focus:ring-teal-500/10 transition-all duration-200 resize-none"
              />
            </div>

            {/* Status Messages */}
            {submitStatus && (
              <div className={`p-3 rounded-xl text-xs font-medium border ${
                submitStatus.success 
                  ? 'bg-emerald-500/5 border-emerald-500/20 text-emerald-500' 
                  : 'bg-rose-500/5 border-rose-500/20 text-rose-500'
              }`}>
                {submitStatus.msg}
              </div>
            )}

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full mt-2 flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-teal-500 hover:bg-teal-600 active:scale-[0.98] text-white font-semibold text-sm transition-all duration-200 disabled:opacity-50 disabled:pointer-events-none"
            >
              {isSubmitting ? (
                <div className="w-5 h-5 rounded-full border-2 border-white/30 border-t-white animate-spin" />
              ) : (
                <>
                  <span>Send Message</span>
                  <Send className="h-4 w-4" />
                </>
              )}
            </button>
          </form>
        </div>

      </div>
    </div>
  );
}