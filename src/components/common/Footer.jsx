import React from "react";
import { Link } from "react-router-dom";
import {
  Instagram,
  Facebook,
  Twitter,
  Mail,
  ArrowUpRight,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#171717] text-white">

      <div className="max-w-7xl mx-auto px-6 md:px-10 pt-16 pb-8">

        {/* Main Footer */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16">

          {/* Brand */}
          <div className="lg:pr-8">

            <Link
              to="/"
              className="inline-flex items-center transition-transform duration-300 hover:-translate-y-1"
            >
              <img
                src="/images/velora-logo.png"
                alt="Velora"
                className="h-12 w-auto object-contain"
              />
            </Link>

            <p className="mt-6 text-sm leading-7 text-[#AAA59D] max-w-xs">
              Thoughtfully curated products designed to bring elegance,
              comfort, and style into your everyday life.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-3 mt-7">

              <a
                href="#"
                aria-label="Instagram"
                className="w-10 h-10 rounded-full border border-[#3A3937] flex items-center justify-center text-[#AAA59D] transition-all duration-300 hover:bg-[#C9A45C] hover:text-[#171717] hover:border-[#C9A45C] hover:-translate-y-1"
              >
                <Instagram size={17} strokeWidth={1.7} />
              </a>

              <a
                href="#"
                aria-label="Facebook"
                className="w-10 h-10 rounded-full border border-[#3A3937] flex items-center justify-center text-[#AAA59D] transition-all duration-300 hover:bg-[#C9A45C] hover:text-[#171717] hover:border-[#C9A45C] hover:-translate-y-1"
              >
                <Facebook size={17} strokeWidth={1.7} />
              </a>

              <a
                href="#"
                aria-label="Twitter"
                className="w-10 h-10 rounded-full border border-[#3A3937] flex items-center justify-center text-[#AAA59D] transition-all duration-300 hover:bg-[#C9A45C] hover:text-[#171717] hover:border-[#C9A45C] hover:-translate-y-1"
              >
                <Twitter size={17} strokeWidth={1.7} />
              </a>

            </div>
          </div>

          {/* Explore */}
          <div>
            <h3 className="text-[12px] uppercase tracking-[2.5px] font-semibold text-[#C9A45C] mb-6">
              Explore
            </h3>

            <div className="flex flex-col gap-4">

              <Link
                to="/"
                className="text-sm text-[#AAA59D] transition-all duration-300 hover:text-white hover:translate-x-1"
              >
                Home
              </Link>

              <Link
                to="/about"
                className="text-sm text-[#AAA59D] transition-all duration-300 hover:text-white hover:translate-x-1"
              >
                About Us
              </Link>

              <Link
                to="/product"
                className="text-sm text-[#AAA59D] transition-all duration-300 hover:text-white hover:translate-x-1"
              >
                Products
              </Link>

              <Link
                to="/contact"
                className="text-sm text-[#AAA59D] transition-all duration-300 hover:text-white hover:translate-x-1"
              >
                Contact
              </Link>

            </div>
          </div>

          {/* Customer Care */}
          <div>
            <h3 className="text-[12px] uppercase tracking-[2.5px] font-semibold text-[#C9A45C] mb-6">
              Customer Care
            </h3>

            <div className="flex flex-col gap-4">

              <a
                href="#"
                className="text-sm text-[#AAA59D] transition-all duration-300 hover:text-white hover:translate-x-1"
              >
                Shipping & Delivery
              </a>

              <a
                href="#"
                className="text-sm text-[#AAA59D] transition-all duration-300 hover:text-white hover:translate-x-1"
              >
                Returns & Exchanges
              </a>

              <a
                href="#"
                className="text-sm text-[#AAA59D] transition-all duration-300 hover:text-white hover:translate-x-1"
              >
                Privacy Policy
              </a>

              <a
                href="#"
                className="text-sm text-[#AAA59D] transition-all duration-300 hover:text-white hover:translate-x-1"
              >
                Terms & Conditions
              </a>

            </div>
          </div>

          {/* Newsletter */}
          <div>

            <h3 className="text-[12px] uppercase tracking-[2.5px] font-semibold text-[#C9A45C] mb-6">
              Stay Connected
            </h3>

            <p className="text-sm text-[#AAA59D] leading-6 mb-5">
              Subscribe to receive new arrivals, special offers and
              exclusive updates from VELORA.
            </p>

            <div className="flex items-center border border-[#3A3937] rounded-full p-1.5 focus-within:border-[#C9A45C] transition-all duration-300">

              <Mail
                size={17}
                className="ml-3 text-[#77736D]"
                strokeWidth={1.7}
              />

              <input
                type="email"
                placeholder="Your email"
                className="bg-transparent outline-none text-sm text-white placeholder-[#77736D] px-3 py-2.5 w-full"
              />

              <button
                className="w-10 h-10 rounded-full bg-[#C9A45C] text-[#171717] flex items-center justify-center transition-all duration-300 hover:bg-[#D7B875] hover:rotate-6"
              >
                <ArrowUpRight size={18} strokeWidth={2} />
              </button>

            </div>
          </div>

        </div>

        {/* Bottom */}
        <div className="border-t border-[#30302E] mt-14 pt-7 flex flex-col md:flex-row items-center justify-between gap-4">

          <p className="text-xs text-[#77736D]">
            © 2026 VELORA. All rights reserved.
          </p>

          <p className="text-xs text-[#77736D]">
            Designed with intention. Crafted for modern living.
          </p>

        </div>

      </div>
    </footer>
  );
};

export default Footer;