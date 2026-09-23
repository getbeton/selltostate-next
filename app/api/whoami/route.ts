import { SellToState } from "selltostate";
import { NextResponse } from "next/server";

export async function GET() {
  const sts = new SellToState({ apiKey: process.env.STS_API_KEY });
  const me = await sts.whoami();
  return NextResponse.json(me);
}
