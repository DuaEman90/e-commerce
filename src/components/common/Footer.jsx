import React from "react";
import { Link } from "react-router-dom";

import {
  FaInstagram,
  FaFacebookF,
  FaXTwitter,
} from "react-icons/fa6";

import { FiArrowUpRight } from "react-icons/fi";

const Footer = () => {
  return (
    <footer className="relative overflow-hidden border-t border-[#C7A550]/15 bg-[#000000] text-white">

      {/* ================= PREMIUM AMBIENT GLOWS ================= */}

      {/* Left Glow */}
      <div className="pointer-events-none absolute -left-36 -top-36 h-80 w-80 rounded-full bg-[#C7A550]/[0.07] blur-[120px]" />

      {/* Right Glow */}
      <div
        className="pointer-events-none absolute -right-32 -bottom-36 h-96 w-96 rounded-full bg-[#E7C77B]/[0.07] blur-[130px]"
        style={{
          animation: "veloraGlow 7s ease-in-out infinite",
        }}
      />

      {/* Center Glow */}
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 h-52 w-52 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#C7A550]/[0.025] blur-[100px]"
        style={{
          animation: "centerGlow 5s ease-in-out infinite",
        }}
      />

      {/* ================= MAIN FOOTER ================= */}

      <div className="relative z-10 mx-auto max-w-[1400px] px-6 py-9 sm:px-8 lg:px-12">

        {/* Top Accent */}
        <div className="mb-7 flex items-center gap-3">
          <span className="h-px w-10 bg-[#C7A550]/80 shadow-[0_0_10px_rgba(199,165,80,0.45)]" />

          <span className="text-[9px] font-semibold uppercase tracking-[3px] text-[#C7A550]">
            Global Brands · One Destination
          </span>
        </div>

        {/* Main Content */}
        <div className="grid gap-8 md:grid-cols-[1.7fr_0.8fr_1.2fr] md:items-start">

          {/* ================= BRAND ================= */}

          <div>
            <Link to="/" className="inline-block">
              <img
                src="/logo.jpeg"
                alt="VELORA"
                className="h-14 w-auto max-w-[230px] object-contain object-left opacity-95 transition duration-300 hover:scale-[1.03] hover:drop-shadow-[0_0_16px_rgba(199,165,80,0.3)]"
              />
            </Link>

            <p className="mt-3 max-w-[360px] text-[12px] leading-5 text-[#85817A]">
              A global multi-brand shopping destination bringing beauty,
              fashion, technology, home, and everyday essentials together.
            </p>
          </div>

          {/* ================= NAVIGATION ================= */}

          <div>
            <p className="mb-3 text-[9px] font-bold uppercase tracking-[2.5px] text-[#C7A550]">
              Navigate
            </p>

            <div className="grid grid-cols-2 gap-x-6 gap-y-2">
              {[
                ["Home", "/"],
                ["About", "/about"],
                ["Products", "/product"],
                ["Contact", "/contact"],
              ].map(([label, path]) => (
                <Link
                  key={label}
                  to={path}
                  className="group flex w-fit items-center gap-1 text-[11px] text-[#85817A] transition-all duration-300 hover:translate-x-0.5 hover:text-[#E7C77B]"
                >
                  {label}

                  <FiArrowUpRight
                    size={10}
                    className="opacity-0 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:opacity-100"
                  />
                </Link>
              ))}
            </div>
          </div>

          {/* ================= DISCOVER ================= */}

          <div className="md:justify-self-end">

            <p className="mb-2 text-[9px] font-bold uppercase tracking-[2.5px] text-[#C7A550]">
              Discover More
            </p>

            <div className="flex flex-wrap items-center gap-3">

              {/* CTA */}
              <Link
                to="/product"
                className="group inline-flex items-center gap-2 rounded-full border border-[#C7A550]/40 bg-[#C7A550]/[0.07] px-4 py-2 text-[9px] font-bold uppercase tracking-[1.6px] text-[#D9BD7D] transition-all duration-300 hover:border-[#C7A550] hover:bg-[#C7A550] hover:text-[#000000] hover:shadow-[0_0_28px_rgba(199,165,80,0.3)]"
              >
                Explore Products

                <FiArrowUpRight
                  size={12}
                  className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </Link>

              {/* Social Icons */}
              <div className="flex items-center gap-1.5">

                {/* Instagram */}
                <a
                  href="#"
                  aria-label="Instagram"
                  className="group flex h-7 w-7 items-center justify-center rounded-full border border-white/[0.08] bg-white/[0.015] text-[#77736C] transition-all duration-300 hover:border-[#C7A550]/70 hover:bg-[#C7A550] hover:text-[#000000] hover:shadow-[0_0_18px_rgba(199,165,80,0.3)]"
                >
                  <FaInstagram
                    size={11}
                    className="transition-transform duration-300 group-hover:scale-110"
                  />
                </a>

                {/* Facebook */}
                <a
                  href="#"
                  aria-label="Facebook"
                  className="group flex h-7 w-7 items-center justify-center rounded-full border border-white/[0.08] bg-white/[0.015] text-[#77736C] transition-all duration-300 hover:border-[#C7A550]/70 hover:bg-[#C7A550] hover:text-[#000000] hover:shadow-[0_0_18px_rgba(199,165,80,0.3)]"
                >
                  <FaFacebookF
                    size={10}
                    className="transition-transform duration-300 group-hover:scale-110"
                  />
                </a>

                {/* X */}
                <a
                  href="#"
                  aria-label="X"
                  className="group flex h-7 w-7 items-center justify-center rounded-full border border-white/[0.08] bg-white/[0.015] text-[#77736C] transition-all duration-300 hover:border-[#C7A550]/70 hover:bg-[#C7A550] hover:text-[#000000] hover:shadow-[0_0_18px_rgba(199,165,80,0.3)]"
                >
                  <FaXTwitter
                    size={10}
                    className="transition-transform duration-300 group-hover:scale-110"
                  />
                </a>

              </div>
            </div>
          </div>
        </div>

        {/* ================= PREMIUM DIVIDER ================= */}

        <div className="relative my-7 h-px bg-gradient-to-r from-transparent via-[#C7A550]/25 to-transparent">

          <span
            className="absolute left-1/2 top-1/2 h-px w-24 -translate-x-1/2 -translate-y-1/2 bg-[#C7A550]/60 blur-[1px]"
            style={{
              animation: "dividerPulse 3s ease-in-out infinite",
            }}
          />

          <span className="absolute left-1/2 top-1/2 h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#C7A550] shadow-[0_0_12px_3px_rgba(199,165,80,0.4)]" />
        </div>

        {/* ================= BOTTOM ================= */}

        <div className="flex flex-col gap-2.5 text-[8px] uppercase tracking-[1.8px] sm:flex-row sm:items-center sm:justify-between">

          <span className="text-[#55514C]">
            © 2026 Velora
          </span>

          <span className="text-[#6C6861]">
            Global Brands
            <span className="mx-2 text-[#C7A550]">·</span>
            One Destination
          </span>

          <span className="text-[#55514C]">
            Curated globally
          </span>

        </div>
      </div>

      {/* ================= ANIMATIONS ================= */}

      <style>
        {`
          @keyframes veloraGlow {
            0%,
            100% {
              transform: scale(0.9);
              opacity: 0.4;
            }

            50% {
              transform: scale(1.12);
              opacity: 0.8;
            }
          }

          @keyframes centerGlow {
            0%,
            100% {
              transform: translate(-50%, -50%) scale(0.85);
              opacity: 0.3;
            }

            50% {
              transform: translate(-50%, -50%) scale(1.15);
              opacity: 0.7;
            }
          }

          @keyframes dividerPulse {
            0%,
            100% {
              width: 60px;
              opacity: 0.25;
            }

            50% {
              width: 120px;
              opacity: 0.8;
            }
          }
        `}
      </style>

    </footer>
  );
};

export default Footer;