import React from "react";
import { Footer } from "../components/common/Footer";
import { Header } from "../components/common/Header";

export const About = () => {
  return (
    <>
     
      <main>
        <section className="bg-lime-100 px-4 pb-16 pt-28 text-center">
          <div className="mx-auto max-w-3xl">
            <p className="mb-3 font-semibold uppercase tracking-wide text-blue-700">
              About us
            </p>
            <h1 className="text-4xl font-bold text-gray-900">
              We help ideas grow online
            </h1>
            <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-gray-700">
              We partner with businesses to create useful digital experiences,
              from responsive websites and mobile apps to thoughtful digital
              marketing.
            </p>
          </div>
        </section>

        <section className="px-4 py-14">
          <div className="mx-auto grid max-w-5xl gap-10 md:grid-cols-2 md:items-center">
            <div>
              <h2 className="text-2xl font-bold text-gray-900">
                Digital solutions, built around you
              </h2>
              <p className="mt-4 leading-7 text-gray-700">
                Every project starts with understanding your goals, your
                audience, and what success looks like for your business. We
                turn that understanding into practical digital solutions
                designed to be clear, engaging, and easy to use.
              </p>
              <p className="mt-4 leading-7 text-gray-700">
                Whether you are starting from scratch or improving an existing
                product, we work with you from the first conversation through
                launch and beyond.
              </p>
            </div>

            <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
              <h2 className="text-xl font-bold text-gray-900">
                What we can help with
              </h2>
              <ul className="mt-4 space-y-3 text-gray-700">
                <li>
                  <span className="font-semibold text-blue-700">
                    Web development
                  </span>{" "}
                  — responsive websites made for your audience and goals.
                </li>
                <li>
                  <span className="font-semibold text-blue-700">
                    Mobile app development
                  </span>{" "}
                  — useful app experiences for your customers.
                </li>
                <li>
                  <span className="font-semibold text-blue-700">
                    Digital marketing
                  </span>{" "}
                  — strategies to help more people discover your business.
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section className="bg-gray-50 px-4 py-14">
          <div className="mx-auto max-w-5xl">
            <h2 className="text-center text-2xl font-bold text-gray-900">
              How we work
            </h2>
            <div className="mt-8 grid gap-6 md:grid-cols-3">
              <article className="rounded-lg bg-white p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-gray-900">
                  1. Understand
                </h3>
                <p className="mt-2 leading-7 text-gray-700">
                  We listen to your needs, discuss your goals, and agree on the
                  right direction together.
                </p>
              </article>
              <article className="rounded-lg bg-white p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-gray-900">
                  2. Create
                </h3>
                <p className="mt-2 leading-7 text-gray-700">
                  We shape and build a solution around your requirements, with
                  a focus on usability and quality.
                </p>
              </article>
              <article className="rounded-lg bg-white p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-gray-900">
                  3. Support
                </h3>
                <p className="mt-2 leading-7 text-gray-700">
                  We help you launch confidently and can support improvements
                  as your needs evolve.
                </p>
              </article>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};
