'use client';

import { useEffect, useState } from "react";
import axios from "axios";
import { Zap, Shield, Users, HelpCircle } from "lucide-react";
const iconMap: Record<string, any> = { Zap, Shield, Users };
interface AboutData {
  hero: { badge: string; title: string; description: string };
  stats: Array<{ value: string; label: string }>;
  values: Array<{ title: string; desc: string; icon: string }>;
}

export default function AboutPage() {
  const [data, setData] = useState<AboutData | null>(null);
  useEffect(() => {
    axios.get("/api/about")
      .then((response) => setData(response.data))
      .catch((err) => console.error("About page data fetch error:", err));
  }, []);

  if (!data) {
    return (
      <div className="w-full min-h-[calc(100vh-69px)] bg-background flex items-center justify-center">
        <div className="w-12 h-12 rounded-full border-4 border-foreground/10 border-t-teal-500 animate-spin" />
      </div>
    );
  }

  return (
    <div className="w-full min-h-[calc(100vh-69px)] bg-background text-foreground transition-colors duration-200">
      <section className="max-w-5xl mx-auto px-6 pt-16 md:pt-24 text-center flex flex-col items-center gap-6">
        <span className="px-3 py-1 rounded-full bg-foreground/5 border border-foreground/10 text-xs font-semibold tracking-wider uppercase text-teal-500">
          {data.hero.badge}
        </span>
        <h1 className="text-4xl sm:text-5xl font-black tracking-tight max-w-3xl leading-[1.15]">
          {data.hero.title}
        </h1>
        <p className="text-base sm:text-lg text-foreground/60 leading-relaxed max-w-2xl">
          {data.hero.description}
        </p>
      </section>

      <section className="max-w-6xl mx-auto px-6 my-16 md:my-24">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 p-8 rounded-2xl bg-card border border-foreground/5 shadow-sm">
          {data.stats.map((stat, idx) => (
            <div key={idx} className="flex flex-col items-center text-center p-4">
              <span className="text-3xl sm:text-4xl font-extrabold tracking-tight bg-gradient-to-r from-teal-500 to-emerald-500 bg-clip-text text-transparent">
                {stat.value}
              </span>
              <span className="text-xs sm:text-sm font-medium text-foreground/50 mt-1">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 pb-20">
        <div className="text-center mb-12">
          <h2 className="text-2xl font-bold tracking-tight">Our Core Values</h2>
          <p className="text-sm text-foreground/50 mt-1">The principles that drive our engineering decisions daily.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {data.values.map((value, idx) => {
            const IconComponent = iconMap[value.icon] || HelpCircle;
            return (
              <div
                key={idx}
                className="group p-6 rounded-2xl bg-card border border-foreground/5 shadow-sm hover:border-foreground/10 transition-all duration-300"
              >
                <div className="p-2.5 rounded-xl bg-foreground/5 text-foreground group-hover:bg-teal-500 group-hover:text-white transition-colors duration-300 inline-block mb-4">
                  <IconComponent className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-bold tracking-tight mb-2">
                  {value.title}
                </h3>
                <p className="text-sm text-foreground/60 leading-relaxed">
                  {value.desc}
                </p>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
