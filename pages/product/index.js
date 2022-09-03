import Link from "next/link";

const Product = () => {
    return (
        <div className="bg-slate-200 shadow-md w-1/4 mt-4 mx-auto p-4 text-gray-600 text-center">
            <ul className="no-underline">
                <li><Link href='/product/1'>Product Item 1</Link></li>
                <li><Link href='/product/2'>Product Item 2</Link></li>
                <li><Link href='/product/3'>Product Item 3</Link></li>
            </ul>
        </div>
    )
}
export default Product;