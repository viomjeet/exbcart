import { connectDB } from '@/lib/db';
import Link from "next/link";
export default async function HomePage() {
    let products: any = [];
    let errorMsg = '';
    try {
        const pool = await connectDB();
        const result = await pool.query('SELECT * FROM ProductDetails');
        products = result.rows;
    } catch (err: any) {
        errorMsg = JSON.stringify(err) || err.toString();
    }
    return (
        <div className="min-h-screen bg-gray-50 py-10 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto mb-10 flex justify-between items-center border-b pb-5 border-gray-200">
                <div>
                    <h1 className="text-3xl font-extrabold text-gray-900 tracking-tight">
                        Product Details 🛒
                    </h1>
                    <p className="mt-2 text-sm text-gray-500">
                        Fresh Data
                    </p>
                </div>

                <div className="relative bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full cursor-pointer transition shadow-md">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 0a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                    <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center font-bold">
                        0
                    </span>
                </div>
            </div>

            {errorMsg && (
                <div className="max-w-md mx-auto bg-red-50 border-l-4 border-red-500 p-4 rounded shadow-sm">
                    <div className="flex">
                        <div className="flex-shrink-0">
                            <span className="text-red-500 font-bold">❌</span>
                        </div>
                        <div className="ml-3">
                            <p className="text-sm text-red-700 font-medium">
                                Database Error: {errorMsg}
                            </p>
                        </div>
                    </div>
                </div>
            )}

            {products.length === 0 && !errorMsg && (
                <div className="text-center py-20">
                    <p className="text-xl text-gray-500 font-semibold">No product found...</p>
                </div>
            )}
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                    {products.map((item: any) => (

                        <Link key={item.productid} href={`/pages/products/${item.productid}`}
                            className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl border border-gray-100 transition-all duration-300 flex flex-col group"
                        >
                            <div className="w-full h-56 bg-gray-200 overflow-hidden relative">

                                <img
                                    src={item.imageurl || "https://images.unsplash.com/photo-1531403009284-440f080d1e12?w=500&q=80"}
                                    alt={item.productname}
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                />

                                {item.stockquantity > 0 && (
                                    <span className="absolute top-3 left-3 bg-orange-500 text-white text-xs font-bold px-2.5 py-1 rounded-full shadow-sm">
                                        Only {item.stockquantity} Left!
                                    </span>
                                )}
                            </div>

                            <div className="p-5 flex flex-col flex-grow">
                                <h2 className="text-lg font-bold text-gray-800 line-clamp-1 group-hover:text-blue-600 transition-colors">
                                    {item.productname}
                                </h2>

                                <p className="text-gray-500 text-sm mt-2 line-clamp-2 flex-grow">
                                    {item.productdescription}
                                </p>

                                <div className="mt-5 pt-4 border-t border-gray-50 flex items-center justify-between">
                                    <div>
                                        <span className="text-xs text-gray-400 block font-medium">Price</span>
                                        <span className="text-xl font-black text-gray-950">
                                            ₹{Number(item.price).toLocaleString('en-IN')}
                                        </span>
                                    </div>
                                    <button className="bg-gray-900 hover:bg-blue-600 text-white font-semibold text-sm px-4 py-2.5 rounded-xl shadow-sm hover:shadow-md transition-all duration-200 active:scale-95">
                                        Add to Cart
                                    </button>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
}