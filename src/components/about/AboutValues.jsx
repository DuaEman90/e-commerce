import React from "react";

import {
  FiArrowUpRight,
  FiGlobe,
  FiGrid,
  FiShoppingBag,
} from "react-icons/fi";

import { Link } from "react-router-dom";

const values = [
  {
    icon: FiGlobe,
    num: "01",
    title: "Global Selection",
    text: "Explore products from different brands and categories through one convenient shopping destination.",
  },
  {
    icon: FiGrid,
    num: "02",
    title: "Something for Everyone",
    text: "From beauty and fashion to electronics, furniture, groceries and everyday essentials.",
  },
  {
    icon: FiShoppingBag,
    num: "03",
    title: "One Seamless Experience",
    text: "Discover products, compare your options and shop across categories through a clean and simple interface.",
  },
];

const AboutValues = () => {
  return (
    <section className="relative overflow-hidden bg-[#F4F0E8] px-5 pb-8 pt-8 text-[#171717] sm:px-8 md:pb-10 md:pt-10 lg:px-14 xl:px-20">
      
      {/* Background Glow */}
      <div className="pointer-events-none absolute -left-32 top-10 h-[350px] w-[350px] rounded-full bg-[#D8B762]/10 blur-[110px]" />

      <div className="pointer-events-none absolute -right-32 bottom-10 h-[350px] w-[350px] rounded-full bg-[#E7C77B]/10 blur-[110px]" />

      {/* Subtle texture */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.018] [background-image:radial-gradient(#171717_0.6px,transparent_0.6px)] [background-size:7px_7px]" />

      <div className="relative z-10 mx-auto max-w-[1400px]">

        {/* =====================================================
            HEADING
        ===================================================== */}

        <div className="mx-auto mb-7 max-w-2xl text-center">

          <div className="mb-3 flex items-center justify-center gap-3">
            <span className="h-px w-7 bg-gradient-to-r from-transparent to-[#C7A550]" />

            <p className="text-[9px] font-bold uppercase tracking-[3px] text-[#A38332]">
              What Makes Velora Different
            </p>

            <span className="h-px w-7 bg-gradient-to-l from-transparent to-[#C7A550]" />
          </div>

          <h2 className="text-[clamp(32px,4vw,50px)] font-medium leading-tight tracking-[-2px] text-[#171717]">
            Our purpose,{" "}
            <em className="font-serif font-normal tracking-[-1px] text-[#B28A32]">
              simply.
            </em>
          </h2>

          <p className="mx-auto mt-2.5 max-w-xl text-[13px] leading-5.5 text-[#171717]/55">
            A modern approach to discovering products from different
            categories and brands, all in one destination.
          </p>
        </div>

        {/* =====================================================
            VALUE CARDS
        ===================================================== */}

        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">

          {values.map((value, index) => {
            const Icon = value.icon;

            return (
              <div
                key={value.num}
                className="group relative overflow-hidden rounded-[22px] border border-[#DED6C8] bg-[#FBF9F4]/80 p-6 shadow-[0_10px_30px_rgba(60,49,29,0.04)] backdrop-blur-sm transition-all duration-500 hover:-translate-y-1.5 hover:border-[#C7A550]/60 hover:bg-[#FFFDF8] hover:shadow-[0_18px_45px_rgba(181,139,69,0.13)]"
              >

                {/* Card Glow */}

                <div className="pointer-events-none absolute -right-12 -top-12 h-32 w-32 rounded-full bg-[#E7C77B]/10 blur-3xl transition-all duration-500 group-hover:bg-[#E7C77B]/25" />

                {/* Number */}

                <span className="pointer-events-none absolute right-4 top-3 select-none text-[62px] font-bold leading-none text-[#EEE8DC] transition-all duration-500 group-hover:text-[#E8DDC7]">
                  {value.num}
                </span>

                {/* Icon Circle */}

                <div className="relative mb-5 flex h-11 w-11 items-center justify-center rounded-full border border-[#C7A550]/30 bg-[#FFF9EA] text-[#B28A32] shadow-[0_0_18px_rgba(199,165,80,0.12)] transition-all duration-500 group-hover:border-[#C7A550]/60 group-hover:shadow-[0_0_25px_rgba(199,165,80,0.28)]">

                  <Icon
                    size={20}
                    strokeWidth={1.5}
                    className="transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3"
                  />

                </div>

                {/* Small Label */}

                <p className="relative mb-1.5 text-[7px] font-bold uppercase tracking-[2px] text-[#A38332]">
                  0{index + 1} / Velora
                </p>

                {/* Title */}

                <h3 className="relative max-w-[240px] text-[17px] font-semibold leading-snug text-[#171717]">
                  {value.title}
                </h3>

                {/* Text */}

                <p className="relative mt-2.5 text-[12px] leading-5.5 text-[#171717]/52">
                  {value.text}
                </p>

                {/* Bottom Line */}

                <div className="relative mt-5 flex items-center gap-2">

                  <div className="h-[2px] w-8 bg-[#C7A550] transition-all duration-500 group-hover:w-14" />

                  <div className="h-1.5 w-1.5 rounded-full bg-[#C7A550] shadow-[0_0_8px_2px_rgba(199,165,80,0.35)]" />

                </div>

              </div>
            );
          })}

        </div>

        {/* =====================================================
            EXPLORE CTA
        ===================================================== */}

        <div className="relative mt-5 flex flex-col items-center justify-between gap-4 overflow-hidden rounded-[18px] border border-[#DED6C8] bg-[#EEE9DE]/70 px-5 py-4 backdrop-blur-sm sm:flex-row sm:px-7">

          {/* CTA glow */}

          <div className="pointer-events-none absolute -right-10 top-1/2 h-32 w-32 -translate-y-1/2 rounded-full bg-[#E7C77B]/15 blur-3xl" />

          <div className="relative">

            <p className="text-[8px] font-bold uppercase tracking-[2.5px] text-[#A38332]">
              Explore the collection
            </p>

            <h3 className="mt-1 text-base font-medium text-[#171717] md:text-lg">
              Find something made for you.
            </h3>

          </div>

          <Link
            to="/product"
            className="group relative inline-flex shrink-0 items-center gap-3 rounded-full border border-[#171717] bg-[#171717] px-5 py-2.5 text-[8px] font-bold uppercase tracking-[2px] text-white transition-all duration-300 hover:border-[#C7A550] hover:bg-[#C7A550] hover:text-[#171717] hover:shadow-[0_0_25px_rgba(199,165,80,0.28)]"
          >
            Explore Products

            <FiArrowUpRight
              size={14}
              className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
            />
          </Link>

        </div>

      </div>
    </section>
  );
};

export default AboutValues;