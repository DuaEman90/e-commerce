import React, { useRef, useEffect, useState } from "react";
import { ArrowUpRight, Sparkles, Heart, Star, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";

/* ── images ── */
const HERO_IMG   = "https://images.pexels.com/photos/12606875/pexels-photo-12606875.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200";
const BRAND_IMG  = "https://images.pexels.com/photos/7256108/pexels-photo-7256108.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200";
const BANNER_IMG = "https://images.pexels.com/photos/9620358/pexels-photo-9620358.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200";

const values = [
  {
    icon: Sparkles,
    num: "01",
    title: "Thoughtfully Curated",
    text: "Every piece is selected with attention to beauty, quality and everyday usefulness — nothing is here by accident.",
  },
  {
    icon: Heart,
    num: "02",
    title: "Made to Feel Good",
    text: "We believe the little things around you should add comfort, character and quiet joy to your everyday life.",
  },
  {
    icon: Star,
    num: "03",
    title: "Simple & Timeless",
    text: "Clean aesthetics and enduring choices that feel considered, never excessive and never ordinary.",
  },
];

const stats = [
  { value: "100%", label: "Curated" },
  { value: "01", label: "Vision" },
  { value: "∞", label: "Inspiration" },
];

/* ── fade-in hook ── */
const useFadeIn = () => {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold: 0.15 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return [ref, visible];
};

/* ── reusable fade wrapper ── */
const Fade = ({ children, delay = 0, className = "" }) => {
  const [ref, visible] = useFadeIn();
  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`transition-all duration-700 ease-out ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      } ${className}`}
    >
      {children}
    </div>
  );
};

