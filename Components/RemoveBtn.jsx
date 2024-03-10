"use client";

import { HiOutlineTrash } from 'react-icons/hi';
import { useRouter } from "next/navigation";

export default function RemoveBtn({ id }) {

    const router = useRouter();
    const removeTransaction = async () => {
        const confirmed = confirm("Are you sure?");

        if (confirmed) {
            const res = await fetch(`https://expens-tracker-eight.vercel.app/api/transactions?id=${id}`, {
                method: "DELETE",
            });

            if (res.ok) {
                router.refresh();
            }
        }
    };

    return (
        <button onClick={removeTransaction} className='text-red-700 className="p-1 m-1 w-full flex-auto min-w-fit max-w-fit min-h-fit border border-red-950 rounded" '>
            <HiOutlineTrash size={24} />
        </button>
    )
}