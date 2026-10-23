import { Link } from "react-router";
import products from "../Data/ProductData";

const categories = [
  {
    name: "Audio",
    description: "Find your everyday rhythm",
    image: products[0].image,
    imageAlt: products[0].imageAlt,
  },
  {
    name: "Accessories",
    description: "The details make the day",
    image: products[1].image,
    imageAlt: products[1].imageAlt,
  },
  {
    name: "Photography",
    description: "Keep the good moments",
    image: products[2].image,
    imageAlt: products[2].imageAlt,
  },
  {
    name: "Home & Kitchen",
    description: "Make room for little rituals",
    image: products[3].image,
    imageAlt: products[3].imageAlt,
  },
];

function ArrowIcon() {
  return (
    <svg
      aria-hidden="true"
      className="h-4 w-4 transition-transform group-hover:translate-x-1"
      fill="none"
      viewBox="0 0 20 20"
    >
      <path
        d="M4.167 10h11.666m0 0-5-5m5 5-5 5"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.7"
      />
    </svg>
  );
}

function ProductCard({ product }) {
  return (
    <article className="group overflow-hidden rounded-2xl border border-stone-200/80 bg-white transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-stone-900/5">
      <Link
        aria-label={`Explore ${product.name}`}
        className="block"
        to="/products"
      >
        <div className="relative flex aspect-[4/3] items-center justify-center overflow-hidden bg-stone-50 p-7">
          <img
            alt={product.imageAlt}
            className="h-full w-full object-contain transition duration-500 group-hover:scale-105"
            loading="lazy"
            src={product.image}
          />
          {product.badge && (
            <span className="absolute left-4 top-4 rounded-full bg-white px-3 py-1 text-xs font-semibold text-stone-700 shadow-sm">
              {product.badge}
            </span>
          )}
        </div>
        <div className="p-5">
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-stone-500">
            {product.category}
          </p>
          <div className="mt-2 flex items-start justify-between gap-3">
            <h3 className="text-base font-semibold leading-6 text-stone-900">
              {product.name}
            </h3>
            <span className="shrink-0 text-sm font-semibold text-stone-900">
              {product.price}
            </span>
          </div>
          <p className="mt-3 flex items-center gap-1.5 text-sm text-stone-600">
            <span aria-hidden="true" className="text-amber-400">
              ★
            </span>
            <span className="font-medium text-stone-800">{product.rating}</span>
            <span>customer rating</span>
          </p>
        </div>
      </Link>
    </article>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen bg-[#fcfbf8] pt-16 text-stone-900">
      <section className="overflow-x-clip px-4 pb-16 pt-8 sm:px-6 sm:pb-20 sm:pt-12 lg:pb-24 lg:pt-16">
        <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:gap-14">
          <div className="max-w-xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-emerald-900/10 bg-emerald-50 px-3.5 py-2 text-xs font-semibold uppercase tracking-[0.15em] text-emerald-800">
              <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-emerald-600" />
              The everyday edit
            </span>
            <h1 className="mt-6 text-4xl font-semibold leading-[1.08] tracking-tight text-stone-950 sm:text-5xl lg:text-6xl">
              Good things for{" "}
              <span className="font-serif italic text-emerald-800">
                everyday
              </span>{" "}
              living.
            </h1>
            <p className="mt-6 max-w-lg text-base leading-7 text-stone-600 sm:text-lg sm:leading-8">
              Thoughtful finds, timeless favorites, and little upgrades that
              make your day feel more like yours.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                className="group inline-flex items-center justify-center gap-2 rounded-lg bg-stone-900 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-emerald-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-700"
                to="/products"
              >
                Shop the collection
                <ArrowIcon />
              </Link>
              <Link
                className="inline-flex items-center justify-center rounded-lg border border-stone-300 px-6 py-3.5 text-sm font-semibold text-stone-800 transition hover:border-stone-500 hover:bg-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-700"
                to="/about"
              >
                Get to know us
              </Link>
            </div>
            <div className="mt-10 flex items-center gap-3 border-t border-stone-200 pt-6">
              <div className="flex -space-x-2" aria-hidden="true">
                {["bg-emerald-200", "bg-amber-200", "bg-rose-200", "bg-sky-200"].map(
                  (color) => (
                    <span
                      className={`flex h-8 w-8 items-center justify-center rounded-full border-2 border-[#fcfbf8] ${color}`}
                      key={color}
                    >
                      <span className="h-2 w-2 rounded-full bg-stone-700/50" />
                    </span>
                  ),
                )}
              </div>
              <p className="text-sm text-stone-600">
                <span className="font-semibold text-stone-900">A little joy</span>{" "}
                in the everyday.
              </p>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-2xl">
            <div className="absolute -inset-3 -rotate-2 rounded-[2rem] bg-[#e9eee7] sm:-inset-5" />
            <div className="relative aspect-[4/3] overflow-hidden rounded-[1.5rem] bg-stone-200 shadow-2xl shadow-stone-900/10 sm:rounded-[1.75rem]">
              <img
                alt="Studio headphones ready for a favorite playlist"
                className="h-full w-full object-cover"
                fetchPriority="high"
                src={products[0].image}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950/45 via-transparent to-transparent" />
              <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between gap-4 text-white sm:bottom-7 sm:left-7 sm:right-7">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/75">
                    A sound choice
                  </p>
                  <p className="mt-1 text-lg font-semibold sm:text-xl">
                    Meet your new favorite
                  </p>
                </div>
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white/15 backdrop-blur transition hover:bg-white/25">
                  <ArrowIcon />
                </span>
              </div>
            </div>
            <div className="absolute -bottom-5 right-3 rounded-xl border border-stone-100 bg-white px-4 py-3 shadow-lg sm:-bottom-6 sm:right-8 sm:px-5 sm:py-4">
              <p className="text-xs font-medium text-stone-500">Customer favorite</p>
              <p className="mt-1 flex items-center gap-1 text-sm font-semibold text-stone-900">
                <span aria-hidden="true" className="text-amber-400">★</span>
                {products[0].rating} out of 5
              </p>
            </div>
          </div>
        </div>
      </section>

      <section
        aria-label="Shopping benefits"
        className="border-y border-stone-200 bg-white"
      >
        <div className="mx-auto grid max-w-7xl gap-6 px-4 py-6 sm:grid-cols-3 sm:px-6 sm:py-7">
          {[
            ["Curated with care", "Useful things, chosen thoughtfully."],
            ["Everyday favorites", "Easy-to-love picks for real life."],
            ["A smoother checkout", "Simple shopping from start to finish."],
          ].map(([title, description], index) => (
            <div
              className={`flex items-center gap-4 ${
                index > 0 ? "sm:border-l sm:border-stone-200 sm:pl-7" : ""
              }`}
              key={title}
            >
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-emerald-50 text-emerald-800">
                {index === 0 ? (
                  <svg aria-hidden="true" className="h-5 w-5" fill="none" viewBox="0 0 24 24">
                    <path d="m12 3 1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8L12 3Z" stroke="currentColor" strokeLinejoin="round" strokeWidth="1.6" />
                    <path d="m19 15 .9 2.1L22 18l-2.1.9L19 21l-.9-2.1L16 18l2.1-.9L19 15Z" stroke="currentColor" strokeLinejoin="round" strokeWidth="1.4" />
                  </svg>
                ) : index === 1 ? (
                  <svg aria-hidden="true" className="h-5 w-5" fill="none" viewBox="0 0 24 24">
                    <path d="M12 20s-7-4.4-7-10a4 4 0 0 1 7-2.6A4 4 0 0 1 19 10c0 5.6-7 10-7 10Z" stroke="currentColor" strokeLinejoin="round" strokeWidth="1.7" />
                  </svg>
                ) : (
                  <svg aria-hidden="true" className="h-5 w-5" fill="none" viewBox="0 0 24 24">
                    <path d="M4 7h16v13H4zM8 7V5h8v2m-8 5h8m-8 4h5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.7" />
                  </svg>
                )}
              </span>
              <div>
                <h2 className="text-sm font-semibold text-stone-900">{title}</h2>
                <p className="mt-1 text-sm text-stone-500">{description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-8 flex flex-col gap-4 sm:mb-10 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-emerald-700">
                Find your next favorite
              </p>
              <h2 className="mt-2 text-3xl font-semibold tracking-tight text-stone-950 sm:text-4xl">
                Shop by category
              </h2>
            </div>
            <Link
              className="group inline-flex items-center gap-2 text-sm font-semibold text-stone-800 transition hover:text-emerald-800"
              to="/products"
            >
              Browse everything
              <ArrowIcon />
            </Link>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {categories.map((category) => (
              <Link
                className="group relative aspect-[4/3] overflow-hidden rounded-2xl bg-stone-200"
                key={category.name}
                to="/products"
              >
                <img
                  alt={category.imageAlt}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  loading="lazy"
                  src={category.image}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-950/75 via-stone-950/5 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-3 p-5 text-white">
                  <div>
                    <h3 className="text-lg font-semibold">{category.name}</h3>
                    <p className="mt-1 text-sm text-white/75">{category.description}</p>
                  </div>
                  <span className="mb-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/50 transition group-hover:border-white group-hover:bg-white group-hover:text-stone-900">
                    <ArrowIcon />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#f2f0e9] px-4 py-16 sm:px-6 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-8 flex flex-col gap-4 sm:mb-10 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-emerald-700">
                Good picks, right now
              </p>
              <h2 className="mt-2 text-3xl font-semibold tracking-tight text-stone-950 sm:text-4xl">
                A few we love
              </h2>
              <p className="mt-2 text-stone-600">
                A considered collection of easy everyday upgrades.
              </p>
            </div>
            <Link
              className="group inline-flex items-center gap-2 text-sm font-semibold text-stone-800 transition hover:text-emerald-800"
              to="/products"
            >
              See all products
              <ArrowIcon />
            </Link>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {products.map((product) => (
              <ProductCard key={product.name} product={product} />
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 sm:py-20">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-7 overflow-hidden rounded-3xl bg-emerald-950 px-6 py-10 text-white sm:px-10 sm:py-12 lg:flex-row lg:items-center lg:px-14">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-emerald-200">
              Make yourself at home
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
              Your next favorite is just around the corner.
            </h2>
            <p className="mt-3 max-w-xl leading-7 text-emerald-100/80">
              Explore a collection of thoughtful finds and everyday essentials.
            </p>
          </div>
          <Link
            className="group inline-flex shrink-0 items-center justify-center gap-2 rounded-lg bg-white px-6 py-3.5 text-sm font-semibold text-emerald-950 transition hover:bg-emerald-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            to="/products"
          >
            Explore the collection
            <ArrowIcon />
          </Link>
        </div>
      </section>
    </main>
  );
}