const About = () => {
  return (
    <div className="bg-[#FAF9F6] text-[#171717] overflow-hidden">

      {/* ══════════════════ HERO ══════════════════ */}
      <div className="relative h-screen min-h-[680px] flex items-end overflow-hidden">

        <img
          src={HERO_IMG}
          alt="Velora lifestyle"
          className="absolute inset-0 w-full h-full object-cover scale-[1.03] transition-transform duration-[8s] ease-out"
          style={{ animation: "heroZoom 8s ease-out forwards" }}
        />

        {/* layered overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0d0c0a]/80 via-[#0d0c0a]/30 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0d0c0a]/40 to-transparent" />

        <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 lg:px-10 pb-20 md:pb-28">

          <p className="flex items-center gap-3 text-[#C9A45C] uppercase tracking-[4px] text-[10px] font-semibold mb-7 animate-[fadeUp_0.8s_0.3s_both]">
            <span className="w-10 h-px bg-[#C9A45C]" />
            Velora · Est. with Intention
          </p>

          <h1 className="text-[clamp(52px,9vw,110px)] font-light leading-[0.88] tracking-[-3px] text-white animate-[fadeUp_0.8s_0.5s_both]">
            Beautifully
            <br />
            <em className="font-serif not-italic text-[#C9A45C]">
              considered.
            </em>
          </h1>

          <p className="mt-8 max-w-lg text-sm md:text-base leading-7 text-white/75 animate-[fadeUp_0.8s_0.7s_both]">
            A modern lifestyle collection built around thoughtful choices,
            timeless beauty and the quiet details that make everyday life
            feel a little more special.
          </p>

          <div className="flex flex-wrap items-center gap-4 mt-10 animate-[fadeUp_0.8s_0.9s_both]">
            <Link
              to="/product"
              className="group inline-flex items-center gap-2 bg-[#C9A45C] text-[#171717] px-7 py-3.5 text-[11px] uppercase tracking-[2px] font-semibold transition-all duration-300 hover:bg-white hover:-translate-y-0.5"
            >
              Explore Collection
              <ArrowUpRight size={14} strokeWidth={2} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>

            <a
              href="#story"
              className="group inline-flex items-center gap-2 border border-white/30 text-white px-7 py-3.5 text-[11px] uppercase tracking-[2px] transition-all duration-300 hover:border-[#C9A45C] hover:text-[#C9A45C] hover:-translate-y-0.5"
            >
              Our Story
              <ChevronDown size={14} strokeWidth={1.5} className="transition-transform duration-300 group-hover:translate-y-0.5" />
            </a>
          </div>
        </div>

        {/* scroll hint */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 animate-bounce">
          <div className="w-px h-10 bg-gradient-to-b from-white/0 to-white/40" />
          <ChevronDown size={14} strokeWidth={1.5} className="text-white/50" />
        </div>

      </div>

      {/* ══════════════════ MARQUEE ══════════════════ */}
      <div className="border-y border-[#E4DDD2] bg-white overflow-hidden py-4">
        <div
          className="flex gap-12 whitespace-nowrap"
          style={{ animation: "marquee 22s linear infinite" }}
        >
          {Array.from({ length: 2 }).map((_, gi) =>
            ["Thoughtfully Curated", "Modern Living", "Timeless Design", "Effortless Elegance", "Beautifully Considered", "Velora Collection"].map((t, i) => (
              <span key={`${gi}-${i}`} className="inline-flex items-center gap-5 text-[10px] uppercase tracking-[3px] text-[#AAA59D]">
                {t}
                <span className="w-1 h-1 rounded-full bg-[#C9A45C] shrink-0" />
              </span>
            ))
          )}
        </div>
      </div>

      {/* ══════════════════ STORY ══════════════════ */}
      <div id="story" className="max-w-[1400px] mx-auto px-6 lg:px-10 py-24 md:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

          {/* image side */}
          <Fade>
            <div className="relative">

              {/* thin gold frame offset */}
              <div className="absolute -top-4 -left-4 w-2/3 h-2/3 border border-[#C9A45C]/30 z-0" />

              <div className="relative z-10 aspect-[4/5] overflow-hidden bg-[#EEE9E1]">
                <img
                  src={BRAND_IMG}
                  alt="Velora collection"
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                />
                {/* bottom caption card */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#171717]/70 to-transparent p-7">
                  <p className="text-[9px] uppercase tracking-[3px] text-[#C9A45C]">Velora</p>
                  <p className="mt-1 text-base font-light text-white">by Dua Eman</p>
                </div>
              </div>

              {/* floating stat pill */}
              <div className="absolute -bottom-6 -right-4 md:right-0 bg-[#171717] text-white px-7 py-5 shadow-xl z-20">
                <p className="text-3xl font-light text-[#C9A45C]">100%</p>
                <p className="text-[9px] uppercase tracking-[2px] text-white/60 mt-1">Curated with care</p>
              </div>

            </div>
          </Fade>

          {/* text side */}
          <div className="space-y-0">

            <Fade delay={100}>
              <p className="text-[#C9A45C] uppercase tracking-[3px] text-[10px] font-semibold">
                The Story
              </p>
            </Fade>

            <Fade delay={200}>
              <h2 className="mt-5 text-[clamp(36px,5vw,60px)] font-light leading-[1.05] tracking-[-1px]">
                More than
                <br />
                <em className="font-serif not-italic text-[#C9A45C]">a collection.</em>
              </h2>
            </Fade>

            <Fade delay={300}>
              <div className="mt-8 space-y-5 text-[15px] leading-8 text-[#77736D]">
                <p>
                  Velora began with a simple idea — that everyday products can be
                  useful, beautiful and thoughtfully chosen at the same time.
                </p>
                <p>
                  Created by{" "}
                  <span className="text-[#171717] font-medium">Dua Eman</span>,
                  Velora brings together a carefully selected collection inspired
                  by modern living, clean aesthetics and timeless style.
                </p>
                <p>
                  From everyday essentials to lifestyle pieces, everything is
                  chosen with the intention of making your surroundings feel a
                  little more like you.
                </p>
              </div>
            </Fade>

            <Fade delay={400}>
              {/* stats row */}
              <div className="mt-10 pt-8 border-t border-[#E4DDD2] grid grid-cols-3 divide-x divide-[#E4DDD2]">
                {stats.map((s) => (
                  <div key={s.label} className="px-6 first:pl-0">
                    <p className="text-4xl font-light text-[#171717]">{s.value}</p>
                    <p className="mt-2 text-[9px] uppercase tracking-[2px] text-[#AAA59D]">{s.label}</p>
                  </div>
                ))}
              </div>
            </Fade>

          </div>
        </div>
      </div>

      {/* ══════════════════ VALUES ══════════════════ */}
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10 py-24 md:py-32">

        <Fade>
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="text-[#C9A45C] uppercase tracking-[3px] text-[10px] font-semibold">
              What We Believe
            </p>
            <h2 className="mt-5 text-[clamp(32px,4vw,52px)] font-light leading-tight">
              Our values,{" "}
              <em className="font-serif not-italic text-[#C9A45C]">simply.</em>
            </h2>
            <p className="mt-5 text-sm leading-7 text-[#77736D]">
              The philosophy behind everything we choose and everything we create.
            </p>
          </div>
        </Fade>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {values.map((v, i) => {
            const Icon = v.icon;
            return (
              <Fade key={v.num} delay={i * 120}>
                <div className="group relative bg-white border border-[#E8E2D9] p-10 overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:border-[#C9A45C] hover:shadow-[0_20px_50px_rgba(181,139,69,0.13)]">

                  {/* bg number watermark */}
                  <span className="absolute top-4 right-5 text-[80px] font-bold leading-none text-[#F3EFE8] select-none pointer-events-none transition-colors duration-300 group-hover:text-[#EDE5D5]">
                    {v.num}
                  </span>

                  <Icon size={22} strokeWidth={1.4} className="text-[#C9A45C] mb-8 transition-transform duration-300 group-hover:scale-110" />

                  <h3 className="text-[17px] font-semibold text-[#171717] leading-snug">
                    {v.title}
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-[#88837B]">
                    {v.text}
                  </p>

                  <div className="mt-8 w-8 h-[2px] bg-[#C9A45C] transition-all duration-500 group-hover:w-16" />

                </div>
              </Fade>
            );
          })}
        </div>
      </div>

      {/* ══════════════════ BANNER ══════════════════ */}
      

      {/* ══════════════════ FINAL CTA ══════════════════ */}
      <div className="py-28 md:py-36 text-center px-6">
        <Fade>
          <p className="text-[#C9A45C] uppercase tracking-[4px] text-[10px] font-semibold mb-6">
            Discover Velora
          </p>
          <h2 className="text-[clamp(36px,5vw,68px)] font-light leading-[1.05] tracking-[-2px]">
            Find something
            <br />
            <em className="font-serif not-italic text-[#C9A45C]">beautifully you.</em>
          </h2>
          <p className="mt-6 max-w-md mx-auto text-sm leading-7 text-[#77736D]">
            Browse our full collection and discover pieces made for the way you live.
          </p>
          <Link
            to="/product"
            className="group mt-10 inline-flex items-center gap-3 bg-[#171717] text-white px-9 py-4 text-[11px] uppercase tracking-[2px] transition-all duration-300 hover:bg-[#B58B45] hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(181,139,69,0.35)]"
          >
            Shop Velora
            <ArrowUpRight size={15} strokeWidth={1.7} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </Fade>
      </div>

      {/* ══════════════════ KEYFRAMES ══════════════════ */}
      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(28px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes heroZoom {
          from { transform: scale(1.06); }
          to   { transform: scale(1); }
        }
        @keyframes marquee {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
        @keyframes parallax {
          from { transform: scale(1.08) translateY(-2%); }
          to   { transform: scale(1.08) translateY(2%); }
        }
      `}</style>

    </div>
  );
};

export default About;

