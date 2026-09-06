
import React from "react";
import { FiGlobe, FiGrid, FiShoppingBag } from "react-icons/fi";

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
    <section className="max-w-[1400px] mx-auto px-6 lg:px-10 py-24 md:py-32">
      <div className="text-center max-w-2xl mx-auto mb-16">
        <p className="text-[#C9A45C] uppercase tracking-[3px] text-[10px] font-semibold">
          What Makes Velora Different
        </p>

        <h2 className="mt-5 text-[clamp(32px,4vw,52px)] font-light leading-tight">
          Our purpose,{" "}
          <em className="font-serif not-italic text-[#C9A45C]">
            simply.
          </em>
        </h2>

        <p className="mt-5 text-sm leading-7 text-[#77736D]">
          A modern approach to discovering products from different categories
          and brands, all in one destination.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {values.map((value) => {
          const Icon = value.icon;

          return (
            <div
              key={value.num}
              className="group relative bg-white border border-[#E8E2D9] p-10 overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:border-[#C9A45C] hover:shadow-[0_20px_50px_rgba(181,139,69,0.13)]"
            >
              <span className="absolute top-4 right-5 text-[80px] font-bold leading-none text-[#F3EFE8] select-none pointer-events-none group-hover:text-[#EDE5D5]">
                {value.num}
              </span>

              <Icon
                size={22}
                strokeWidth={1.4}
                className="text-[#C9A45C] mb-8 transition-transform duration-300 group-hover:scale-110"
              />

              <h3 className="text-[17px] font-semibold text-[#171717] leading-snug">
                {value.title}
              </h3>

              <p className="mt-4 text-sm leading-7 text-[#88837B]">
                {value.text}
              </p>

              <div className="mt-8 w-8 h-[2px] bg-[#C9A45C] transition-all duration-500 group-hover:w-16" />
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default AboutValues;

