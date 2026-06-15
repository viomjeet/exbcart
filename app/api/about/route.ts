import { NextResponse } from "next/server";

const aboutData = {
  hero: {
    badge: "Who We Are",
    title: "Engineering the Future of eCommerce Experiences.",
    description: "At EXBCART, we help global brands scale their digital architecture. From robust backend infrastructure to flawless user interfaces, we bridge the gap between complex engineering and elegant design."
  },
  stats: [
    { value: "100+", label: "Projects Delivered" },
    { value: "99.9%", label: "Uptime SLA" },
    { value: "15+", label: "Core Experts" },
    { value: "50M+", label: "API Requests Daily" }
  ],
  values: [
    {
      title: "Performance First",
      desc: "Every millisecond counts. We optimize systems to ensure blazing fast loading speeds across all network types.",
      icon: "Zap"
    },
    {
      title: "Secure by Design",
      desc: "Security isn't an afterthought. We implement military-grade compliance and data safety protocols from day one.",
      icon: "Shield"
    },
    {
      title: "User Centric Architecture",
      desc: "We build systems that scale gracefully, keeping the end-user's experience smooth and interruption-free.",
      icon: "Users"
    }
  ]
};

export async function GET() {
  return NextResponse.json(aboutData);
}