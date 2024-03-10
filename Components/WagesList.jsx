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
                <div key={t._id} className="m-4 max-w-screen-sm bg-gray-400 rounded-lg overflow-hidden sm:max-w-screen-md md:max-w-screen-lg lg:max-w-screen-xl xl:max-w-screen-2xl grid_lay">
                    <div className="p-1 m-1 flex flex-row">
                        <div className="bg-gray-200 rounded border border-gray-300 p-1 m-1 w-full flex flex-row">
                            <div className="bg-blue-300  p-1 m-1 w-full flex-auto min-w-fit max-w-fit min-h-fit text-blue-800 rounded">User</div>
                            <div className="bg-green-300 p-1 m-1 w-full flex-auto min-w-fit max-w-fit min-h-fit  text-green-800 rounded">{t.user}</div>
                        </div>
                        <div className="bg-gray-200 rounded border border-gray-300 p-1 m-1 w-full flex flex-row">
                            <div className="bg-blue-300  p-1 m-1 w-full flex-auto min-w-fit max-w-fit min-h-fit text-blue-800 rounded">Amount</div>
                            <div className="bg-green-300 p-1 m-1 w-full flex-auto min-w-fit max-w-fit min-h-fit  text-green-800 rounded">{t.amount}</div>
                        </div>
                    </div>
                    <div className="p-1 m-1 flex flex-row">
                        <div className="bg-gray-200 rounded border border-gray-300 p-1 m-1 w-full flex flex-row">
                            <div className="bg-blue-300  p-1 m-1 w-full flex-auto min-w-fit max-w-fit min-h-fit text-blue-800 rounded">Category</div>
                            <div className="bg-green-300 p-1 m-1 w-full flex-auto min-w-fit max-w-fit min-h-fit  text-green-800 rounded">{t.category}</div>
                        </div>
                        <div className="bg-gray-200 rounded border border-gray-300 p-1 m-1 w-full flex flex-row">
                            <div className="bg-blue-300  p-1 m-1 w-full flex-auto min-w-fit max-w-fit min-h-fit text-blue-800 rounded">Date</div>
                            <div className="bg-green-300 p-1 m-1 w-full flex-auto min-w-fit max-w-fit min-h-fit  text-green-800 rounded">{t.date}</div>
                        </div>
                    </div>
                    <div className="p-1 m-1 flex flex-row">
                        <div className="bg-gray-200 rounded border border-gray-300 p-1 m-1 w-full flex flex-row">
                            <div className="bg-blue-300  p-1 m-1 w-full flex-auto min-w-fit max-w-fit min-h-fit text-blue-800 rounded">Pay Method</div>
                            <div className="bg-green-300 p-1 m-1 w-full flex-auto min-w-fit max-w-fit min-h-fit  text-green-800 rounded">{t.pay_meth}</div>
                        </div>
                        <div className="bg-gray-200 rounded border border-gray-300 p-1 m-1 w-full flex flex-row">
                            <div className="bg-blue-300  p-1 m-1 w-full flex-auto min-w-fit max-w-fit min-h-fit text-blue-800 rounded">Pay Type</div>
                            <div className="bg-green-300 p-1 m-1 w-full flex-auto min-w-fit max-w-fit min-h-fit  text-green-800 rounded">{t.pay_type}</div>
                        </div>
                    </div>
                    <div className="p-1 m-1 flex flex-row">
                        <div className="bg-gray-200 rounded border border-gray-300 p-1 m-1 w-full flex flex-row">
                            <div className="bg-blue-300  p-1 m-1 w-full flex-auto min-w-fit max-w-fit min-h-fit text-blue-800 rounded">Description</div>
                            <div className="bg-green-300 p-1 m-1 w-full flex-auto min-w-fit max-w-fit min-h-fit  text-green-800 rounded">{t.description}</div>
                        </div>
                        <div className="bg-gray-200 rounded border border-gray-300 p-1 m-1 w-full flex-row flex justify-between items-center">
                            <div className="bg-blue-300  p-1 m-1 w-full flex-auto min-w-fit max-w-fit min-h-fit text-blue-800 rounded"><Link href={`/edit/${t._id}`} className="text-yellow-900">
                                <HiPencilAlt size={24} />                           </Link></div>

                            <div className="bg-green-300 p-1 m-1 w-full flex-auto min-w-fit max-w-fit min-h-fit text-green-800 rounded"><RemoveBtn id={t._id} /></div>

                        </div>
                    </div>
                </div>
            ))
            }

        </>
    )
}