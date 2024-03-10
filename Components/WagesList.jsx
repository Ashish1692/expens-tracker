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
        <>{recs.map((t) => (
            <div key={t._id} class="outer">
                <div class="item">
                    <div class="sub-item">User</div>
                    <div class="sub-item value">{t.user}</div>
                </div>
                <div class="item">
                    <div class="sub-item">Amount</div>
                    <div class="sub-item value">{t.amount}</div>
                </div>
                <div class="item">
                    <div class="sub-item">Category</div>
                    <div class="sub-item value">{t.category}</div>
                </div>
                <div class="item">
                    <div class="sub-item">Pay Method</div>
                    <div class="sub-item value">{t.pay_meth}</div>
                </div>
                <div class="item">
                    <div class="sub-item">Pay Type</div>
                    <div class="sub-item value">{t.pay_type}</div>
                </div>
                <div class="item">
                    <div class="sub-item">Date</div>
                    <div class="sub-item value">{t.date}</div>
                </div>
                <div class="item">
                    <div class="sub-item">Description</div>
                    <div class="sub-item value">{t.description}</div>
                </div>
                <div class="btn">
                    <div class="sub-item et-update"><Link href={`/edit/${t._id}`}>Update</Link></div>
                    <div class="sub-item et-remove"><RemoveBtn id={t._id} /></div>
                </div>
            </div>))}
        </>
    )
};