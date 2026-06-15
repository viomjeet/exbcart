import { NextResponse } from "next/server";

const contactDetails = {
  title: "Get in touch",
  subtitle: "Have a question or want to scale your eCommerce store? Drop us a message, and our technical team will reach out within 24 hours.",
  infoCards: [
    { type: "Email", value: "support@exbcart.com", subtext: "Online support 24/7", icon: "Mail" },
    { type: "Office", value: "DLF CyberCity, Phase 3", subtext: "Gurugram, HR, India", icon: "MapPin" },
    { type: "Business Hours", value: "Mon - Fri, 9AM - 6PM", subtext: "Weekend email support only", icon: "Clock" }
  ]
};

export async function GET() {
  return NextResponse.json(contactDetails);
}