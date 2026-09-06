
import React from "react";
import { FiArrowUpRight, FiChevronDown } from "react-icons/fi";
import { Link } from "react-router-dom";

const HERO_IMG =
  "https://images.pexels.com/photos/12606875/pexels-photo-12606875.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200";

const AboutHero = () => {
  return (
    <section className="relative h-screen min-h-[680px] flex items-end overflow-hidden">
      <img
        src={HERO_IMG}
        alt="Velora global product collection"
        className="absolute inset-0 w-full h-full object-cover scale-[1.03]"
        style={{ animation: "heroZoom 8s ease-out forwards" }}
      />

      <div className="absolute inset-0 bg-gradient-to-t from-[#0d0c0a]/80 via-[#0d0c0a]/30 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#0d0c0a]/40 to-transparent" />

      <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 lg:px-10 pb-20 md:pb-28">
        <p className="flex items-center gap-3 text-[#C9A45C] uppercase tracking-[4px] text-[10px] font-semibold mb-7 animate-[fadeUp_0.8s_0.3s_both]">
          <span className="w-10 h-px bg-[#C9A45C]" />
          Velora · Global E-Commerce
        </p>

        <h1 className="text-[clamp(52px,9vw,110px)] font-light leading-[0.88] tracking-[-3px] text-white animate-[fadeUp_0.8s_0.5s_both]">
          Everything you want,
          <br />
          <em className="font-serif not-italic text-[#C9A45C]">
            one destination.
          </em>
        </h1>

        <p className="mt-8 max-w-lg text-sm md:text-base leading-7 text-white/75 animate-[fadeUp_0.8s_0.7s_both]">
          Discover products from different brands and categories — from
          fashion and beauty to electronics, furniture, groceries and
          everyday essentials.
        </p>

        <div className="flex flex-wrap items-center gap-4 mt-10 animate-[fadeUp_0.8s_0.9s_both]">
          <Link
            to="/product"
            className="group inline-flex items-center gap-2 bg-[#C9A45C] text-[#171717] px-7 py-3.5 text-[11px] uppercase tracking-[2px] font-semibold transition-all duration-300 hover:bg-white hover:-translate-y-0.5"
          >
            Explore Products
            <FiArrowUpRight
              size={14}
              className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </Link>

          <a
            href="#story"
            className="group inline-flex items-center gap-2 border border-white/30 text-white px-7 py-3.5 text-[11px] uppercase tracking-[2px] transition-all duration-300 hover:border-[#C9A45C] hover:text-[#C9A45C] hover:-translate-y-0.5"
          >
            Why Velora
            <FiChevronDown
              size={14}
              className="transition-transform duration-300 group-hover:translate-y-0.5"
            />
          </a>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 animate-bounce">
        <div className="w-px h-10 bg-gradient-to-b from-white/0 to-white/40" />
        <FiChevronDown size={14} className="text-white/50" />
      </div>
    </section>
  );
};

export default AboutHero;

