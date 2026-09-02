import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-[#040813] text-white">

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-16">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* Brand */}
          <div className="lg:pr-10">
            <Link
              to="/"
              className="text-3xl font-bold tracking-wide"
            >
              Lunéa<span className="text-orange-400">.</span>
            </Link>

            <p className="text-gray-400 text-sm leading-7 mt-5">
              Curated products, timeless style, and everyday essentials
              made to elevate the way you live.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-3 mt-7">
              <a
                href="#"
                className="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center text-sm hover:bg-orange-400 hover:border-orange-400 hover:text-[#040813] transition-all duration-300"
              >
                IG
              </a>

              <a
                href="#"
                className="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center text-sm hover:bg-orange-400 hover:border-orange-400 hover:text-[#040813] transition-all duration-300"
              >
                FB
              </a>

              <a
                href="#"
                className="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center text-sm hover:bg-orange-400 hover:border-orange-400 hover:text-[#040813] transition-all duration-300"
              >
                X
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[2px] mb-6">
              Explore
            </h3>

            <div className="flex flex-col gap-4 text-sm text-gray-400">
              <Link
                to="/"
                className="hover:text-orange-400 transition"
              >
                Home
              </Link>

              <Link
                to="/about"
                className="hover:text-orange-400 transition"
              >
                About Us
              </Link>

              <Link
                to="/products"
                className="hover:text-orange-400 transition"
              >
                Products
              </Link>

              <Link
                to="/contact"
                className="hover:text-orange-400 transition"
              >
                Contact
              </Link>
            </div>
          </div>

          {/* Customer Care */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[2px] mb-6">
              Customer Care
            </h3>

            <div className="flex flex-col gap-4 text-sm text-gray-400">
              <a href="#" className="hover:text-orange-400 transition">
                Shipping & Delivery
              </a>

              <a href="#" className="hover:text-orange-400 transition">
                Returns & Exchanges
              </a>

              <a href="#" className="hover:text-orange-400 transition">
                Privacy Policy
              </a>

              <a href="#" className="hover:text-orange-400 transition">
                Terms & Conditions
              </a>
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[2px] mb-6">
              Stay Connected
            </h3>

            <p className="text-gray-400 text-sm leading-6 mb-5">
              Subscribe to get updates about new products and exclusive
              offers.
            </p>

            <div className="flex items-center bg-white/5 border border-gray-700 rounded-full p-1">
              <input
                type="email"
                placeholder="Your email"
                className="bg-transparent outline-none text-sm text-white placeholder-gray-500 px-4 py-2 w-full"
              />

              <button className="bg-orange-400 text-[#040813] font-semibold text-sm px-5 py-2.5 rounded-full hover:bg-orange-300 transition">
                Join
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Line */}
        <div className="border-t border-gray-800 mt-14 pt-7 flex flex-col md:flex-row items-center justify-between gap-4">

          <p className="text-sm text-gray-500">
            © 2026 Lunéa. All rights reserved.
          </p>

          <p className="text-sm text-gray-500">
            Crafted with care for modern living.
          </p>

        </div>

      </div>
    </footer>
  );
};

export default Footer;

