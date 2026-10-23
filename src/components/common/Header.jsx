import { useState } from "react";
import { NavLink } from "react-router";

export const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const links = [
    { label: "Home", to: "/" },
    { label: "About", to: "/about" },
    { label: "Products", to: "/products" },
    { label: "Product API", to: "/product-api" },
    { label: "Contact", to: "/contact" },
    { label: "Sign in", to: "/login" },
  ];

  return (
    <header className="fixed inset-x-0 top-0 z-20 border-b border-stone-200 bg-white">
      <nav
        aria-label="Main navigation"
        className="mx-auto flex max-w-screen-xl flex-wrap items-center justify-between px-4 py-3 sm:px-6"
      >
        <NavLink
          className="text-xl font-bold tracking-tight text-stone-900"
          onClick={() => setMenuOpen(false)}
          to="/"
        >
          Mini Com
        </NavLink>

        <button
          aria-controls="primary-navigation"
          aria-expanded={menuOpen}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          className="inline-flex h-10 w-10 items-center justify-center rounded-lg text-stone-700 hover:bg-stone-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-700 md:hidden"
          onClick={() => setMenuOpen((open) => !open)}
          type="button"
        >
          <svg
            aria-hidden="true"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
          >
            {menuOpen ? (
              <path
                d="m6 6 12 12M18 6 6 18"
                stroke="currentColor"
                strokeLinecap="round"
                strokeWidth="2"
              />
            ) : (
              <path
                d="M4 6h16M4 12h16M4 18h16"
                stroke="currentColor"
                strokeLinecap="round"
                strokeWidth="2"
              />
            )}
          </svg>
        </button>

        <div
          className={`${menuOpen ? "block" : "hidden"} w-full md:block md:w-auto`}
          id="primary-navigation"
        >
          <ul className="mt-3 flex flex-col gap-1 border-t border-stone-100 pt-3 md:mt-0 md:flex-row md:items-center md:gap-7 md:border-0 md:pt-0">
            {links.map(({ label, to }) => (
              <li key={to}>
                <NavLink
                  className={({ isActive }) =>
                    `block rounded-md px-3 py-2 text-sm font-medium transition md:px-0 ${
                      isActive
                        ? "text-emerald-800"
                        : "text-stone-600 hover:text-emerald-800"
                    }`
                  }
                  onClick={() => setMenuOpen(false)}
                  to={to}
                >
                  {label}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
};
