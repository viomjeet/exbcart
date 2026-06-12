import { NextResponse } from "next/server";

let services = [
  { id: 1, name: "WEB Development" },
  { id: 2, name: "SPA Development" },
  { id: 3, name: "SEO Service" },
  { id: 4, name: "API Development" },
  { id: 5, name: "Android App Development" },
  { id: 6, name: "IOS App Development" },
];

export async function GET() {
  return NextResponse.json(services);
}

export async function POST(request: Request) {
  debugger;
  try {
    const body = await request.json();
    const { id, name } = body;
    const newService = { id, name };
    services.push(newService);
    return NextResponse.json({ message: "Service created successfully", data: newService, }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ message: "Something went wrong" }, { status: 500 });
  }
}

export async function DELETE(request: Request) {
  try {
    debugger
    const { searchParams } = new URL(request.url);
    const id = searchParams.get("id");
    if (!id) {
      return NextResponse.json({ message: "ID is required" }, { status: 400 });
    }
    const idToNumber = Number(id);
    services = services.filter((service) => service.id !== idToNumber);
    return NextResponse.json({ message: "Service deleted successfully" });
  } catch (error) {
    return NextResponse.json({ message: "Something went wrong" }, { status: 500 });
  }
}