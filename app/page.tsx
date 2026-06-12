"use client";

import axios from "axios";
import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';


import {
  ArrowRight, Play, LineChart, Shield, LayoutDashboard, CheckCircle2,
  Lightbulb,
  Palette,
  Code2,
  Server,
  ShieldCheck,
  Sparkles,
  Wrench,
  HelpCircle
} from "lucide-react";

const iconMap: Record<string, any> = {
  Lightbulb,
  Palette,
  Code2,
  Server,
  ShieldCheck,
  Sparkles,
  Wrench,
};


interface BannerData {
  tagline: string;
  headingTitle: string;
  headingGradient: string;
  description: string;
  primaryBtnText: string;
  secondaryBtnText: string;
  projects: Array<{ name: string; cost: string; type: string }>;
  uptime: string;
  statusText: string;
}

export default function Home() {
  const [banner, setBanner] = useState<BannerData | null>(null);
  const [serviceCategories, setServiceCategories] = useState<any[]>([]);
  const getServiceCategories = () => {
    axios.get("api/").then((response) => {
      setServiceCategories(response?.data?.services || []);
      setBanner(response?.data?.banner || []);
    })
      .catch((err) => {
        toast.error("Fetch karne mein error:", err);
      });
  };

  useEffect(() => {
    getServiceCategories();
  }, []);

  return (
    <>
      <div className="w-full bg-background text-foreground overflow-hidden relative border-b border-foreground/5">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
        <div className="max-w-7xl mx-auto px-6 py-16 md:py-28 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
          <div className="lg:col-span-6 flex flex-col gap-6 text-left">
            <div className="inline-flex items-center gap-2 self-start px-3 py-1 rounded-full bg-foreground/5 border border-foreground/10 text-xs font-semibold tracking-wide uppercase">
              <span className="flex h-2 w-2 rounded-full bg-teal-500 animate-pulse" />
              {banner?.tagline}
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-[1.15]">
              {banner?.headingTitle} <br />
              <span className="bg-gradient-to-r from-teal-500 to-emerald-500 bg-clip-text text-transparent">
                {banner?.headingGradient}
              </span>
            </h1>
            <p className="text-base sm:text-lg text-foreground/70 leading-relaxed max-w-xl">
              {banner?.description}
            </p>
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button className="flex items-center gap-2 px-6 py-3 rounded-xl bg-teal-600 text-white font-medium hover:bg-teal-500 shadow-lg shadow-teal-600/10 transition-all duration-200 group active:scale-95">
                <span>{banner?.primaryBtnText}</span>
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="flex items-center gap-2 px-6 py-3 rounded-xl bg-card border border-foreground/10 font-medium hover:bg-foreground/5 transition-all duration-200 active:scale-95">
                <Play className="h-4 w-4 fill-current text-foreground/70" />
                <span>{banner?.secondaryBtnText}</span>
              </button>
            </div>
          </div>
          <div className="lg:col-span-6 relative w-full flex justify-center lg:justify-end">
            <div className="w-full max-w-[500px] h-[350px] sm:h-[400px] rounded-3xl bg-gradient-to-tr from-foreground/5 to-foreground/10 border border-foreground/10 relative shadow-inner overflow-hidden flex items-center justify-center">
              <LayoutDashboard className="h-32 w-32 text-foreground/5 opacity-40 stroke-[1]" />
              <div className="absolute top-6 -left-4 sm:-left-8 bg-card border border-foreground/10 rounded-2xl p-4 shadow-xl w-full max-w-[240px]">
                <div className="flex items-center justify-between gap-4 mb-3 border-b border-foreground/5 pb-2">
                  <span className="text-xs font-bold tracking-tight text-foreground/50">My Projects</span>
                  <span className="text-[10px] bg-teal-500/10 text-teal-600 dark:text-teal-400 font-semibold px-2 py-0.5 rounded-full">Active</span>
                </div>
                <div className="space-y-2">
                  {banner?.projects.map((project, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <div className="h-6 w-6 rounded-md bg-teal-500/10 flex items-center justify-center text-[10px] font-bold">
                        {project.type}
                      </div>
                      <span className="text-xs font-semibold truncate flex-1">{project.name}</span>
                      <span className="text-xs font-medium text-foreground/60">{project.cost}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="absolute top-1/3 -right-4 bg-card border border-foreground/10 rounded-2xl p-4 shadow-xl w-[220px]">
                <div className="flex items-center gap-2 mb-2">
                  <LineChart className="h-4 w-4 text-teal-500" />
                  <span className="text-xs font-bold text-foreground/70">Performance Trend</span>
                </div>
                <div className="h-16 flex items-end gap-1.5 pt-4 px-1">
                  <div className="w-full bg-foreground/10 rounded-t h-[40%]" />
                  <div className="w-full bg-teal-500/40 rounded-t h-[65%]" />
                  <div className="w-full bg-foreground/10 rounded-t h-[50%]" />
                  <div className="w-full bg-teal-500 rounded-t h-[90%]" />
                </div>
              </div>
              <div className="absolute -bottom-4 left-6 bg-card border border-foreground/10 rounded-2xl p-4 shadow-xl flex items-center gap-4">
                <div className="relative flex items-center justify-center">
                  <div className="w-12 h-12 rounded-full border-[4px] border-foreground/5 flex items-center justify-center border-t-emerald-500 border-r-emerald-500">
                    <span className="text-[10px] font-extrabold">{banner?.uptime}</span>
                  </div>
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] font-bold text-foreground/40 uppercase tracking-wider">Uptime SLA</span>
                  <span className="text-sm font-bold flex items-center gap-1">
                    {banner?.statusText} <CheckCircle2 className="h-3.5 w-3.5 text-emerald-500" />
                  </span>
                </div>
              </div>
              <div className="absolute bottom-12 -right-6 sm:-right-10 bg-card border border-foreground/10 rounded-xl p-2.5 shadow-lg flex items-center gap-2">
                <div className="p-1.5 rounded-lg bg-emerald-500/10 text-emerald-500">
                  <Shield className="h-4 w-4" />
                </div>
                <span className="text-xs font-semibold pr-1">ISO Secure</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full max-w-7xl mx-auto px-6 py-12 md:py-20 bg-background text-foreground">





        {/* Top Header Section */}
        <div className="max-w-3xl mb-16">
          <h1 className="text-4xl font-extrabold tracking-tight mb-4 md:text-5xl">
            Our Capabilities
          </h1>
          <p className="text-lg text-foreground/60 leading-relaxed">
            A services list in development outlines the core and specialized technical offerings
            an agency or development team provides to its clients. It categorizes everything
            from initial strategy to deployment and long-term maintenance.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-start">
          {serviceCategories.map((category: any, idx: any) => {
            const IconComponent = iconMap[category.icon] || HelpCircle;
            return (
              <div
                key={idx}
                className="group h-full bg-card border border-foreground/5 rounded-2xl p-6 shadow-sm hover:shadow-md hover:border-foreground/10 transition-all duration-300 flex flex-col"
              >
                <div className="flex items-center gap-3 mb-5">
                  <div className="p-2.5 rounded-xl bg-foreground/5 text-foreground group-hover:bg-foreground group-hover:text-background transition-colors duration-300">
                    <IconComponent className="h-5 w-5" />
                  </div>
                  <h2 className="text-lg font-bold tracking-tight">
                    {category.title.split(". ")[1]}
                  </h2>
                </div>

                <div className="flex flex-col gap-4 flex-1">
                  {category.items.map((item: any, itemIdx: any) => (
                    <div key={itemIdx} className="flex flex-col gap-0.5">
                      <h3 className="text-sm font-semibold tracking-wide text-foreground">
                        {item.name}
                      </h3>
                      <p className="text-xs text-foreground/60 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </>
  );
}
