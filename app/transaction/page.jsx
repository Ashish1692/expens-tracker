"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function transaction() {
    const [user, setUser] = useState("");
    const [amount, setAmount] = useState("");
    const [category, setCategory] = useState("");
    const [pay_meth, setPay_meth] = useState("");
    const [pay_type, setPay_type] = useState("");
    const [date, setDate] = useState("");
    const [description, setDescription] = useState("");

    const router = useRouter();

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!user || !amount || !category || !pay_meth == "none" || !pay_type == 'none' || !date || !description) {
            alert("All fields are required.");
            return;
        }

        try {
            const res = await fetch(`/api/transactions`, {
                method: "POST",
                headers: {
                    "Content-type": "application/json",
                },
                body: JSON.stringify({ user, description, amount, category, pay_meth, pay_type, date }),
            });

            if (res.ok) {
                router.refresh();
                router.push("/");
                router.refresh();
                
            } else {
                throw new Error("Failed to create a transaction");
            }
        } catch (error) {
            console.log(error);
        }
    };

    return <form onSubmit={handleSubmit} className="flex flex-col gap-3">
        <label htmlFor="username" className='et-color font-bold'>User</label>
        <input onChange={(e) => setUser(e.target.value)}
            value={user}
            className="rounded p-1"
            type="text"
            name="username"
            id="username" />

        <label htmlFor="amount" className='et-color font-bold'>Amount</label>
        <input onChange={(e) => setAmount(e.target.value)}
            value={amount} className="rounded p-1" type="number" name="amoutn" id="amount" />

        <label htmlFor="category" className='et-color font-bold'>Category</label>
        <input onChange={(e) => setCategory(e.target.value)}
            value={category} className="rounded p-1" type="text" name="category" id="category" />

        <label htmlFor="pay_meth" className='et-color font-bold'>Payment Method</label>
        <select onChange={(e) => setPay_meth(e.target.value)}
            value={pay_meth} name="pay_meth" id="pay_meth" className="rounded p-1" >
            <option value={"none"}>None</option>
            <option value={"cash"}>Cash</option>
            <option value={"online"}>Online</option>
        </select>

        <label htmlFor="pay_type" className='et-color font-bold'>Payment Type</label>
        <select onChange={(e) => setPay_type(e.target.value)}
            value={pay_type} name="pay_type" id="pay_type" className="rounded p-1">
            <option value={"none"}>None</option>
            <option value={"pay"}>Pay</option>
            <option value={'receive'}>Receive</option>
        </select>

        <label htmlFor="date" className='et-color font-bold'>Date</label>
        <input onChange={(e) => setDate(e.target.value)}
            value={date} className="rounded p-1" type="date" name="date" id="date" />

        <label htmlFor="desc" className='et-color font-bold'>Description</label>
        <textarea onChange={(e) => setDescription(e.target.value)}
            value={description} name="desc" id="desc" cols="30" rows="4" className="rounded p-1"></textarea>

        <button className="et-btn text-white p-3 rounded-md my-2">Submit</button>   
    </form>
}