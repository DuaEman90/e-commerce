import React from "react";
import { Link } from "react-router-dom";
import {
  FiArrowUpRight,
  FiMail,
  FiInstagram,
  FiFacebook,
  FiTwitter,
} from "react-icons/fi";

const Footer = () => {
  return (
    <footer className="bg-[#171717] text-white">

      {/* ================= TOP STATEMENT ================= */}
      <div className="border-b border-[#30302E]">
        <div className="mx-auto max-w-[1400px] px-6 py-8 lg:px-10">
          <div className="flex flex-col items-start justify-between gap-5 sm:flex-row sm:items-center">

            <div>
              <p className="mb-2 text-[9px] font-semibold uppercase tracking-[3px] text-[#C9A45C]">
                The Velora Edit
              </p>

              <h2 className="font-serif text-2xl font-light leading-tight text-[#F5F2EC] md:text-3xl">
                Designed for the{" "}
                <span className="italic text-[#C9A45C]">
                  beautifully
                </span>{" "}
                curated life.
              </h2>
            </div>

            <Link
              to="/product"
              className="group flex shrink-0 items-center gap-3 text-[10px] font-medium uppercase tracking-[1.7px] text-[#D8D4CC] transition-all duration-300 hover:text-[#C9A45C]"
            >
              Explore Collection

              <span className="flex h-8 w-8 items-center justify-center border border-[#4A4844] transition-all duration-300 group-hover:-translate-y-0.5 group-hover:border-[#C9A45C]">
                <FiArrowUpRight
                  size={14}
                  strokeWidth={1.4}
                  className="transition-transform duration-300 group-hover:rotate-12"
                />
              </span>
            </Link>

          </div>
        </div>
      </div>

      {/* ================= MAIN FOOTER ================= */}
      <div className="mx-auto max-w-[1400px] px-6 py-10 lg:px-10">

        <div className="grid grid-cols-2 gap-x-8 gap-y-9 md:grid-cols-4 lg:grid-cols-5">

          {/* ================= BRAND ================= */}
          <div className="col-span-2 md:col-span-2 lg:col-span-2">

            <Link to="/" className="inline-block">
              <img
                src="logoo.jpeg"
                alt="VELORA"
                className="h-9 w-auto object-contain transition-transform duration-300 hover:scale-[1.02]"
              />
            </Link>

            <p className="mt-4 max-w-sm text-xs leading-6 text-[#918D86]">
              A thoughtfully curated collection of products made for
              modern living, effortless elegance and everyday moments
              worth remembering.
            </p>

            {/* Social */}
            <div className="mt-5 flex items-center gap-2">

              <a
                href="#"
                aria-label="Instagram"
                className="flex h-8 w-8 items-center justify-center border border-[#383734] text-[#AAA59D] transition-all duration-300 hover:border-[#C9A45C] hover:bg-[#C9A45C] hover:text-white"
              >
                <FiInstagram size={14} strokeWidth={1.5} />
              </a>

              <a
                href="#"
                aria-label="Facebook"
                className="flex h-8 w-8 items-center justify-center border border-[#383734] text-[#AAA59D] transition-all duration-300 hover:border-[#C9A45C] hover:bg-[#C9A45C] hover:text-white"
              >
                <FiFacebook size={14} strokeWidth={1.5} />
              </a>

              <a
                href="#"
                aria-label="Twitter"
                className="flex h-8 w-8 items-center justify-center border border-[#383734] text-[#AAA59D] transition-all duration-300 hover:border-[#C9A45C] hover:bg-[#C9A45C] hover:text-white"
              >
                <FiTwitter size={14} strokeWidth={1.5} />
              </a>

            </div>
          </div>

          {/* ================= SHOP ================= */}
          <div>
            <h3 className="mb-4 text-[10px] font-semibold uppercase tracking-[2px] text-[#C9A45C]">
              Shop
            </h3>

            <div className="flex flex-col gap-2.5">
              <Link
                to="/product"
                className="w-fit text-xs text-[#918D86] transition-all duration-300 hover:translate-x-1 hover:text-white"
              >
                All Products
              </Link>

              <Link
                to="/product"
                className="w-fit text-xs text-[#918D86] transition-all duration-300 hover:translate-x-1 hover:text-white"
              >
                New Arrivals
              </Link>

              <Link
                to="/product"
                className="w-fit text-xs text-[#918D86] transition-all duration-300 hover:translate-x-1 hover:text-white"
              >
                Best Sellers
              </Link>

              <Link
                to="/product"
                className="w-fit text-xs text-[#918D86] transition-all duration-300 hover:translate-x-1 hover:text-white"
              >
                Collections
              </Link>
            </div>
          </div>

          {/* ================= COMPANY ================= */}
          <div>
            <h3 className="mb-4 text-[10px] font-semibold uppercase tracking-[2px] text-[#C9A45C]">
              Company
            </h3>

            <div className="flex flex-col gap-2.5">
              <Link
                to="/about"
                className="w-fit text-xs text-[#918D86] transition-all duration-300 hover:translate-x-1 hover:text-white"
              >
                About Velora
              </Link>

              <Link
                to="/contact"
                className="w-fit text-xs text-[#918D86] transition-all duration-300 hover:translate-x-1 hover:text-white"
              >
                Contact
              </Link>

              <a
                href="#"
                className="w-fit text-xs text-[#918D86] transition-all duration-300 hover:translate-x-1 hover:text-white"
              >
                Shipping
              </a>

              <a
                href="#"
                className="w-fit text-xs text-[#918D86] transition-all duration-300 hover:translate-x-1 hover:text-white"
              >
                Returns
              </a>
            </div>
          </div>

          {/* ================= NEWSLETTER ================= */}
          <div className="col-span-2 md:col-span-2 lg:col-span-1">

            <h3 className="mb-4 text-[10px] font-semibold uppercase tracking-[2px] text-[#C9A45C]">
              Stay in the know
            </h3>

            <p className="mb-4 max-w-xs text-xs leading-5 text-[#918D86]">
              Be the first to discover new collections, thoughtful
              updates and exclusive Velora offers.
            </p>

            <div className="group relative flex items-center border-b border-[#45433F] transition-colors duration-300 focus-within:border-[#C9A45C]">

              <FiMail
                size={14}
                strokeWidth={1.4}
                className="mr-2 shrink-0 text-[#77736D]"
              />

              <input
                type="email"
                placeholder="Email address"
                className="w-full bg-transparent py-2 text-xs text-white outline-none placeholder:text-[#77736D]"
              />

              <button
                aria-label="Subscribe"
                className="flex h-7 w-7 shrink-0 items-center justify-center text-[#C9A45C] transition-all duration-300 hover:-translate-y-0.5 hover:text-white"
              >
                <FiArrowUpRight size={15} strokeWidth={1.4} />
              </button>

            </div>
          </div>
        </div>

        {/* ================= BOTTOM ================= */}
        <div className="mt-9 flex flex-col items-center justify-between gap-3 border-t border-[#30302E] pt-5 sm:flex-row">

          <p className="text-[10px] tracking-wide text-[#6F6C67]">
            © 2026 VELORA. All rights reserved.
          </p>

          <div className="flex items-center gap-5">

            <a
              href="#"
              className="text-[10px] text-[#6F6C67] transition-colors duration-300 hover:text-[#C9A45C]"
            >
              Privacy
            </a>

            <a
              href="#"
              className="text-[10px] text-[#6F6C67] transition-colors duration-300 hover:text-[#C9A45C]"
            >
              Terms
            </a>

            <span className="hidden h-3 w-px bg-[#3A3936] sm:block" />

            <span className="hidden text-[10px] text-[#6F6C67] sm:block">
              Crafted with intention.
            </span>

          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;