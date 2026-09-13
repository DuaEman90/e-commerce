import React from "react";

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