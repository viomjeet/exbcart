import { connectDB } from '@/lib/db';
import Link from 'next/link';

export default async function ProductDetailPage({ params }: { params: any }) {
    const { id } = await params;
    let product = null;
    let errorMsg = '';

    try {
        const pool = await connectDB();
        const result = await pool.query('SELECT * FROM ProductDetails WHERE ProductID = $1', [id]);
        product = result.rows[0];
    } catch (err: any) {
        errorMsg = err.message || 'An error occurred while fetching the product details.';
    }

    if (errorMsg) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gray-50 p-6">
                <div className="max-w-md w-full bg-red-50 border border-red-200 text-red-800 p-6 rounded-3xl text-center shadow-xl">
                    <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4 text-xl">⚠️</div>
                    <p className="font-bold text-lg tracking-wide">Database Connection Alert</p>
                    <p className="text-sm mt-2 text-red-600/90">{errorMsg}</p>
                </div>
            </div>
        );
    }

    if (!product) {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 p-6 relative overflow-hidden">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-100/40 rounded-full filter blur-3xl"></div>
                <div className="text-center z-10">
                    <h2 className="text-5xl font-black text-gray-900 tracking-tight">Product Not Found</h2>
                    <p className="text-gray-500 mt-3 max-w-sm mx-auto text-sm sm:text-base">The premium item you are trying to view might have been moved or run out of stock.</p>
                    <Link href="/pages/products" className="mt-8 inline-block bg-gray-950 hover:bg-gray-800 text-white font-bold px-8 py-3.5 rounded-2xl transition-all shadow-lg hover:scale-105 active:scale-95">
                        Return to Showroom
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-white text-gray-900 flex flex-col antialiased selection:bg-blue-600 selection:text-white">
            <header className="w-full border-b border-gray-100 bg-white/80 backdrop-blur-md sticky top-0 z-50 px-6 lg:px-12 py-5 flex items-center justify-between">
                <Link href="/pages/products" className="group text-sm font-semibold text-gray-500 hover:text-gray-900 flex items-center gap-2 transition-colors">
                    <span className="inline-block transition-transform group-hover:-translate-x-1">←</span> Back to Shop
                </Link>
                <div className="text-[11px] uppercase tracking-widest text-gray-400 font-bold">
                    Catalog Item / #{product.productid}
                </div>
            </header>

            <main className="flex-grow grid grid-cols-1 lg:grid-cols-12">
                <section className="lg:col-span-7 bg-gray-50/60 flex items-center justify-center p-6 lg:p-16 relative border-b lg:border-b-0 lg:border-r border-gray-100">
                    <div className="absolute inset-0 bg-gradient-to-tr from-gray-100/50 via-transparent to-transparent pointer-events-none"></div>
                    <div className="w-full max-w-xl aspect-square rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-500 bg-white border border-gray-100 p-2 group">
                        <img
                            src={product.imageurl}
                            alt={product.productname}
                            className="w-full h-full object-cover rounded-xl transition-transform duration-700 ease-out group-hover:scale-[1.01]"
                        />
                    </div>
                </section>

                <section className="lg:col-span-5 p-8 lg:p-16 flex flex-col justify-between bg-white relative">

                    <div className="space-y-8">
                        <div className="flex items-center gap-3">
                            <span className="text-[10px] bg-gray-50 border border-gray-200/60 text-gray-500 font-mono px-3 py-1 rounded-full uppercase tracking-widest shadow-inner">
                                SKU-{product.productid}
                            </span>
                            <span className={`text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest border ${product.stockquantity > 0
                                ? 'bg-green-50 border-green-200 text-green-700'
                                : 'bg-red-50 border-red-200 text-red-700'
                                }`}>
                                {product.stockquantity > 0 ? 'In Stock' : 'Out of Stock'}
                            </span>
                        </div>
                        <div>
                            <h1 className="text-4xl lg:text-5xl font-black text-gray-900 tracking-tight leading-tight">
                                {product.productname}
                            </h1>
                            <p className="text-gray-600 mt-6 leading-relaxed text-base font-normal">
                                {product.productdescription}
                            </p>
                        </div>
                        <div className="p-4 rounded-xl bg-gray-50 border border-gray-200/60 flex justify-between items-center">
                            <div>
                                <span className="text-[11px] uppercase tracking-wider text-gray-400 block font-bold">Delivery Status</span>
                                <span className="text-sm font-semibold text-gray-700 mt-0.5 block">
                                    {product.stockquantity > 0 ? `Ready to ship (${product.stockquantity} units available)` : 'Restocking soon'}
                                </span>
                            </div>
                            <div className={`w-2.5 h-2.5 rounded-full ${product.stockquantity > 0 ? 'bg-green-500' : 'bg-red-400'} animate-pulse`}></div>
                        </div>
                    </div>
                    <div className="mt-12 pt-8 border-t border-gray-100 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
                        <div>
                            <span className="text-[11px] text-gray-400 block font-bold uppercase tracking-widest">Price</span>
                            <span className="text-4xl font-black text-gray-900 tracking-tight mt-0.5 block">
                                ₹{Number(product.price).toLocaleString('en-IN')}
                            </span>
                        </div>

                        <button className="bg-gray-950 hover:bg-blue-600 text-white font-bold text-base px-10 py-4 rounded-2xl shadow-md hover:shadow-blue-100 transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-2">
                            <span>Add to Bag</span>
                            <span className="text-lg">🛒</span>
                        </button>
                    </div>

                </section>
            </main>
        </div>
    );
}