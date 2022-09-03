import Link from "next/link";
import { useRouter } from "next/router";

const ReviewItem = () => {
    const { query } = useRouter()
    return (
        <div className="bg-slate-100 shadow-md w-1/4 mx-auto p-4 ">
            <div className="flex justify-end">
                <div className="bg-slate-300 rounded-lg p-1 w-14 text-center">
                    <Link href='/product'>Back</Link>
                </div>
            </div>
            <h2 className="font-bold text-gray-600 text-2xl text-center mb-3">Details for product {query.productID} and review {query.reviewID}</h2>
            <p className=" bg-slate-200 p-4 text-gray-600 text-center rounded-md">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis, dolor. </p>
        </div>
    )
}
export default ReviewItem;