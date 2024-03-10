
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
        
            recs.map((t) => (
                <div key={t._id} className="grid_lay m-4 max-w-screen-sm bg-gray-400 rounded-lg overflow-hidden sm:max-w-screen-md md:max-w-screen-lg lg:max-w-screen-xl xl:max-w-screen-2xl">
                    <div className="item">
                        <div className="sub_item bg-gray-200 rounded border border-gray-300">
                            <div className="sub_sub_item bg-blue-300 text-blue-800 rounded">User</div>
                            <div className="sub_sub_item bg-green-300 text-green-800 rounded">{t.user}</div>
                        </div>
                        <div className="sub_item bg-gray-200 rounded border border-gray-300">
                            <div className="sub_sub_item bg-blue-300 text-blue-800 rounded">Amount</div>
                            <div className="sub_sub_item bg-green-300 text-green-800 rounded">{t.amount}</div>
                        </div>
                    </div>
                    <div className="item">
                        <div className="sub_item bg-gray-200 rounded border border-gray-300">
                            <div className="sub_sub_item bg-blue-300 text-blue-800 rounded">Category</div>
                            <div className="sub_sub_item bg-green-300 text-green-800 rounded">{t.category}</div>
                        </div>
                        <div className="sub_item bg-gray-200 rounded border border-gray-300">
                            <div className="sub_sub_item bg-blue-300 text-blue-800 rounded">Date</div>
                            <div className="sub_sub_item bg-green-300 text-green-800 rounded">{t.date}</div>
                        </div>
                    </div>
                    <div className="item">
                        <div className="sub_item bg-gray-200 rounded border border-gray-300">
                            <div className="sub_sub_item bg-blue-300 text-blue-800 rounded">Pay Method</div>
                            <div className="sub_sub_item bg-green-300 text-green-800 rounded">{t.pay_meth}</div>
                        </div>
                        <div className="sub_item bg-gray-200 rounded border border-gray-300">
                            <div className="sub_sub_item bg-blue-300 text-blue-800 rounded">Pay Type</div>
                            <div className="sub_sub_item bg-green-300 text-green-800 rounded">{t.pay_type}</div>
                        </div>
                    </div>
                    <div className="item">
                        <div className="sub_item bg-gray-200 rounded border border-gray-300">
                            <div className="sub_sub_item bg-blue-300 text-blue-800 rounded">Description</div>
                            <div className="sub_sub_item bg-green-300 text-green-800 rounded">{t.description}</div>
                        </div>
                        <div className="sub_item bg-gray-200 rounded border border-gray-300 flex justify-between items-center">
                            <div className="sub_sub_item bg-blue-300 text-blue-800 rounded"><Link href={`/edit/${t._id}`} className="text-yellow-900">
                                <HiPencilAlt size={24} />                           </Link></div>
                            
                            <div className="sub_sub_item bg-green-300 text-green-800 rounded"><RemoveBtn id={t._id} /></div>
                            
                        </div>
                    </div>
                </div>
            ))
        

    );
}
