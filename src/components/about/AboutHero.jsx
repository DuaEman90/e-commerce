
import React from "react";
import { FiArrowUpRight, FiChevronRight } from "react-icons/fi";
import { Link } from "react-router-dom";

const HERO_IMG = "/images/about-hero.jpg";

const categories = [
  "Beauty",
  "Fashion",
  "Technology",
  "Home",
  "Groceries",
];

const AboutHero = () => {
  return (
    <section className="relative min-h-[620px] overflow-hidden bg-[#F4F0E8] text-[#171717]">

      {/* =====================================================
          BACKGROUND GLOW
      ===================================================== */}

      <div className="pointer-events-none absolute -right-40 -top-40 h-[550px] w-[550px] rounded-full bg-[#E7C77B]/20 blur-[130px]" />

      <div className="pointer-events-none absolute -bottom-40 -left-40 h-[450px] w-[450px] rounded-full bg-[#D8C7A5]/20 blur-[120px]" />

      {/* subtle texture */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.025] [background-image:radial-gradient(#171717_0.6px,transparent_0.6px)] [background-size:7px_7px]" />

      {/* =====================================================
          MAIN CONTAINER
      ===================================================== */}

      <div className="relative z-10 mx-auto max-w-[1500px] px-5 pb-5 pt-5 sm:px-8 lg:px-14 xl:px-20">

        {/* =================================================
            HERO GRID
        ================================================= */}

        <div className="grid items-center gap-7 lg:grid-cols-[0.82fr_1.18fr] lg:gap-10">

          {/* =================================================
              LEFT CONTENT
          ================================================= */}

          <div className="relative z-20 pb-2 lg:pb-5">

            {/* Eyebrow */}
            <div className="mb-5 flex items-center gap-3">

              <span className="h-px w-9 bg-gradient-to-r from-transparent to-[#C6A34D]" />

              <p className="text-[9px] font-bold uppercase tracking-[3.5px] text-[#A38332]">
                Velora · Global E-Commerce
              </p>

              <span className="h-1.5 w-1.5 rounded-full bg-[#C9A54B] shadow-[0_0_12px_4px_rgba(201,165,75,0.3)]" />

            </div>

            {/* Heading */}
            <h1 className="max-w-[650px] text-[clamp(48px,5.7vw,80px)] font-medium leading-[0.93] tracking-[-4px] text-[#171717]">

              Everything you want.

              <span className="mt-2 block font-serif italic font-normal tracking-[-2px] text-[#B28A32]">
                All in one place.
              </span>

            </h1>

            {/* Description */}
            <p className="mt-6 max-w-[480px] text-[13px] leading-6 text-[#171717]/60 md:text-[14px]">
              Discover products from different brands and categories,
              brought together into one effortless global shopping
              experience.
            </p>

            {/* =================================================
                CATEGORY LINKS
            ================================================= */}

            <div className="mt-6 flex max-w-[570px] flex-wrap gap-x-4 gap-y-2.5 border-y border-[#171717]/10 py-4">

              {categories.map((category, index) => (
                <div
                  key={category}
                  className="group flex cursor-default items-center gap-1.5 text-[8px] font-semibold uppercase tracking-[1.5px] text-[#171717]/55 transition-colors duration-300 hover:text-[#A78332]"
                >
                  <span className="text-[7px] text-[#C5A04C]">
                    0{index + 1}
                  </span>

                  {category}

                  <FiChevronRight
                    size={10}
                    className="opacity-0 transition-all duration-300 group-hover:translate-x-1 group-hover:opacity-100"
                  />
                </div>
              ))}

            </div>

            {/* =================================================
                CTA
            ================================================= */}

            <div className="mt-6 flex flex-wrap items-center gap-5">

              <Link
                to="/product"
                className="group relative inline-flex items-center gap-4 overflow-hidden rounded-full bg-[#171717] px-6 py-3.5 text-[9px] font-bold uppercase tracking-[2px] text-[#F7F2E8] shadow-[0_10px_30px_rgba(23,23,23,0.15)] transition-all duration-500 hover:-translate-y-1 hover:bg-[#A9873A] hover:shadow-[0_15px_40px_rgba(169,135,58,0.25)]"
              >

                <span>
                  Explore Products
                </span>

                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white/10">

                  <FiArrowUpRight
                    size={13}
                    className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  />

                </span>

                {/* Shine */}
                <span className="absolute inset-y-0 -left-full w-1/3 skew-x-[-20deg] bg-white/20 transition-all duration-700 group-hover:left-[120%]" />

              </Link>

              <a
                href="#story"
                className="text-[9px] font-bold uppercase tracking-[2px] text-[#171717]/50 transition-colors duration-300 hover:text-[#A78332]"
              >
                Discover our story
              </a>

            </div>

          </div>

          {/* =================================================
              RIGHT IMAGE
          ================================================= */}

          <div className="relative mx-auto flex w-full max-w-[720px] justify-center lg:justify-end">

            {/* Glow */}
            <div
              className="absolute right-[5%] top-[12%] h-[390px] w-[390px] rounded-full bg-[#D8B762]/25 blur-[100px]"
              style={{
                animation: "softGlow 6s ease-in-out infinite",
              }}
            />

            {/* Decorative ring */}
            <div className="absolute right-[-20px] top-1/2 h-[370px] w-[370px] -translate-y-1/2 rounded-full border border-[#B79543]/15" />

            {/* =================================================
                IMAGE CARD
            ================================================= */}

            <div
              className="group relative z-10 h-[430px] w-[88%] overflow-hidden rounded-[30px] bg-[#DED5C3] shadow-[0_25px_65px_rgba(60,49,29,0.18)] sm:h-[490px] lg:h-[530px]"
              style={{
                animation: "imageLift 6s ease-in-out infinite",
              }}
            >

              <img
                src={HERO_IMG}
                alt="Velora global shopping"
                className="h-full w-full object-cover object-center transition-transform duration-[1400ms] group-hover:scale-[1.04]"
              />

              {/* Image overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#17130C]/50 via-transparent to-[#FFF5D8]/5" />

              {/* Warm glow */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_20%,rgba(255,226,151,0.25),transparent_28%)]" />

              {/* Moving light */}
              <div
                className="absolute -left-[60%] top-0 h-full w-[35%] skew-x-[-18deg] bg-gradient-to-r from-transparent via-white/25 to-transparent"
                style={{
                  animation: "imageSweep 7s ease-in-out infinite",
                }}
              />

              {/* Image label */}
              <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between">

                <div className="rounded-full border border-white/20 bg-black/20 px-4 py-2.5 backdrop-blur-md">

                  <p className="text-[8px] font-semibold uppercase tracking-[2.5px] text-white/85">
                    Shop globally
                  </p>

                </div>

                <div className="flex h-10 w-10 items-center justify-center rounded-full border border-white/25 bg-white/15 text-white backdrop-blur-xl transition-transform duration-300 group-hover:rotate-45">
                  <FiArrowUpRight size={16} />
                </div>

              </div>

            </div>

            {/* =================================================
                FLOATING CARD
            ================================================= */}

            <div
              className="absolute left-[-5px] top-[12%] z-20 rounded-2xl border border-white/70 bg-[#F8F4EA]/90 px-4 py-3 shadow-[0_15px_40px_rgba(45,37,22,0.13)] backdrop-blur-xl sm:left-[-20px]"
              style={{
                animation: "floatCard 5s ease-in-out infinite",
              }}
            >

              <p className="text-[7px] uppercase tracking-[2px] text-[#171717]/40">
                Discover
              </p>

              <p className="mt-1 text-[11px] font-semibold text-[#171717]">
                Something for everyone
              </p>

              <div className="mt-2.5 flex items-center gap-1">

                <span className="h-1 w-7 rounded-full bg-[#C7A550]" />
                <span className="h-1 w-3 rounded-full bg-[#171717]/10" />
                <span className="h-1 w-2 rounded-full bg-[#171717]/10" />

              </div>

            </div>

            {/* =================================================
                CATEGORY CARD
            ================================================= */}

            <div
              className="absolute bottom-[5%] right-[-5px] z-20 rounded-2xl border border-white/70 bg-white/85 px-4 py-3 shadow-[0_18px_45px_rgba(45,37,22,0.15)] backdrop-blur-xl sm:right-[-20px]"
              style={{
                animation: "floatCardReverse 6s ease-in-out infinite",
              }}
            >

              <div className="flex items-center gap-3">

                <div className="h-9 w-9 rounded-full bg-[#EEE3C9] p-1">

                  <div className="flex h-full w-full items-center justify-center rounded-full bg-[#D2B365] text-[8px] font-bold text-white">
                    10+
                  </div>

                </div>

                <div>

                  <p className="text-[7px] uppercase tracking-[2px] text-[#171717]/35">
                    Categories
                  </p>

                  <p className="mt-0.5 text-[11px] font-semibold text-[#171717]">
                    One destination
                  </p>

                </div>

              </div>

            </div>

          </div>
        </div>

      </div>

      {/* =====================================================
          ANIMATIONS
      ===================================================== */}

      <style>
        {`
          @keyframes softGlow {
            0%, 100% {
              transform: scale(1);
              opacity: .65;
            }

            50% {
              transform: scale(1.12);
              opacity: 1;
            }
          }

          @keyframes imageLift {
            0%, 100% {
              transform: translateY(0);
            }

            50% {
              transform: translateY(-6px);
            }
          }

          @keyframes floatCard {
            0%, 100% {
              transform: translateY(0);
            }

            50% {
              transform: translateY(-9px);
            }
          }

          @keyframes floatCardReverse {
            0%, 100% {
              transform: translateY(0);
            }

            50% {
              transform: translateY(8px);
            }
          }

          @keyframes imageSweep {
            0% {
              left: -60%;
            }

            45%, 100% {
              left: 130%;
            }
          }
        `}
      </style>

    </section>
  );
};

export default AboutHero;

