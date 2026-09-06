
import React, { useState } from "react";
import { FiChevronDown } from "react-icons/fi";

const FAQ = () => {
  const [openFaq, setOpenFaq] = useState(null);

  const faqs = [
    {
      question: "What is Velora?",
      answer:
        "Velora is a modern multi-category e-commerce store that brings products from different brands and categories together in one destination.",
    },
    {
      question: "What kind of products does Velora offer?",
      answer:
        "Velora offers products across multiple categories including fashion, beauty, electronics, furniture, groceries and everyday essentials.",
    },
    {
      question: "Where do Velora's products come from?",
      answer:
        "Velora is a multi-brand marketplace-style store. Products are sourced from different product categories and brands rather than being manufactured as Velora products.",
    },
    {
      question: "How can I place an order?",
      answer:
        "Browse the Products page, choose the items you like, add them to your shopping experience and continue through the available ordering process.",
    },
    {
      question: "How long does delivery take?",
      answer:
        "Delivery time can vary depending on the product and destination. Estimated delivery information can be provided during the ordering process.",
    },
    {
      question: "Can I return or exchange my order?",
      answer:
        "Eligible products can be returned or exchanged according to the applicable return policy. Contact Velora Care if you need assistance with an order.",
    },
  ];

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <section className="border-t border-[#E5DED4] px-5 py-14 md:px-10 md:py-18 lg:px-16">
      <div className="mx-auto max-w-5xl">
        <div className="mb-10 text-center">
          <p className="mb-3 text-xs font-medium uppercase tracking-[0.25em] text-[#B58B45]">
            FAQ
          </p>

          <h2 className="text-3xl font-medium tracking-tight md:text-4xl">
            Everything you need to know
          </h2>

          <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-[#77736D]">
            Find quick answers about Velora, our product categories, orders,
            delivery and customer care.
          </p>
        </div>

        <div className="overflow-hidden rounded-2xl border border-[#E5DED4] bg-white">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border-b border-[#E5DED4] last:border-b-0"
            >
              <button
                type="button"
                onClick={() => toggleFaq(index)}
                className="flex w-full items-center justify-between gap-5 px-5 py-5 text-left transition hover:bg-[#FAF9F6] md:px-7"
              >
                <span className="text-sm font-medium md:text-base">
                  {faq.question}
                </span>

                <FiChevronDown
                  size={18}
                  className={`shrink-0 text-[#B58B45] transition-transform duration-300 ${
                    openFaq === index ? "rotate-180" : ""
                  }`}
                />
              </button>

              <div
                className={`grid transition-all duration-300 ${
                  openFaq === index
                    ? "grid-rows-[1fr] opacity-100"
                    : "grid-rows-[0fr] opacity-0"
                }`}
              >
                <div className="overflow-hidden">
                  <p className="px-5 pb-5 text-sm leading-6 text-[#77736D] md:px-7 md:pb-6">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;

