
import React from "react";
import { FiArrowUpRight } from "react-icons/fi";

const ContactInfo = () => {
  return (
    <div className="flex flex-col justify-between rounded-2xl bg-[#171717] p-6 text-white md:p-8">
      <div>
        <p className="mb-3 text-xs uppercase tracking-[0.25em] text-[#C9A45C]">
          Velora Care
        </p>

        <h2 className="text-3xl font-medium leading-tight">
          Here to make
          <span className="block text-[#C9A45C]">
            shopping easier.
          </span>
        </h2>

        <p className="mt-5 text-sm leading-6 text-white/60">
          Need help choosing a product or have a question about your order,
          delivery or shopping experience? We're here to help.
        </p>
      </div>

      <div className="mt-10 space-y-4">
        <div className="rounded-xl border border-white/10 p-4 transition hover:border-[#C9A45C]/40">
          <p className="text-xs uppercase tracking-wider text-white/40">
            Email
          </p>

          <p className="mt-1 text-sm">
            hello@velora.com
          </p>
        </div>

        <div className="rounded-xl border border-white/10 p-4 transition hover:border-[#C9A45C]/40">
          <p className="text-xs uppercase tracking-wider text-white/40">
            Response Time
          </p>

          <p className="mt-1 text-sm">
            Usually within 24 hours
          </p>
        </div>

        <div className="rounded-xl border border-white/10 p-4 transition hover:border-[#C9A45C]/40">
          <p className="text-xs uppercase tracking-wider text-white/40">
            Customer Care
          </p>

          <p className="mt-1 text-sm">
            Product, order & delivery support
          </p>
        </div>
      </div>

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
  );
};

export default ContactInfo;

