import Link from 'next/link';
import RemoveBtn from './RemoveBtn';
import { HiPencilAlt } from 'react-icons/hi';

const getTransactionRecs = async () => {
    try {
        const res = await fetch(`https://expens-tracker-eight.vercel.app/api/transactions`, {
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
    return (
        <>
            {recs.map((t) => (
                <div key={t._id} className="my-12 p-1 et-component-bg border border-orange-400">
                    <div className="p-1 m-1 flex flex-row">
                        <div className=" rounded border border-gray-500 p-1 m-1 w-full flex flex-row">
                            <div className=" p-1 m-1 w-full flex-auto min-w-fit max-w-fit min-h-fit rounded">User</div>
                            <div className=" p-1 m-1 w-full flex-auto min-w-fit max-w-fit min-h-fit   rounded">{t.user}</div>
                        </div>
                        <div className=" rounded border border-gray-500 p-1 m-1 w-full flex flex-row">
                            <div className=" p-1 m-1 w-full flex-auto min-w-fit max-w-fit min-h-fit rounded">Amount</div>
                            <div className=" p-1 m-1 w-full flex-auto min-w-fit max-w-fit min-h-fit   rounded">{t.amount}</div>
                        </div>
                    </div>

                    <div className="p-1 m-1 flex flex-row">
                        <div className=" rounded border border-gray-500 p-1 m-1 w-full flex flex-row">
                            <div className=" p-1 m-1 w-full flex-auto min-w-fit max-w-fit min-h-fit rounded">Category</div>
                            <div className=" p-1 m-1 w-full flex-auto min-w-fit max-w-fit min-h-fit   rounded">{t.category}</div>
                        </div>
                        <div className=" rounded border border-gray-500 p-1 m-1 w-full flex flex-row">
                            <div className=" p-1 m-1 w-full flex-auto min-w-fit max-w-fit min-h-fit rounded">Date</div>
                            <div className=" p-1 m-1 w-full flex-auto min-w-fit max-w-fit min-h-fit   rounded">{t.date}</div>
                        </div>
                    </div>

                    <div className="p-1 m-1 flex flex-row ">
                        <div className=" rounded border border-gray-500 p-1 m-1 w-full flex flex-row">
                            <div className=" p-1 m-1 w-full flex-auto min-w-fit max-w-fit min-h-fit rounded">Pay Method</div>
                            <div className=" p-1 m-1 w-full flex-auto min-w-fit max-w-fit min-h-fit   rounded">{t.pay_meth}</div>
                        </div>
                        <div className=" rounded border border-gray-500 p-1 m-1 w-full flex flex-row">
                            <div className=" p-1 m-1 w-full flex-auto min-w-fit max-w-fit min-h-fit rounded">Pay Type</div>
                            <div className=" p-1 m-1 w-full flex-auto min-w-fit max-w-fit min-h-fit   rounded">{t.pay_type}</div>
                        </div>
                    </div>

                    <div className="p-1 m-1 flex flex-row ">
                        <div className=" rounded border border-gray-500 p-1 m-1 w-full flex flex-row">
                            <div className=" p-1 m-1 w-full flex-auto min-w-fit max-w-fit min-h-fit rounded">Description</div>
                            <div className=" p-1 m-1 w-full flex-auto min-w-fit max-w-fit min-h-fit rounded">{t.description}</div>
                        </div>
                        <div className=" rounded border border-gray-500 p-1 m-1 w-full flex flex-row">
                            <Link href={`/edit/${t._id}`} className="text-center text-yellow-900 p-1 m-1 w-full flex-auto min-w-fit max-w-fit min-h-fit border border-yellow-900   rounded"><HiPencilAlt size={24} /></Link>
                            <RemoveBtn id={t._id} className="text-center p-1 m-1 w-full flex-auto min-w-fit max-w-fit min-h-fit border border-red-950 rounded" />
                        </div>
                    </div>
                </div>
            ))}
        </>
    )
};