
import React from "react";
import { FiArrowUpRight } from "react-icons/fi";
import { Link } from "react-router-dom";

import AboutHero from "../components/about/AboutHero";
import AboutStory from "../components/about/AboutStory";
import AboutValues from "../components/about/AboutValues";

const About = () => {
  return (
    <main className="bg-[#FAF9F6] text-[#171717] overflow-hidden">
      <AboutHero />

      {/* Marquee */}
      <div className="border-y border-[#E4DDD2] bg-white overflow-hidden py-4">
        <div
          className="flex gap-12 whitespace-nowrap"
          style={{ animation: "marquee 22s linear infinite" }}
        >
          {Array.from({ length: 2 }).map((_, groupIndex) =>
            [
              "Global Selection",
              "Fashion",
              "Beauty",
              "Electronics",
              "Furniture",
              "Groceries",
              "Everyday Essentials",
            ].map((text, index) => (
              <span
                key={`${groupIndex}-${index}`}
                className="inline-flex items-center gap-5 text-[10px] uppercase tracking-[3px] text-[#AAA59D]"
              >
                {text}
                <span className="w-1 h-1 rounded-full bg-[#C9A45C] shrink-0" />
              </span>
            ))
          )}
        </div>
      </div>

      <AboutStory />

      <AboutValues />

      {/* Final CTA */}
      <section className="py-28 md:py-36 text-center px-6">
        <p className="text-[#C9A45C] uppercase tracking-[4px] text-[10px] font-semibold mb-6">
          Discover Velora
        </p>

        <h2 className="text-[clamp(36px,5vw,68px)] font-light leading-[1.05] tracking-[-2px]">
          Explore more,
          <br />
          <em className="font-serif not-italic text-[#C9A45C]">
            discover more.
          </em>
        </h2>

        <p className="mt-6 max-w-md mx-auto text-sm leading-7 text-[#77736D]">
          Browse products across multiple categories and discover something
          that fits your needs.
        </p>

        <Link
          to="/product"
          className="group mt-10 inline-flex items-center gap-3 bg-[#171717] text-white px-9 py-4 text-[11px] uppercase tracking-[2px] transition-all duration-300 hover:bg-[#B58B45] hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(181,139,69,0.35)]"
        >
          Explore Products
          <FiArrowUpRight
            size={15}
            className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          />
        </Link>
      </section>

      <style>{`
        @keyframes fadeUp {
          from {
            opacity: 0;
            transform: translateY(28px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes heroZoom {
          from {
            transform: scale(1.06);
          }
          to {
            transform: scale(1);
          }
        }

        @keyframes marquee {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </main>
  );
};

export default About;

