import { NextResponse } from "next/server";

const contactDetails = {
  title: "Get in touch",
  subtitle: "Have a question or want to scale your eCommerce store? Drop us a message, and our technical team will reach out within 24 hours.",
  infoCards: [
    { type: "Email", value: "support@exbcart.com", subtext: "Online support 24/7", icon: "Mail" },
    { type: "Office", value: "RDBF GingerBite, Botata 3PKG", subtext: "Haccaaam, FGDF, Huppnhy", icon: "MapPin" },
    { type: "Business Hours", value: "Mon - Fri, 9AM - 6PM", subtext: "Weekend email support only", icon: "Clock" }
  ]
};

export async function GET() {
  return NextResponse.json(contactDetails);
}