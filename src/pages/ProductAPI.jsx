import { useEffect, useState } from "react";
import axios from "axios";

export const ProductAPI = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");
    const [retryCount, setRetryCount] = useState(0);

    useEffect(() => {
        const controller = new AbortController();

        const getProducts = async () => {
            try {
                const response = await axios.get(
                    "https://fakestoreapi.com/products",
                    { signal: controller.signal },
                );
                setProducts(response.data);
            } catch (error) {
                if (!axios.isCancel(error)) {
                    setError("We couldn't load products. Please try again.");
                }
            } finally {
                if (!controller.signal.aborted) {
                    setLoading(false);
                }
            }
        };

        getProducts();
        return () => controller.abort();
    }, [retryCount]);

    return (
        <main className="min-h-screen bg-stone-50 px-4 pb-16 pt-24 sm:px-6 lg:px-8">
            <section className="mx-auto max-w-7xl">
                <div className="mb-9">
                    <p className="mb-2 text-sm font-semibold uppercase tracking-[0.2em] text-emerald-700">
                        The collection
                    </p>
                    <h1 className="text-3xl font-bold tracking-tight text-stone-900 sm:text-4xl">
                        Shop our products
                    </h1>
                    <p className="mt-2 max-w-xl text-stone-600">
                        Discover everyday essentials picked just for you.
                    </p>
                </div>

                {loading && (
                    <p className="py-16 text-center text-stone-600" role="status">
                        Loading products...
                    </p>
                )}

                {error && (
                    <div className="rounded-xl border border-red-200 bg-red-50 px-5 py-4 text-center text-red-800">
                        <p role="alert">{error}</p>
                        <button
                            className="mt-3 font-semibold underline underline-offset-4 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-700"
                            onClick={() => {
                                setLoading(true);
                                setError("");
                                setRetryCount((count) => count + 1);
                            }}
                            type="button"
                        >
                            Try again
                        </button>
                    </div>
                )}

                {!loading && !error && (
                    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                        {products.map((product) => (
                            <ProductCard data={product} key={product.id} />
                        ))}
                    </div>
                )}
            </section>
        </main>
    );
};

function ProductCard({ data }) {
    const { title, price, image, category, rating } = data;

    return (
        <article className="group flex flex-col overflow-hidden rounded-2xl border border-stone-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg">
            <div className="relative flex aspect-[4/3] items-center justify-center overflow-hidden bg-white p-7">
                <img
                    alt={title}
                    className="h-full w-full object-contain transition duration-500 group-hover:scale-105"
                    loading="lazy"
                    src={image}
                />
                <span className="absolute left-4 top-4 rounded-full bg-stone-100 px-3 py-1 text-xs font-semibold capitalize text-stone-700">
                    {category}
                </span>
            </div>

            <div className="flex flex-1 flex-col p-5">
                <h2 className="line-clamp-2 min-h-12 text-base font-semibold leading-6 text-stone-900">
                    {title}
                </h2>

                <div className="mt-3 flex items-center justify-between gap-3">
                    <p className="text-lg font-bold text-stone-900">
                        ${price.toFixed(2)}
                    </p>
                    <p className="flex items-center gap-1 text-sm font-medium text-stone-600">
                        <span aria-hidden="true" className="text-amber-400">
                            ★
                        </span>
                        <span>{rating.rate}</span>
                        <span className="text-stone-400">({rating.count})</span>
                    </p>
                </div>

                <button
                    className=" cursor-pointer mt-5 w-full rounded-lg bg-stone-900 px-4 py-3 text-sm font-semibold text-white transition hover:bg-emerald-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-700"
                    type="button"
                >
                    Add to bag
                </button>
            </div>
        </article>
    );
}