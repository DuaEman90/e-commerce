
import React, { useState } from "react";
import { FiSend } from "react-icons/fi";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

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

  return (
    <div>
      <div className="mb-7">
        <h2 className="text-2xl font-medium">
          Send us a message
        </h2>

        <p className="mt-2 text-sm text-[#77736D]">
          Fill out the form below and our team will get back to you.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-5">
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

        <div>
          <label className="mb-2 block text-sm font-medium">
            Subject
          </label>

          <input
            type="text"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            placeholder="Product, order, delivery or general inquiry"
            required
            className="w-full rounded-xl border border-[#DED7CD] bg-[#FAF9F6] px-4 py-3 text-sm outline-none transition focus:border-[#B58B45]"
          />
        </div>

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

        {submitted && (
          <p className="text-center text-sm text-[#B58B45]">
            Thank you! Your message has been received.
          </p>
        )}
      </form>
    </div>
  );
};

export default ContactForm;

