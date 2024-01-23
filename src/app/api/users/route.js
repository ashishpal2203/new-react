import { connectionStr } from "@/db/connect";
import { User } from "@/model/User";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export async function GET(request) {

  await mongoose.connect(connectionStr)
  const data = await User.find();

  return NextResponse.json({ data: data })
}


export async function POST(req) {
  const payload=await req.json()
  await mongoose.connect(connectionStr)
  let user = new User(payload);

  const result =await user.save();
  return NextResponse.json({ result, status: "success" })
}

export async function DELETE(req){
  await mongoose.connect(connectionStr)
  return NextResponse.json({status: true})
}