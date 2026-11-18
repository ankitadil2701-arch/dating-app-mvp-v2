import { NextResponse } from "next/server";
export async function GET(){return NextResponse.json({status:"ok",app:"NearMe dating app",version:"2.0"});}
