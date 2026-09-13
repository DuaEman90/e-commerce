
import React from "react";
import { FiArrowUpRight, FiMail, FiClock, FiShoppingBag } from "react-icons/fi";

const ContactInfo = () => {
  return (
    <div className="group relative flex h-full min-h-[620px] flex-col overflow-hidden rounded-[30px] bg-[#171717] p-7 text-white shadow-[0_25px_70px_rgba(23,23,23,0.16)] sm:p-9">

      {/* Gold Ambient Glow */}
      <div className="pointer-events-none absolute -right-32 -top-32 h-[360px] w-[360px] rounded-full bg-[#C7A550]/20 blur-[100px] transition-all duration-700 group-hover:bg-[#C7A550]/25" />

      <div className="pointer-events-none absolute -bottom-40 -left-32 h-[320px] w-[320px] rounded-full bg-[#E7C77B]/10 blur-[100px]" />

      {/* Center Glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[240px] w-[240px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#C7A550]/5 blur-[90px]" />

      {/* Texture */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.035] [background-image:radial-gradient(#ffffff_0.6px,transparent_0.6px)] [background-size:7px_7px]" />

      <div className="relative z-10 flex h-full flex-col">

        {/* Header */}
        <div>

          <div className="mb-5 flex items-center gap-3">
            <span className="h-px w-9 bg-gradient-to-r from-transparent to-[#C7A550]" />

            <p className="text-[9px] font-bold uppercase tracking-[3.5px] text-[#E7C77B]">
              Velora Care
            </p>

            <span className="h-1.5 w-1.5 rounded-full bg-[#C7A550] shadow-[0_0_12px_4px_rgba(199,165,80,0.3)]" />
          </div>

          <h2 className="max-w-[430px] text-[clamp(34px,4vw,52px)] font-medium leading-[0.95] tracking-[-2.5px]">
            Here to make
            <span className="block font-serif italic font-normal text-[#E7C77B]">
              shopping easier.
            </span>
          </h2>

          <p className="mt-5 max-w-[440px] text-[13px] leading-6 text-white/55">
            Need help choosing a product or have a question about your order,
            delivery or shopping experience? We're here to help.
          </p>
        </div>

        {/* Contact Cards */}
        <div className="mt-10 space-y-3">

          {/* Email */}
          <div className="group/card flex items-center gap-4 rounded-[18px] border border-white/10 bg-white/[0.03] p-4 backdrop-blur-md transition-all duration-400 hover:-translate-y-1 hover:border-[#C7A550]/40 hover:bg-[#C7A550]/[0.06]">

            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[#C7A550]/20 bg-[#C7A550]/10 text-[#E7C77B] transition-all duration-300 group-hover/card:border-[#C7A550]/40 group-hover/card:bg-[#C7A550]/15">
              <FiMail size={16} />
            </div>

            <div>
              <p className="text-[8px] font-bold uppercase tracking-[2px] text-white/35">
                Email
              </p>

              <p className="mt-1 text-[13px] text-white/85">
                hello@velora.com
              </p>
            </div>
          </div>

          {/* Response Time */}
          <div className="group/card flex items-center gap-4 rounded-[18px] border border-white/10 bg-white/[0.03] p-4 backdrop-blur-md transition-all duration-400 hover:-translate-y-1 hover:border-[#C7A550]/40 hover:bg-[#C7A550]/[0.06]">

            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[#C7A550]/20 bg-[#C7A550]/10 text-[#E7C77B] transition-all duration-300 group-hover/card:border-[#C7A550]/40 group-hover/card:bg-[#C7A550]/15">
              <FiClock size={16} />
            </div>

            <div>
              <p className="text-[8px] font-bold uppercase tracking-[2px] text-white/35">
                Response Time
              </p>

              <p className="mt-1 text-[13px] text-white/85">
                Usually within 24 hours
              </p>
            </div>
          </div>

          {/* Customer Care */}
          <div className="group/card flex items-center gap-4 rounded-[18px] border border-white/10 bg-white/[0.03] p-4 backdrop-blur-md transition-all duration-400 hover:-translate-y-1 hover:border-[#C7A550]/40 hover:bg-[#C7A550]/[0.06]">

            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[#C7A550]/20 bg-[#C7A550]/10 text-[#E7C77B] transition-all duration-300 group-hover/card:border-[#C7A550]/40 group-hover/card:bg-[#C7A550]/15">
              <FiShoppingBag size={16} />
            </div>

            <div>
              <p className="text-[8px] font-bold uppercase tracking-[2px] text-white/35">
                Customer Care
              </p>

              <p className="mt-1 text-[13px] text-white/85">
                Product, order & delivery support
              </p>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-auto pt-10">

          <div className="mb-5 h-px bg-gradient-to-r from-[#C7A550]/40 via-white/10 to-transparent" />

          <div className="flex items-end justify-between">

            <div>
              <p className="text-[8px] font-bold uppercase tracking-[2px] text-white/30">
                Global E-Commerce
              </p>

              <p className="mt-2 text-sm font-medium text-white/80">
                Global Brands. One Destination.
              </p>
            </div>

            <div className="flex h-11 w-11 items-center justify-center rounded-full border border-[#C7A550]/25 bg-[#C7A550]/10 text-[#E7C77B] transition-all duration-300 hover:rotate-45 hover:bg-[#C7A550] hover:text-[#171717]">
              <FiArrowUpRight size={18} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;

