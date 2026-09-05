import React, { useState } from "react";
import {
  FiSend,
  FiChevronDown,
  FiArrowUpRight,
} from "react-icons/fi";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState(null);

  const faqs = [
    {
      question: "What is Velora?",
      answer:
        "Velora is a thoughtfully curated lifestyle brand focused on beautiful, quality products designed to add a little more elegance and comfort to everyday life.",
    },
    {
      question: "What kind of products does Velora offer?",
      answer:
        "Velora offers a carefully selected range of lifestyle products, including beauty, self-care, fashion and everyday essentials.",
    },
    {
      question: "How can I place an order?",
      answer:
        "You can browse our products, select the items you love, add them to your cart and complete your order through our simple checkout process.",
    },
    {
      question: "How long does delivery take?",
      answer:
        "Delivery time depends on your location and the selected delivery option. Estimated delivery details are shown during the ordering process.",
    },
    {
      question: "Can I return or exchange my order?",
      answer:
        "Yes, eligible products can be returned or exchanged according to Velora's return and exchange policy. Please contact us with your order details for assistance.",
    },
    {
      question: "How can I contact Velora?",
      answer:
        "You can reach us through the contact form on this page. Our team will be happy to help with product questions, orders, returns or any other concerns.",
    },
  ];

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setSubmitted(true);

    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });

    setTimeout(() => {
      setSubmitted(false);
    }, 4000);
  };

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <main className="bg-[#FAF9F6] text-[#171717]">

      {/* ================= CONTACT FORM ================= */}
      <section className="px-5 py-14 md:px-10 md:py-18 lg:px-16">
        <div className="mx-auto max-w-7xl">

          {/* Heading */}
          <div className="mb-10 max-w-2xl">
            <p className="mb-3 text-xs font-medium uppercase tracking-[0.25em] text-[#B58B45]">
              Contact Velora
            </p>

            <h1 className="text-4xl font-medium tracking-tight md:text-5xl">
              We'd love to hear
              <span className="block text-[#B58B45]">
                from you.
              </span>
            </h1>

            <p className="mt-4 max-w-xl text-sm leading-6 text-[#77736D] md:text-base">
              Have a question about a product, order, delivery, or
              anything else? Send us a message and our team will be
              happy to help.
            </p>
          </div>

          {/* Form + Info */}
          <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr]">

            {/* ================= FORM ================= */}
            <div className="rounded-2xl border border-[#E5DED4] bg-white p-6 md:p-8">

              <div className="mb-7">
                <h2 className="text-2xl font-medium">
                  Send us a message
                </h2>

                <p className="mt-2 text-sm text-[#77736D]">
                  Fill out the form below and we'll get back to you.
                </p>
              </div>

              <form
                onSubmit={handleSubmit}
                className="space-y-5"
              >

                {/* Name + Email */}
                <div className="grid gap-5 md:grid-cols-2">

                  <div>
                    <label className="mb-2 block text-sm font-medium">
                      Your Name
                    </label>

                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Enter your name"
                      required
                      className="w-full rounded-xl border border-[#DED7CD] bg-[#FAF9F6] px-4 py-3 text-sm outline-none transition focus:border-[#B58B45]"
                    />
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-medium">
                      Email Address
                    </label>

                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="you@example.com"
                      required
                      className="w-full rounded-xl border border-[#DED7CD] bg-[#FAF9F6] px-4 py-3 text-sm outline-none transition focus:border-[#B58B45]"
                    />
                  </div>

                </div>

                {/* Subject */}
                <div>
                  <label className="mb-2 block text-sm font-medium">
                    Subject
                  </label>

                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Order, product, delivery or general inquiry"
                    required
                    className="w-full rounded-xl border border-[#DED7CD] bg-[#FAF9F6] px-4 py-3 text-sm outline-none transition focus:border-[#B58B45]"
                  />
                </div>

                {/* Message */}
                <div>
                  <label className="mb-2 block text-sm font-medium">
                    Message
                  </label>

                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us how we can help you..."
                    rows="6"
                    required
                    className="w-full resize-none rounded-xl border border-[#DED7CD] bg-[#FAF9F6] px-4 py-3 text-sm outline-none transition focus:border-[#B58B45]"
                  />
                </div>

                {/* Button */}
                <button
                  type="submit"
                  className="group flex w-full items-center justify-center gap-2 rounded-xl bg-[#171717] px-6 py-3.5 text-sm font-medium text-white transition duration-300 hover:bg-[#B58B45]"
                >
                  {submitted ? "Message Sent ✓" : "Send Message"}

                  {!submitted && (
                    <FiSend
                      size={16}
                      className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                    />
                  )}
                </button>

                {/* Success Message */}
                {submitted && (
                  <p className="text-center text-sm text-[#B58B45]">
                    Thank you! Your message has been received.
                  </p>
                )}

              </form>
            </div>

            {/* ================= VELORA INFO ================= */}
            <div className="flex flex-col justify-between rounded-2xl bg-[#171717] p-6 text-white md:p-8">

              <div>
                <p className="mb-3 text-xs uppercase tracking-[0.25em] text-[#C9A45C]">
                  Velora Care
                </p>

                <h2 className="text-3xl font-medium leading-tight">
                  Here to make
                  <span className="block text-[#C9A45C]">
                    things easier.
                  </span>
                </h2>

                <p className="mt-5 text-sm leading-6 text-white/60">
                  From choosing the right product to questions about
                  your order, we're always happy to assist.
                </p>
              </div>

              <div className="mt-10 space-y-4">

                {/* Email */}
                <div className="rounded-xl border border-white/10 p-4 transition hover:border-[#C9A45C]/40">
                  <p className="text-xs uppercase tracking-wider text-white/40">
                    Email
                  </p>

                  <p className="mt-1 text-sm">
                    hello@velora.com
                  </p>
                </div>

                {/* Response */}
                <div className="rounded-xl border border-white/10 p-4 transition hover:border-[#C9A45C]/40">
                  <p className="text-xs uppercase tracking-wider text-white/40">
                    Response Time
                  </p>

                  <p className="mt-1 text-sm">
                    Usually within 24 hours
                  </p>
                </div>

                {/* Customer Care */}
                <div className="rounded-xl border border-white/10 p-4 transition hover:border-[#C9A45C]/40">
                  <p className="text-xs uppercase tracking-wider text-white/40">
                    Customer Care
                  </p>

                  <p className="mt-1 text-sm">
                    Here whenever you need us
                  </p>
                </div>

              </div>

              {/* Bottom */}
              <div className="mt-10 border-t border-white/10 pt-5">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-white/50">
                    Velora
                  </span>

                  <FiArrowUpRight
                    size={20}
                    className="text-[#C9A45C]"
                  />
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* ================= FAQ ================= */}
      <section className="border-t border-[#E5DED4] px-5 py-14 md:px-10 md:py-18 lg:px-16">
        <div className="mx-auto max-w-5xl">

          {/* FAQ Heading */}
          <div className="mb-10 text-center">

            <p className="mb-3 text-xs font-medium uppercase tracking-[0.25em] text-[#B58B45]">
              FAQ
            </p>

            <h2 className="text-3xl font-medium tracking-tight md:text-4xl">
              Everything you need to know
            </h2>

            <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-[#77736D]">
              Find quick answers about Velora, our products, orders,
              delivery, and customer care.
            </p>

          </div>

          {/* FAQ Items */}
          <div className="overflow-hidden rounded-2xl border border-[#E5DED4] bg-white">

            {faqs.map((faq, index) => (
              <div
                key={index}
                className="border-b border-[#E5DED4] last:border-b-0"
              >

                {/* Question */}
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
                      openFaq === index
                        ? "rotate-180"
                        : ""
                    }`}
                  />

                </button>

                {/* Answer */}
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

    </main>
  );
};

export default Contact;