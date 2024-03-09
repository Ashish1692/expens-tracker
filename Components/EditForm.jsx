"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function EditForm({ id, user, amount, category, pay_meth, pay_type, date, description
}) {

    const [newUser, setNewUser] = useState(user);
    const [newAmount, setNewAmount] = useState(amount);
    const [newCategory, setNewCategory] = useState(category);
    const [newPay_meth, setNewPay_meth] = useState(pay_meth);
    const [newPay_type, setNewPay_type] = useState(pay_type);
    const [newDate, setNewDate] = useState(date);
    const [newDescription, setNewDescription] = useState(description);

    const router = useRouter();

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const res = await fetch(`http://localhost:3000/api/transactions/${id}`, {
                method: "PUT",
                headers: {
                    "Content-type": "application/json",
                },
                body: JSON.stringify({ newUser, newAmount, newCategory, newPay_meth, newPay_type, newDate, newDescription }),

            });

            if (!res.ok) {
                throw new Error("Failed to update transaction");
            }

            router.push("/");
            router.refresh();

        } catch (error) {
            console.log(error);
        }
    };

    return <form onSubmit={handleSubmit} className="flex flex-col gap-1">

        <label htmlFor="username" className='et-color font-bold'>User</label>
        <input onChange={(e) => setNewUser(e.target.value)} value={newUser} className="rounded p-1" type="text" id="username" />

        <label htmlFor="amount" className='et-color font-bold'>Amount</label>
        <input onChange={(e) => setNewAmount(e.target.value)} value={newAmount}
            className="rounded p-1" type="number"  id="amount" />

        <label htmlFor="category" className='et-color font-bold'>Category</label>
        <input onChange={(e) => setNewCategory(e.target.value)}
            value={newCategory} className="rounded p-1" type="text" id="category" />

        <label htmlFor="pay_meth" className='et-color font-bold'>Payment Method</label>
        <select onChange={(e) => setNewPay_meth(e.target.value)}
            value={newPay_meth} name="pay_meth" id="pay_meth" className="rounded p-1">
            <option value={"cash"}>Cash</option>
            <option value={"online"}>Online</option>
        </select>

        <label htmlFor="pay_type" className='et-color font-bold'>Payment Type</label>
        <select onChange={(e) => setNewPay_type(e.target.value)}
            value={newPay_type} name="pay_type" id="pay_type" className="rounded p-1">
            <option value={"pay"}>Pay</option>
            <option value={'receive'}>Receive</option>
        </select>

        <label htmlFor="date" className='et-color font-bold'>Date</label>
        <input onChange={(e) => setNewDate(e.target.value)}
            value={newDate} className="rounded p-1" type="date" id="date" />

        <label htmlFor="desc" className='et-color font-bold'>Description</label>
        <textarea onChange={(e) => setNewDescription(e.target.value)}
            value={newDescription} name="desc" id="desc" cols="30" rows="4" className="rounded p-1"></textarea>


        <button className="et-btn text-white p-3 rounded-md my-2">Update</button>
    </form>

}