import { useState } from "react";
import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";
import { Footer } from "../components/common/Footer";
import { Header } from "../components/common/Header";

const contactDetails = [
  {
    icon: FaEnvelope,
    label: "Email us",
    value: "hello@minicom.com",
    href: "mailto:hello@minicom.com",
  },
  {
    icon: FaPhoneAlt,
    label: "Call us",
    value: "+1 (555) 123-4567",
    href: "tel:+15551234567",
  },
  {
    icon: FaMapMarkerAlt,
    label: "Visit us",
    value: "123 Market Street, San Francisco, CA",
    href: "https://maps.google.com/?q=123+Market+Street+San+Francisco",
  },
];

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      

      <main className="min-h-screen bg-stone-50 px-4 pb-16 pt-28 sm:px-6 lg:px-8">
        <section className="mx-auto max-w-7xl">
          <div className="mx-auto mb-10 max-w-2xl text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-emerald-700">
              Get in touch
            </p>
            <h1 className="text-4xl font-bold tracking-tight text-stone-900 sm:text-5xl">
              Let&apos;s start a conversation
            </h1>
            <p className="mt-4 text-lg leading-8 text-stone-600">
              Have a question or an idea to share? We&apos;d love to hear from
              you. Send us a message and we&apos;ll be happy to help.
            </p>
          </div>

          <div className="grid overflow-hidden rounded-2xl border border-stone-200 bg-white shadow-sm lg:grid-cols-[0.8fr_1.2fr]">
            <aside className="bg-stone-900 p-7 text-white sm:p-10">
              <h2 className="text-2xl font-semibold">Contact information</h2>
              <p className="mt-3 leading-7 text-stone-300">
                Reach out through any of the channels below. We typically
                respond within one business day.
              </p>

              <ul className="mt-9 space-y-7">
                {contactDetails.map(({ icon: Icon, label, value, href }) => (
                  <li className="flex items-start gap-4" key={label}>
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/10 text-emerald-300">
                      <Icon aria-hidden="true" />
                    </span>
                    <div>
                      <p className="text-sm font-medium text-stone-400">
                        {label}
                      </p>
                      <a
                        className="mt-1 inline-block text-sm font-medium text-white transition hover:text-emerald-300"
                        href={href}
                        rel={
                          href.startsWith("https://") ? "noreferrer" : undefined
                        }
                        target={
                          href.startsWith("https://") ? "_blank" : undefined
                        }
                      >
                        {value}
                      </a>
                    </div>
                  </li>
                ))}
              </ul>

              <div className="mt-12 rounded-xl border border-white/10 bg-white/5 p-5">
                <p className="font-semibold">Our hours</p>
                <p className="mt-2 text-sm leading-6 text-stone-300">
                  Monday–Friday
                  <br />
                  9:00 AM–5:00 PM (Pacific Time)
                </p>
              </div>
            </aside>

            <div className="p-7 sm:p-10">
              <h2 className="text-2xl font-semibold text-stone-900">
                Send us a message
              </h2>
              <p className="mt-2 text-stone-600">
                Fill out the form and we&apos;ll get back to you soon.
              </p>

              <form className="mt-7 space-y-5" onSubmit={handleSubmit}>
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label
                      className="mb-2 block text-sm font-medium text-stone-700"
                      htmlFor="contact-name"
                    >
                      Your name
                    </label>
                    <input
                      autoComplete="name"
                      className="w-full rounded-lg border border-stone-300 bg-white px-4 py-3 text-stone-900 outline-none transition placeholder:text-stone-400 focus:border-emerald-700 focus:ring-2 focus:ring-emerald-700/20"
                      id="contact-name"
                      name="name"
                      placeholder="Jane Smith"
                      required
                    />
                  </div>
                  <div>
                    <label
                      className="mb-2 block text-sm font-medium text-stone-700"
                      htmlFor="contact-email"
                    >
                      Email address
                    </label>
                    <input
                      autoComplete="email"
                      className="w-full rounded-lg border border-stone-300 bg-white px-4 py-3 text-stone-900 outline-none transition placeholder:text-stone-400 focus:border-emerald-700 focus:ring-2 focus:ring-emerald-700/20"
                      id="contact-email"
                      name="email"
                      placeholder="jane@example.com"
                      required
                      type="email"
                    />
                  </div>
                </div>

                <div>
                  <label
                    className="mb-2 block text-sm font-medium text-stone-700"
                    htmlFor="contact-subject"
                  >
                    Subject
                  </label>
                  <input
                    className="w-full rounded-lg border border-stone-300 bg-white px-4 py-3 text-stone-900 outline-none transition placeholder:text-stone-400 focus:border-emerald-700 focus:ring-2 focus:ring-emerald-700/20"
                    id="contact-subject"
                    name="subject"
                    placeholder="How can we help?"
                    required
                  />
                </div>

                <div>
                  <label
                    className="mb-2 block text-sm font-medium text-stone-700"
                    htmlFor="contact-message"
                  >
                    Message
                  </label>
                  <textarea
                    className="w-full resize-y rounded-lg border border-stone-300 bg-white px-4 py-3 text-stone-900 outline-none transition placeholder:text-stone-400 focus:border-emerald-700 focus:ring-2 focus:ring-emerald-700/20"
                    id="contact-message"
                    name="message"
                    placeholder="Tell us a little about what you need..."
                    required
                    rows={5}
                  />
                </div>

                <button
                  className="w-full rounded-lg bg-emerald-800 px-5 py-3.5 font-semibold text-white transition hover:bg-emerald-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-800 sm:w-auto"
                  type="submit"
                >
                  Send message
                </button>

                {submitted && (
                  <p
                    aria-live="polite"
                    className="text-sm font-medium text-emerald-800"
                    role="status"
                  >
                    Thanks for reaching out. This demo form isn&apos;t connected
                    to a message service yet.
                  </p>
                )}
              </form>
            </div>
          </div>
        </section>
      </main>

      
    </>
  );
}
