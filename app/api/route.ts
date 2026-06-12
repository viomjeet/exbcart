import { NextResponse } from "next/server";

const bannerData = {
  tagline: "Next-Gen Software Development",
  headingTitle: "One Solution.",
  headingGradient: "Built for Growth.",
  description: "One platform for architecture, continuous deployment, automated workflows, and business intelligence across your entire development cycle. Eliminate manual tech debt so your engineering team can focus on shipping great features.",
  primaryBtnText: "See It in Action",
  secondaryBtnText: "Schedule a Walkthrough",
  projects: [
    { name: "Design System", cost: "$4,820", type: "UI" },
    { name: "Auth Gateway", cost: "$9,150", type: "API" }
  ],
  uptime: "94%",
  statusText: "Stable"
};

const serviceCategories = [
  {
    title: "1. Strategy & Consulting",
    icon: "Lightbulb",
    items: [
      { name: "Product Discovery", desc: "Validating concepts, defining Minimum Viable Products (MVPs), and market research." },
      { name: "Technology Consulting", desc: "Advising on the best tech stacks, cloud architecture, and security compliance." }
    ]
  },
  {
    title: "2. Design & User Experience (UX)",
    icon: "Palette",
    items: [
      { name: "UX Research & Strategy", desc: "Mapping user journeys and building wireframes." },
      { name: "UI/Visual Design", desc: "Creating interactive, high-fidelity prototypes and brand-aligned interfaces." }
    ]
  },
  {
    title: "3. Core Development",
    icon: "Code2",
    items: [
      { name: "Custom Software", desc: "Tailor-made applications built for specific automation or internal business processes." },
      { name: "Web Development", desc: "Front-end and back-end development for web apps, SaaS platforms, and enterprise portals." },
      { name: "Mobile App Development", desc: "Native (iOS/Android) and cross-platform (Flutter/React Native) mobile solutions." },
      { name: "E-Commerce", desc: "Platforms built for online retail, custom shopping carts, and payment gateway integration." }
    ]
  },
  {
    title: "4. Back-End & Infrastructure",
    icon: "Server",
    items: [
      { name: "Cloud Architecture", desc: "Setting up scalable, cloud-native environments (AWS, Azure, Google Cloud)." },
      { name: "API Development", desc: "Designing, implementing, and managing robust integrations." },
      { name: "DevOps", desc: "CI/CD pipeline setup and Infrastructure as Code (IaC) to streamline deployment." }
    ]
  },
  {
    title: "5. Quality Assurance (QA)",
    icon: "ShieldCheck",
    items: [
      { name: "Manual Testing", desc: "Exploratory and user-acceptance testing (UAT)." },
      { name: "Automated Testing", desc: "Scripted tests for performance, load, and regressions to ensure stability." }
    ]
  },
  {
    title: "6. Emerging Technologies",
    icon: "Sparkles",
    items: [
      { name: "AI & Machine Learning", desc: "Integrating predictive models, chatbots, and data-driven analytics." },
      { name: "Data Engineering", desc: "Database architecture, data warehousing, and business intelligence pipelines." },
      { name: "Cybersecurity", desc: "Identity and access management (IAM) and secure architectural reviews." }
    ]
  },
  {
    title: "7. Maintenance & Operations",
    icon: "Wrench",
    items: [
      { name: "Managed Services", desc: "Ongoing SLA-backed support, bug fixing, and continuous improvement." },
      { name: "Legacy Modernization", desc: "Refactoring older systems into secure, scalable, and modern digital platforms." }
    ]
  }
];

export async function GET() {
  return NextResponse.json({
    banner: bannerData,
    services: serviceCategories
  });
}