
import React, { useState } from "react";
import { FiArrowUpRight, FiSend } from "react-icons/fi";

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

  const inputStyle =
    "w-full rounded-[16px] border border-[#171717]/10 bg-white/60 px-4 py-3.5 text-[13px] text-[#171717] outline-none backdrop-blur-md transition-all duration-300 placeholder:text-[#171717]/30 hover:border-[#C7A550]/25 focus:border-[#C7A550] focus:bg-white/80 focus:shadow-[0_0_0_4px_rgba(199,165,80,0.08)]";

  return (
    <div className="relative overflow-hidden rounded-[30px] border border-[#171717]/10 bg-white/45 p-6 shadow-[0_25px_70px_rgba(45,37,22,0.07)] backdrop-blur-xl sm:p-8 lg:p-10">

      {/* Soft Glow */}
      <div className="pointer-events-none absolute -right-32 -top-32 h-[320px] w-[320px] rounded-full bg-[#E7C77B]/20 blur-[100px]" />

      <div className="pointer-events-none absolute -bottom-32 -left-32 h-[280px] w-[280px] rounded-full bg-[#C7A550]/10 blur-[90px]" />

      {/* Subtle Texture */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.02] [background-image:radial-gradient(#171717_0.6px,transparent_0.6px)] [background-size:7px_7px]" />

      <div className="relative z-10">

        {/* Header */}
        <div className="mb-8">

          <div className="mb-4 flex items-center gap-3">
            <span className="h-px w-9 bg-gradient-to-r from-transparent to-[#C7A550]" />

            <p className="text-[9px] font-bold uppercase tracking-[3.5px] text-[#A38332]">
              Get In Touch
            </p>

            <span className="h-1.5 w-1.5 rounded-full bg-[#C7A550] shadow-[0_0_12px_4px_rgba(199,165,80,0.25)]" />
          </div>

          <h2 className="text-[clamp(30px,3.5vw,46px)] font-medium leading-[0.98] tracking-[-2px] text-[#171717]">
            Send us a
            <span className="ml-2 font-serif italic font-normal text-[#B28A32]">
              message.
            </span>
          </h2>

          <p className="mt-4 max-w-[520px] text-[13px] leading-6 text-[#171717]/55">
            Have a question about a product, order or delivery? Fill out the
            form and our team will get back to you.
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-5">

          {/* Name + Email */}
          <div className="grid gap-5 md:grid-cols-2">

            <div>
              <label className="mb-2.5 block text-[9px] font-bold uppercase tracking-[2px] text-[#171717]/55">
                Your Name
              </label>

              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your name"
                required
                className={inputStyle}
              />
            </div>

            <div>
              <label className="mb-2.5 block text-[9px] font-bold uppercase tracking-[2px] text-[#171717]/55">
                Email Address
              </label>

              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="you@example.com"
                required
                className={inputStyle}
              />
            </div>
          </div>

          {/* Subject */}
          <div>
            <label className="mb-2.5 block text-[9px] font-bold uppercase tracking-[2px] text-[#171717]/55">
              Subject
            </label>

            <input
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              placeholder="Product, order, delivery or general inquiry"
              required
              className={inputStyle}
            />
          </div>

          {/* Message */}
          <div>
            <label className="mb-2.5 block text-[9px] font-bold uppercase tracking-[2px] text-[#171717]/55">
              Message
            </label>

            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Tell us how we can help you..."
              rows="6"
              required
              className={`${inputStyle} resize-none`}
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="group flex w-full cursor-pointer items-center justify-center gap-3 rounded-[16px] bg-[#171717] px-6 py-4 text-[9px] font-bold uppercase tracking-[2px] text-[#F7F2E8] shadow-[0_12px_35px_rgba(23,23,23,0.14)] transition-all duration-500 hover:-translate-y-1 hover:bg-[#C7A550] hover:text-white hover:shadow-[0_18px_45px_rgba(199,165,80,0.25)]"
          >
            {submitted ? "Message Sent ✓" : "Send Message"}

            {!submitted && (
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white/10 transition-all duration-300 group-hover:bg-white/20">
                <FiSend
                  size={14}
                  className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </span>
            )}
          </button>

          {/* Success */}
          {submitted && (
            <div className="flex items-center justify-center gap-2 rounded-[14px] border border-[#C7A550]/20 bg-[#C7A550]/5 py-3">
              <span className="h-1.5 w-1.5 rounded-full bg-[#C7A550] shadow-[0_0_8px_3px_rgba(199,165,80,0.25)]" />

              <p className="text-[9px] font-bold uppercase tracking-[1.5px] text-[#A38332]">
                Thank you! Your message has been received.
              </p>
            </div>
          )}

          {/* Bottom Detail */}
          <div className="flex items-center justify-between border-t border-[#171717]/10 pt-5">
            <p className="text-[8px] uppercase tracking-[1.8px] text-[#171717]/35">
              Velora · Global E-Commerce
            </p>

            <FiArrowUpRight
              size={14}
              className="text-[#C7A550]"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;

