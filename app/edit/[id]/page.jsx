import EditForm from "@/Components/EditForm";

const getTrasactionbyid = async (id) => {
    try {
        const res = await fetch(`/api/transactions/${id}`, {
            cache: "no-store",
        });

        if (!res.ok) {
            throw new Error("Failed to fetch topic");
        }

        return res.json();
    } catch (error) {
        console.log(error);
    }
};

export default async function Edit({ params }) {
    const { id } = params;
    const { transcation } = await getTrasactionbyid(id);
    const { user, amount, category, pay_meth, pay_type, date, description } = transcation;

    return <EditForm id={id} user={user} amount={amount} category={category} pay_meth={pay_meth} pay_type={pay_type} date={date} description={description} />
}