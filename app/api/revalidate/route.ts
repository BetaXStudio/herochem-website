import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest): Promise<NextResponse> {
  // Dummy revalidate implementation
  return new NextResponse("Revalidated (dummy)", { status: 200 });
}
