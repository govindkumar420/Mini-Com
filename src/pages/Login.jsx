import { Link } from "react-router";

export default function Login() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-stone-50 px-4 py-16 sm:px-6">
      <section className="w-full max-w-md rounded-2xl border border-stone-200 bg-white p-7 shadow-sm sm:p-10">
        <div className="mb-8 text-center">
          <Link
            className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-800 text-xl font-bold text-white"
            to="/"
          >
            M
          </Link>
          <p className="mt-5 text-sm font-semibold uppercase tracking-[0.2em] text-emerald-700">
            Welcome back
          </p>
          <h1 className="mt-2 text-3xl font-bold tracking-tight text-stone-900">
            Sign in to Mini Com
          </h1>
          <p className="mt-2 text-sm leading-6 text-stone-600">
            Enter your details to access your account.
          </p>
        </div>

        <form className="space-y-5">
          <div>
            <label
              className="mb-2 block text-sm font-medium text-stone-700"
              htmlFor="login-email"
            >
              Email address
            </label>
            <input
              autoComplete="email"
              className="w-full rounded-lg border border-stone-300 px-4 py-3 text-stone-900 outline-none transition placeholder:text-stone-400 focus:border-emerald-700 focus:ring-2 focus:ring-emerald-700/20"
              id="login-email"
              name="email"
              placeholder="you@example.com"
              required
              type="email"
            />
          </div>

          <div>
            <div className="mb-2 flex items-center justify-between gap-3">
              <label
                className="text-sm font-medium text-stone-700"
                htmlFor="login-password"
              >
                Password
              </label>
              <a
                className="text-sm font-semibold text-emerald-800 transition hover:text-emerald-900"
                href="mailto:hello@minicom.com?subject=Password%20reset"
              >
                Forgot password?
              </a>
            </div>
            <input
              autoComplete="current-password"
              className="w-full rounded-lg border border-stone-300 px-4 py-3 text-stone-900 outline-none transition placeholder:text-stone-400 focus:border-emerald-700 focus:ring-2 focus:ring-emerald-700/20"
              id="login-password"
              name="password"
              placeholder="Enter your password"
              required
              type="password"
            />
          </div>

          <label className="flex items-center gap-3 text-sm text-stone-600">
            <input
              className="h-4 w-4 rounded border-stone-300 accent-emerald-800 focus:ring-emerald-700"
              name="remember"
              type="checkbox"
            />
            Remember me
          </label>

          <button
            className="w-full rounded-lg bg-emerald-800 px-5 py-3.5 font-semibold text-white transition hover:bg-emerald-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-800"
            type="submit"
          >
            Sign in
          </button>
        </form>

        <p className="mt-7 text-center text-sm text-stone-600">
          New to Mini Com?{" "}
          <a
            className="font-semibold text-emerald-800 transition hover:text-emerald-900"
            href="mailto:hello@minicom.com?subject=Create%20an%20account"
          >
            Contact us to get started
          </a>
        </p>
      </section>
    </main>
  );
}
