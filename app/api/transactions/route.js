import connectMongo from "@/libs/mongodb";
import TranscationRec from "@/models/transaction";
import { NextResponse } from "next/server";

export async function POST(request) {
    const { user, amount, category, pay_meth, pay_type, date, description } = await request.json();
    await connectMongo();
    await TranscationRec.create({ user, amount, category, pay_meth, pay_type, date, description });
    return NextResponse.json({ message: "Transaction Created" }, { status: 201 });
}

export async function GET() {
    await connectMongo();
    const recs = await TranscationRec.find();
    return NextResponse.json({ recs });
}

export async function DELETE(request) {
    const id = request.nextUrl.searchParams.get("id");
    await connectMongo();
    await TranscationRec.findByIdAndDelete(id);
    return NextResponse.json({ message: "Transaction deleted" }, { status: 200 });
}