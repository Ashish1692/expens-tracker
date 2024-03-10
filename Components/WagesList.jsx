/* 
import Link from 'next/link';
import RemoveBtn from './RemoveBtn';
import { HiPencilAlt } from 'react-icons/hi';


const getTransactionRecs = async () => {
    try {
        const res = await fetch(`http://localhost:3000/api/transactions`, {
            cache: "no-store",
        });

        if (!res.ok) {
            throw new Error("Failed to fetch transactions");
        }

        return res.json();
    } catch (error) {
        console.log("Error loading transactions: ", error);
    }
};

export default async function WagesList() {
    const { recs } = await getTransactionRecs();

    return (
        <>
            {recs.map((t) => (
                <div key={t._id} className='p-4 border border-black rounded flex justify-between gap-5 items-start'>
                    <div id="data" className='font-bold'>
                        <div>{t.user}</div>
                        <div>{t.amount}</div>
                        <div>{t.category}</div>
                        <div>{t.pay_meth}</div>
                        <div>{t.pay_type}</div>
                        <div>{t.date}</div>
                        <div>{t.description}</div>
                        <div>{t.amount}</div>
                    </div>
                    <div id="operations" className='flex gap-3'>
                        <RemoveBtn id={t._id} />
                        <Link href={`/edit/${t._id}`} className='text-amber-950'>
                            <HiPencilAlt size={24} />
                        </Link>
                    </div>
                </div>
            ))}
        </>
    )
} */
import Link from 'next/link';
import RemoveBtn from './RemoveBtn';
import { HiPencilAlt } from 'react-icons/hi';

const getTransactionRecs = async () => {
    try {
        const res = await fetch(`http://expens-tracker-eight.vercel.app/api/transactions`, {
            cache: "no-store",
        });

        if (!res.ok) {
            throw new Error("Failed to fetch transactions");
        }

        return res.json();
    } catch (error) {
        console.log("Error loading transactions: ", error);
    }
};

export default async function WagesList() {
    const { recs } = await getTransactionRecs() || {};
    // const { recs } = await getTransactionRecs();

    return (
        <div className="relative overflow-x-auto shadow-md">
            <table className="w-full text-sm rtl:text-right border border-gray-500 rounded text-center">
                <thead className="text-xs uppercase border border-gray-500 rounded ">
                    <tr className='border border-gray-500 rounded'>
                        <th scope="col" className="px-2 py-3 border border-gray-500 rounded">
                            User
                        </th>
                        <th scope="col" className="px-2 py-3 border border-gray-500 rounded">
                            Amount
                        </th>
                        <th scope="col" className="px-2 py-3 border border-gray-500 rounded">
                            Category
                        </th>
                        <th scope="col" className="px-2 py-3 border border-gray-500 rounded">
                            Payment Method
                        </th>
                        <th scope="col" className="px-2 py-3 border border-gray-500 rounded">
                            Payment Type
                        </th>
                        <th scope="col" className="px-2 py-3 border border-gray-500 rounded">
                            Date
                        </th>
                        <th scope="col" className="px-2 py-3 border border-gray-500 rounded">
                            Description
                        </th>
                        <th scope="col" className="px-2 py-3 border border-gray-500 rounded">
                            Update
                        </th>
                        <th scope="col" className="px-2 py-3 border border-gray-500 rounded">
                            Remove
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {recs.map((t) => (
                        <tr key={t._id} className="px-3 py-2 border border-gray-500 rounded">
                            <td className="px-3 py-2 font-medium  whitespace-nowrap border border-gray-500 rounded">
                                {t.user}
                            </td>
                            <td className="border border-gray-500 rounded">
                                {t.amount}
                            </td>
                            <td className="border border-gray-500 rounded">
                                {t.category}
                            </td>
                            <td className="border border-gray-500 rounded">
                                {t.pay_meth}
                            </td>
                            <td className="border border-gray-500 rounded">
                                {t.pay_type}
                            </td>
                            <td className="border border-gray-500 rounded">
                                {t.date}
                            </td>
                            <td className="border border-gray-500 rounded">
                                {t.description}
                            </td>
                            <td className="pl-9 border border-gray-500 rounded">
                                <Link href={`/edit/${t._id}`} className='text-yellow-900'>
                                    <HiPencilAlt size={24} />
                                </Link>
                            </td>
                            <td className="border border-gray-500 rounded">
                                <RemoveBtn id={t._id} />
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
