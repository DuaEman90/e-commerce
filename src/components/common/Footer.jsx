
import React from "react";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-950 text-white mt-20">
      <div className="max-w-7xl mx-auto px-6 py-14">

        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">

          {/* Brand */}
          <div>
            <h2 className="text-2xl font-bold tracking-wide">
              Lunéa
            </h2>

            <p className="text-gray-400 text-sm leading-6 mt-4 max-w-xs">
              Discover thoughtfully selected products designed to bring
              style, quality, and comfort to your everyday life.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-5">
              Quick Links
            </h3>

            <div className="flex flex-col gap-3 text-sm text-gray-400">
              <NavLink
                to="/"
                className="hover:text-orange-400 transition"
              >
                Home
              </NavLink>

              <NavLink
                to="/about"
                className="hover:text-orange-400 transition"
              >
                About
              </NavLink>

              <NavLink
                to="/products"
                className="hover:text-orange-400 transition"
              >
                Products
              </NavLink>

              <NavLink
                to="/contact"
                className="hover:text-orange-400 transition"
              >
                Contact
              </NavLink>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-5">
              Contact
            </h3>

            <div className="space-y-3 text-sm text-gray-400">
              <p>hello@lunea.com</p>
              <p>+92 300 1234567</p>
              <p>Pakistan</p>
            </div>
          </div>

          {/* Social */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-5">
              Follow Us
            </h3>

            <div className="flex gap-4 text-sm text-gray-400">
              <a href="#" className="hover:text-orange-400 transition">
                Instagram
              </a>

              <a href="#" className="hover:text-orange-400 transition">
                Facebook
              </a>

              <a href="#" className="hover:text-orange-400 transition">
                Twitter
              </a>
            </div>
          </div>

        </div>

        {/* Bottom */}
        <div className="border-t border-gray-800 mt-12 pt-6 text-center">
          <p className="text-sm text-gray-500">
            © 2026 Lunéa. All rights reserved.
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;

