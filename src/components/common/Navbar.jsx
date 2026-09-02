import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { ShoppingBag, Menu, X } from "lucide-react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Products", path: "/product" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full bg-[#FAF9F6]/95 backdrop-blur-md border-b border-[#E7E0D5]">

      <div className="max-w-7xl mx-auto px-6 md:px-10 h-[78px] flex items-center justify-between">

        {/* Logo */}
        <NavLink
          to="/"
          className="group flex items-center transition-transform duration-300 hover:-translate-y-0.5"
        >
          <img
            src="logo.jpeg"
            alt="Velora"
            className="h-12 w-auto object-contain transition-transform duration-300 group-hover:scale-[1.03]"
          />
        </NavLink>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-9">
          {navItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              className={({ isActive }) =>
                `relative text-[14px] font-medium tracking-wide transition-all duration-300 group hover:-translate-y-0.5 ${
                  isActive
                    ? "text-[#B58B45]"
                    : "text-[#4A4742] hover:text-[#B58B45]"
                }`
              }
            >
              {item.name}

              <span className="absolute -bottom-2 left-0 h-[1.5px] w-0 bg-[#B58B45] transition-all duration-300 group-hover:w-full" />
            </NavLink>
          ))}
        </div>

        {/* Right Side */}
        <div className="flex items-center gap-4">

          {/* Shop Now */}
          <NavLink
            to="/product"
            className="hidden sm:flex items-center gap-2 bg-[#171717] text-white px-6 py-2.5 rounded-full text-sm font-medium tracking-wide transition-all duration-300 hover:bg-[#B58B45] hover:-translate-y-0.5 hover:shadow-md"
          >
            Shop Now
            <ShoppingBag size={16} strokeWidth={1.8} />
          </NavLink>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden w-10 h-10 rounded-full border border-[#DCD4C7] flex items-center justify-center text-[#222] transition-all duration-300 hover:border-[#B58B45] hover:text-[#B58B45] hover:-translate-y-0.5"
          >
            {menuOpen ? (
              <X size={20} strokeWidth={1.8} />
            ) : (
              <Menu size={20} strokeWidth={1.8} />
            )}
          </button>

        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#FAF9F6] border-t border-[#E7E0D5] px-6 py-5">

          <div className="flex flex-col gap-3">

            {navItems.map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                onClick={() => setMenuOpen(false)}
                className={({ isActive }) =>
                  `py-2.5 text-sm font-medium tracking-wide transition-all duration-300 hover:translate-x-1 ${
                    isActive
                      ? "text-[#B58B45]"
                      : "text-[#4A4742] hover:text-[#B58B45]"
                  }`
                }
              >
                {item.name}
              </NavLink>
            ))}

            <NavLink
              to="/product"
              onClick={() => setMenuOpen(false)}
              className="mt-2 flex items-center justify-center gap-2 bg-[#171717] text-white py-3 rounded-full text-sm font-medium transition-all duration-300 hover:bg-[#B58B45] hover:-translate-y-0.5"
            >
              Shop Now
              <ShoppingBag size={16} strokeWidth={1.8} />
            </NavLink>

          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

