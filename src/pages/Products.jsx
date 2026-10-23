import { useEffect, useRef, useState } from "react";
import { FaStar } from "react-icons/fa";
import products from "../Data/ProductData";

export default function Products() {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const dialogRef = useRef(null);

  useEffect(() => {
    if (selectedProduct && dialogRef.current && !dialogRef.current.open) {
      dialogRef.current.showModal();
    }
  }, [selectedProduct]);

  return (
    <>

      <main className="min-h-screen bg-stone-50 px-4 pb-16 pt-24 sm:px-6 lg:px-8">
        <section className="mx-auto max-w-7xl">
          <div className="mb-9 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="mb-2 text-sm font-semibold uppercase tracking-[0.2em] text-emerald-700">
                Thoughtful finds
              </p>
              <h1 className="text-3xl font-bold tracking-tight text-stone-900 sm:text-4xl">
                Everyday favorites
              </h1>
              <p className="mt-2 max-w-xl text-stone-600">
                Well-made essentials to make your everyday a little better.
              </p>
            </div>
            <a
              className="text-sm font-semibold text-stone-800 underline decoration-stone-300 underline-offset-4 transition hover:text-emerald-700"
              href="#products"
            >
              Explore the collection
            </a>
          </div>

          <div
            className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
            id="products"
          >
            {products.map((product) => (
              <article
                className="group overflow-hidden rounded-2xl border border-stone-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg"
                key={product.name}
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-stone-100">
                  <img
                    alt={product.imageAlt}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                    loading="lazy"
                    src={product.image}
                  />
                  {product.badge && (
                    <span className="absolute left-4 top-4 rounded-full bg-white px-3 py-1 text-xs font-semibold text-stone-800 shadow-sm">
                      {product.badge}
                    </span>
                  )}
                </div>

                <div className="p-5">
                  <p className="text-sm font-medium text-stone-500">
                    {product.category}
                  </p>
                  <div className="mt-1 flex items-start justify-between gap-3">
                    <h2 className="text-lg font-semibold text-stone-900">
                      {product.name}
                    </h2>
                    <span className="shrink-0 font-semibold text-stone-900">
                      {product.price}
                    </span>
                  </div>

                  <div className="mt-3 flex items-center gap-2 text-sm">
                    <span className="flex items-center gap-1 font-medium text-stone-800">
                      <FaStar aria-hidden="true" className="text-amber-400" />
                      {product.rating}
                    </span>
                    <span className="text-stone-400">·</span>
                    <span className="text-stone-500">Customer favorite</span>
                  </div>

                  <div className="mt-5 grid grid-cols-2 gap-3">
                    <button
                      className="rounded-lg border border-stone-300 px-4 py-3 text-sm font-semibold text-stone-800 transition hover:border-emerald-800 hover:text-emerald-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-700"
                      onClick={() => setSelectedProduct(product)}
                      type="button"
                    >
                      View
                    </button>
                    <button
                      className="rounded-lg bg-stone-900 px-4 py-3 text-sm font-semibold text-white transition hover:bg-emerald-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-700"
                      type="button"
                    >
                      Add to bag
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>

      {selectedProduct && (
        <dialog
          aria-labelledby="product-dialog-title"
          className="m-auto w-[calc(100%-2rem)] max-w-lg rounded-2xl border border-stone-200 bg-white p-0 text-stone-900 shadow-xl backdrop:bg-stone-950/50"
          onClose={() => setSelectedProduct(null)}
          ref={dialogRef}
        >
          <div className="relative">
            <img
              alt={selectedProduct.imageAlt}
              className="aspect-[4/3] w-full object-cover"
              src={selectedProduct.image}
            />
            <button
              aria-label="Close product details"
              className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-white text-xl text-stone-700 shadow transition hover:bg-stone-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-700"
              onClick={() => dialogRef.current?.close()}
              type="button"
            >
              &times;
            </button>
          </div>
          <div className="p-6 sm:p-7">
            <p className="text-sm font-medium text-stone-500">
              {selectedProduct.category}
            </p>
            <div className="mt-1 flex items-start justify-between gap-4">
              <h2
                className="text-xl font-semibold text-stone-900"
                id="product-dialog-title"
              >
                {selectedProduct.name}
              </h2>
              <span className="shrink-0 font-semibold text-stone-900">
                {selectedProduct.price}
              </span>
            </div>
            <p className="mt-4 leading-7 text-stone-600">
              {selectedProduct.description}
            </p>
            <p className="mt-4 flex items-center gap-2 text-sm font-medium text-stone-800">
              <FaStar aria-hidden="true" className="text-amber-400" />
              {selectedProduct.rating} customer rating
            </p>
          </div>
        </dialog>
      )}
    </>
  );
}
