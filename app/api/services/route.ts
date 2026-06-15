import { NextResponse } from "next/server";

const servicesData = {
  header: {
    badge: "Our Expertise",
    title: "Solutions tailored for your business growth.",
    subtitle: "We combine deep technical expertise with modern design principles to deliver digital products that scale seamlessly."
  },
  items: [
    {
      title: "eCommerce Engineering",
      desc: "Custom headless storefronts and scalable checkout architectures built using Next.js and robust GraphQL APIs.",
      icon: "ShoppingBag",
      tag: "Popular"
    },
    {
      title: "Cloud Infrastructure",
      desc: "Serverless deployments, global CDN caching, and automated CI/CD pipelines optimized for 99.9% uptime SLAs.",
      icon: "Cloud",
      tag: "Enterprise"
    },
    {
      title: "UI/UX Architecture",
      desc: "Component-driven design systems built with Tailwind CSS that offer seamless dark mode transitions and fluid micro-interactions.",
      icon: "Code",
      tag: "Design"
    },
    {
      title: "Database Optimization",
      desc: "High-performance indexing, query optimization, and real-time data sync using PostgreSQL, Redis, and Prisma.",
      icon: "Database",
      tag: "Performance"
    },
    {
      title: "API Integrations",
      desc: "Secure third-party payment gateways, CRM connections, and inventory management webhooks implementation.",
      icon: "Link",
      tag: "Security"
    },
    {
      title: "Performance Audits",
      desc: "Comprehensive Core Web Vitals debugging, bundle size reduction, and SEO optimization to hit a perfect 100 score.",
      icon: "Gauge",
      tag: "Optimization"
    }
  ]
};

export async function GET() {
  return NextResponse.json(servicesData);
}