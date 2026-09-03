
import React from "react";
import { Link } from "react-router-dom";
import { Mail, ArrowUpRight } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#171717] text-white">

      {/* Top Statement */}
      <div className="border-b border-[#30302E]">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10 py-7">

          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">

            <h2 className="font-serif text-2xl md:text-3xl font-light leading-tight">
              Designed for the
              <span className="italic text-[#C9A45C]"> beautifully </span>
              curated life.
            </h2>

            <Link
              to="/product"
              className="group flex items-center gap-2 text-[10px] uppercase tracking-[1.6px] text-[#D8D4CC] hover:text-[#C9A45C] transition-all duration-300"
            >
              Explore Collection

              <span className="w-7 h-7 border border-[#4A4844] flex items-center justify-center group-hover:border-[#C9A45C] group-hover:-translate-y-0.5 transition-all duration-300">
                <ArrowUpRight
                  size={13}
                  strokeWidth={1.5}
                  className="group-hover:rotate-12 transition-transform duration-300"
                />
              </span>
            </Link>

          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10 py-8">

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-x-8 gap-y-7">

          {/* Brand */}
          <div className="col-span-2 md:col-span-2 lg:col-span-2">

            <Link to="/" className="inline-block group">
              <img
                src="logoo.jpeg"
                alt="VELORA"
                className="h-8 w-auto object-contain group-hover:scale-[1.02] transition-transform duration-300"
              />
            </Link>

            <p className="mt-3 text-xs leading-5 text-[#99958E] max-w-xs">
              A thoughtfully curated collection of products made for
              modern living, effortless elegance and everyday moments
              worth remembering.
            </p>

            {/* Social */}
            <div className="flex gap-2 mt-4">

              <a
                href="#"
                aria-label="Instagram"
                className="group w-7 h-7 border border-[#383734] flex items-center justify-center hover:border-[#C9A45C] hover:bg-[#C9A45C] transition-all duration-300"
              >
                <img
                  src="instagram.png"
                  alt="Instagram"
                  className="w-3 h-3 object-contain group-hover:scale-110 transition-transform duration-300"
                />
              </a>

              <a
                href="#"
                aria-label="Facebook"
                className="group w-7 h-7 border border-[#383734] flex items-center justify-center hover:border-[#C9A45C] hover:bg-[#C9A45C] transition-all duration-300"
              >
                <img
                  src="facebook.png"
                  alt="Facebook"
                  className="w-3 h-3 object-contain group-hover:scale-110 transition-transform duration-300"
                />
              </a>

              <a
                href="#"
                aria-label="Twitter"
                className="group w-7 h-7 border border-[#383734] flex items-center justify-center hover:border-[#C9A45C] hover:bg-[#C9A45C] transition-all duration-300"
              >
                <img
                  src="twiter.png"
                  alt="Twitter"
                  className="w-3 h-3 object-contain group-hover:scale-110 transition-transform duration-300"
                />
              </a>

            </div>
          </div>

          {/* Shop */}
          <div>
            <h3 className="text-[10px] uppercase tracking-[2px] text-[#C9A45C] mb-3">
              Shop
            </h3>

            <div className="flex flex-col gap-2">
              <Link
                to="/product"
                className="w-fit text-xs text-[#99958E] hover:text-white hover:translate-x-1 transition-all duration-300"
              >
                All Products
              </Link>

              <Link
                to="/product"
                className="w-fit text-xs text-[#99958E] hover:text-white hover:translate-x-1 transition-all duration-300"
              >
                New Arrivals
              </Link>

              <Link
                to="/product"
                className="w-fit text-xs text-[#99958E] hover:text-white hover:translate-x-1 transition-all duration-300"
              >
                Best Sellers
              </Link>

              <Link
                to="/product"
                className="w-fit text-xs text-[#99958E] hover:text-white hover:translate-x-1 transition-all duration-300"
              >
                Collections
              </Link>
            </div>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-[10px] uppercase tracking-[2px] text-[#C9A45C] mb-3">
              Company
            </h3>

            <div className="flex flex-col gap-2">
              <Link
                to="/about"
                className="w-fit text-xs text-[#99958E] hover:text-white hover:translate-x-1 transition-all duration-300"
              >
                About Velora
              </Link>

              <Link
                to="/contact"
                className="w-fit text-xs text-[#99958E] hover:text-white hover:translate-x-1 transition-all duration-300"
              >
                Contact
              </Link>

              <a
                href="#"
                className="w-fit text-xs text-[#99958E] hover:text-white hover:translate-x-1 transition-all duration-300"
              >
                Shipping
              </a>

              <a
                href="#"
                className="w-fit text-xs text-[#99958E] hover:text-white hover:translate-x-1 transition-all duration-300"
              >
                Returns
              </a>
            </div>
          </div>

          {/* Newsletter */}
          <div className="col-span-2 md:col-span-2 lg:col-span-1">

            <h3 className="text-[10px] uppercase tracking-[2px] text-[#C9A45C] mb-3">
              Newsletter
            </h3>

            <p className="text-xs leading-5 text-[#99958E] mb-3 max-w-xs">
              Join our list for new collections, thoughtful updates and
              exclusive offers.
            </p>

            <div className="relative border-b border-[#4A4844] focus-within:border-[#C9A45C] transition-colors duration-300">

              <Mail
                size={13}
                strokeWidth={1.5}
                className="absolute left-0 top-2 text-[#77736D]"
              />

              <input
                type="email"
                placeholder="Email address"
                className="w-full bg-transparent outline-none py-2 pl-5 pr-7 text-xs text-white placeholder:text-[#77736D]"
              />

              <button
                aria-label="Subscribe"
                className="absolute right-0 top-1 w-6 h-6 flex items-center justify-center text-[#C9A45C] hover:-translate-y-0.5 transition-all duration-300"
              >
                <ArrowUpRight size={14} strokeWidth={1.5} />
              </button>

            </div>
          </div>

        </div>

        {/* Bottom */}
        <div className="border-t border-[#30302E] mt-7 pt-4 flex flex-col sm:flex-row items-center justify-between gap-2">

          <p className="text-[10px] tracking-wide text-[#6F6C67]">
            © 2026 VELORA. All rights reserved.
          </p>

          <div className="flex items-center gap-4">

            <a
              href="#"
              className="text-[10px] text-[#6F6C67] hover:text-[#C9A45C] transition-colors duration-300"
            >
              Privacy
            </a>

            <a
              href="#"
              className="text-[10px] text-[#6F6C67] hover:text-[#C9A45C] transition-colors duration-300"
            >
              Terms
            </a>

            <span className="hidden sm:block text-[10px] text-[#6F6C67]">
              Crafted with intention.
            </span>

          </div>

        </div>

      </div>
    </footer>
  );
};

export default Footer;

