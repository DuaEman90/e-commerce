
import React from "react";

import ContactForm from "../components/contact/ContactForm";
import ContactInfo from "../components/contact/ContactInfo";
import FAQ from "../components/contact/FAQ";

const Contact = () => {
  return (
    <main className="bg-[#FAF9F6] text-[#171717]">
      <section className="px-5 py-14 md:px-10 md:py-18 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 max-w-2xl">
            <p className="mb-3 text-xs font-medium uppercase tracking-[0.25em] text-[#B58B45]">
              Contact Velora
            </p>

            <h1 className="text-4xl font-medium tracking-tight md:text-5xl">
              We're here to help
              <span className="block text-[#B58B45]">
                whenever you need us.
              </span>
            </h1>

            <p className="mt-4 max-w-xl text-sm leading-6 text-[#77736D] md:text-base">
              Have a question about a product, order, delivery or anything
              else? Send us a message and our team will be happy to help.
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr]">
            <div className="rounded-2xl border border-[#E5DED4] bg-white p-6 md:p-8">
              <ContactForm />
            </div>

            <ContactInfo />
          </div>
        </div>
      </section>

      <FAQ />
    </main>
  );
};

export default Contact;

