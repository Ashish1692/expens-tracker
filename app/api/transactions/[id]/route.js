import connectMongo from "@/libs/mongodb";
import TranscationRec from "@/models/transaction";
import { NextResponse } from "next/server";


export async function PUT(request, { params }) {
    const { id } = params;
    const { newUser: user, newAmount: amount, newCategory: category, newPay_meth: pay_meth, newPay_type: pay_type, newDate: date, newDescription: description } = await request.json();
    await connectMongo();
    await TranscationRec.findByIdAndUpdate(id, { user, amount, category, pay_meth, pay_type, date, description });
    return NextResponse.json({ message: "Topic updated" }, { status: 200 });
}

export async function GET(request, { params }) {
    const { id } = params;
    await connectMongo();
    const transcation = await TranscationRec.findOne({ _id: id });
    return NextResponse.json({ transcation, message: "Record found..(Update record)" }, { status: 200 });
}

