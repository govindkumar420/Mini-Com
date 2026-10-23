import { Link } from "react-router";

export const Error404 = () => {
  return (
    <main className="flex min-h-screen items-center justify-center bg-stone-50 px-4 pb-16 pt-28 text-center sm:px-6">
      <section className="w-full max-w-2xl">
        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-emerald-700">
          Error 404
        </p>
        <h1 className="mt-4 text-6xl font-bold tracking-tight text-stone-900 sm:text-8xl">
          Lost?
        </h1>
        <p className="mx-auto mt-5 max-w-lg text-lg leading-8 text-stone-600">
          We can&apos;t find the page you&apos;re looking for. It may have been
          moved or the address may be incorrect.
        </p>
        <Link
          className="mt-8 inline-flex items-center justify-center rounded-lg bg-emerald-800 px-6 py-3 font-semibold text-white transition hover:bg-emerald-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-800"
          to="/"
        >
          Back to home
        </Link>
      </section>
    </main>
  );
};
