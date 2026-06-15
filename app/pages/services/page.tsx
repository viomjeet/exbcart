'use client';

import { useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link";
import { ShoppingBag, Cloud, Code, Database, Gauge, HelpCircle, ArrowRight } from "lucide-react";
const iconMap: Record<string, any> = { ShoppingBag, Cloud, Code, Database, Gauge };
interface ServiceItem {
  title: string;
  desc: string;
  icon: string;
  tag: string;
}
interface ServicesData {
  header: { badge: string; title: string; subtitle: string };
  items: ServiceItem[];
}

export default function ServicesPage() {
  const [data, setData] = useState<ServicesData | null>(null);
  useEffect(() => {
    axios.get("/api/services")
      .then((res) => setData(res.data))
      .catch((err) => console.error("Services data fetch error:", err));
  }, []);

  if (!data) {
    return (
      <div className="w-full min-h-[calc(100vh-69px)] bg-background flex items-center justify-center">
        <div className="w-12 h-12 rounded-full border-4 border-foreground/10 border-t-teal-500 animate-spin" />
      </div>
    );
  }

  return (
    <div className="w-full min-h-[calc(100vh-69px)] bg-background text-foreground py-16 px-6 transition-colors duration-200">

      <div className="max-w-4xl mx-auto text-center flex flex-col items-center gap-4 mb-16 md:mb-24">
        <span className="px-3 py-1 rounded-full bg-foreground/5 border border-foreground/10 text-xs font-semibold tracking-wider uppercase text-teal-500">
          {data.header.badge}
        </span>
        <h1 className="text-3xl sm:text-5xl font-black tracking-tight leading-[1.15] max-w-2xl">
          {data.header.title}
        </h1>
        <p className="text-sm sm:text-base text-foreground/60 max-w-xl leading-relaxed">
          {data.header.subtitle}
        </p>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {data.items.map((service, idx) => {
          const IconComponent = iconMap[service.icon] || HelpCircle;
          return (
            <div
              key={idx}
              className="group p-6 rounded-2xl bg-card border border-foreground/5 shadow-sm hover:border-foreground/10 hover:shadow-md transition-all duration-300 flex flex-col justify-between relative overflow-hidden"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="p-3 rounded-xl bg-foreground/5 text-foreground group-hover:bg-teal-500 group-hover:text-white transition-colors duration-300">
                    <IconComponent className="h-5 w-5" />
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-widest px-2 py-0.5 rounded bg-teal-500/10 text-teal-500 dark:bg-teal-500/20">
                    {service.tag}
                  </span>
                </div>

                <h3 className="text-xl font-bold tracking-tight mb-2">
                  {service.title}
                </h3>
                <p className="text-sm text-foreground/60 leading-relaxed mb-6">
                  {service.desc}
                </p>
              </div>

              <Link href="/pages/contact" className="flex items-center gap-1.5 text-xs font-semibold text-teal-500 group-hover:gap-3 transition-all duration-300 cursor-pointer w-fit select-none">
                <span>Learn more</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}