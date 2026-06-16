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
        { name: "Web Development", path: "/pages/services", disabled: false },
        { name: "App Development", path: "/pages/services", disabled: false },
        { name: "UI/UX Design", path: "/pages/services", disabled: false },
        { name: "SEO Optimization", path: "/pages/services", disabled: false }
      ]
    },
    {
      title: "Company",
      links: [
        { name: "About Us", path: "/pages/about", disabled: false },
        { name: "products", path: "/pages/products", disabled: false },
        { name: "Careers", path: "/pages/careers", disabled: true },
        { name: "Contact", path: "/pages/contact", disabled: false }
      ]
    },
    {
      title: "Legal",
      links: [
        { name: "Privacy Policy", path: "/pages/privacy", disabled: true },
        { name: "Terms of Service", path: "/pages/terms", disabled: true },
        { name: "Cookie Policy", path: "/pages/cookies", disabled: true }
      ]
    }
  ],
  socials: [
    { platform: "Github", url: "https://github.com/viomjeet", icon: "Github" },
    { platform: "Linkedin", url: "https://linkedin.com/in/viomjeet/", icon: "Linkedin" },
    { platform: "Twitter", url: "https://twitter.com/viomjeet", icon: "Twitter" }
  ],
  copyright: `© ${new Date().getFullYear()} EXBCART. All rights reserved.`
};

export async function GET() {
  return NextResponse.json(footerData);
}