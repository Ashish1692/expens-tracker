import Link from 'next/link';

export default function Navbar() {
    return (
        <nav className='flex justify-between items-center et-bg rounded px-8 py-5 mb-8'>
            <Link href={'/'} className='font-bold'>Expense Tracker</Link>
            <Link href={'/transaction'} className='et-btn text-white rounded py-2 px-2'>Add Transaction</Link>
        </nav>
    )
}