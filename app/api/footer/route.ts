import { NextResponse } from "next/server";

const footerData = {
  brand: {
    name: "EXBCART",
    description: "Building next-generation digital experiences with clean architecture and pixel-perfect modern designs."
  },
  sections: [
    {
      title: "Services",
      links: [
        { name: "Web Development", path: "/services" },
        { name: "App Development", path: "/services" },
        { name: "UI/UX Design", path: "/services" },
        { name: "SEO Optimization", path: "/services" }
      ]
    },
    {
      title: "Company",
      links: [
        { name: "About Us", path: "/about" },
        { name: "Our Work", path: "/portfolio" },
        { name: "Careers", path: "/careers" },
        { name: "Contact", path: "/contact" }
      ]
    },
    {
      title: "Legal",
      links: [
        { name: "Privacy Policy", path: "/privacy" },
        { name: "Terms of Service", path: "/terms" },
        { name: "Cookie Policy", path: "/cookies" }
      ]
    }
  ],
  socials: [
    { platform: "Github", url: "https://github.com", icon: "Github" },
    { platform: "Linkedin", url: "https://linkedin.com", icon: "Linkedin" },
    { platform: "Twitter", url: "https://twitter.com", icon: "Twitter" }
  ],
  copyright: `© ${new Date().getFullYear()} EXBCART. All rights reserved.`
};

export async function GET() {
  return NextResponse.json(footerData);
}