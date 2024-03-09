import { Schema } from "mongoose";
import mongoose from "mongoose";    

const transcationSchema = new Schema(
    {
        user: String,
        amount: Number,
        category: String,
        pay_meth: String,
        pay_type: String,
        description: String,
        date: String,
    },
    { 
        timestamps: true,
    }
)
const TranscationRec = mongoose.models.Transaction || mongoose.model("Transaction", transcationSchema);

export default TranscationRec;