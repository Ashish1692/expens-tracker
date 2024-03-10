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
                <div key={t._id} className="et-compoent-res">

                    <div className="flex flex-row">
                        <div className="w-full flex flex-row et-block">
                            <div className=" w-full flex-auto min-w-fit max-w-fit min-h-fit">User</div>
                            <div className=" w-full flex-auto min-w-fit max-w-fit min-h-fit">{t.user}</div>
                        </div>
                        <div className="w-full flex flex-row et-block">
                            <div className=" w-full flex-auto min-w-fit max-w-fit min-h-fit">Amount</div>
                            <div className=" w-full flex-auto min-w-fit max-w-fit min-h-fit">{t.amount}</div>
                        </div>
                    </div>

                    <div className="flex flex-row">
                        <div className="w-full flex flex-row et-block">
                            <div className=" w-full flex-auto min-w-fit max-w-fit min-h-fit">Category</div>
                            <div className=" w-full flex-auto min-w-fit max-w-fit min-h-fit">{t.category}</div>
                        </div>
                        <div className="w-full flex flex-row et-block">
                            <div className=" w-full flex-auto min-w-fit max-w-fit min-h-fit">Date</div>
                            <div className=" w-full flex-auto min-w-fit max-w-fit min-h-fit">{t.date}</div>
                        </div>
                    </div>

                    <div className="flex flex-row ">
                        <div className="w-full flex flex-row et-block">
                            <div className=" w-full flex-auto min-w-fit max-w-fit min-h-fit">Pay Method</div>
                            <div className=" w-full flex-auto min-w-fit max-w-fit min-h-fit">{t.pay_meth}</div>
                        </div>
                        <div className="w-full flex flex-row et-block">
                            <div className=" w-full flex-auto min-w-fit max-w-fit min-h-fit">Pay Type</div>
                            <div className=" w-full flex-auto min-w-fit max-w-fit min-h-fit">{t.pay_type}</div>
                        </div>
                    </div>

                    <div className="flex flex-row ">
                        <div className="w-full flex flex-row et-block">
                            <div className=" w-full flex-auto min-w-fit max-w-fit min-h-fit">Description</div>
                            <div className=" w-full flex-auto min-w-fit max-w-fit min-h-fit">{t.description}</div>
                        </div>
                        <div className="w-full flex flex-row p-1 m-1">
                            <div className=" w-full flex-auto min-w-fit max-w-fit min-h-fit mr-2 et-update"><Link href={`/edit/${t._id}`}>Update</Link></div>
                            <div className=" w-full flex-auto min-w-fit max-w-fit min-h-fit ml-2 et-remove"><RemoveBtn id={t._id} /></div>
                        </div>
                    </div>
                </div>
            ))}
        </>
    )
};