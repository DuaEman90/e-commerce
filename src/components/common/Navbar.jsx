import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  FiSearch,
  FiShoppingBag,
  FiMenu,
  FiX,
  FiArrowUpRight,
} from "react-icons/fi";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Products", path: "/product" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <>
      {/* Announcement Bar */}
      <div className="bg-[#171717] py-2.5 text-center text-[11px] uppercase tracking-[2px] text-[#E7C77B]">
        Global Brands · One Destination
      </div>

      {/* Navbar */}
      <nav className="sticky top-0 z-50 border-b border-[#E7E0D5] bg-white">
        <div className="mx-auto flex h-[86px] max-w-[1400px] items-center justify-between px-6 lg:px-10">

          {/* Logo */}
          <NavLink
            to="/"
            className="group flex shrink-0 cursor-pointer items-center"
          >
            <img
              src="/logoo.jpeg"
              alt="VELORA"
              className="h-16 w-auto max-w-[260px] cursor-pointer object-contain object-left transition-all duration-500 group-hover:-translate-y-0.5 group-hover:scale-[1.04]"
            />
          </NavLink>

          {/* Desktop Navigation */}
          <div className="ml-10 hidden items-center gap-10 lg:flex">
            {navItems.map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                className={({ isActive }) =>
                  `group relative cursor-pointer py-2 text-[13px] font-semibold uppercase tracking-[1.8px] transition-all duration-300 ${
                    isActive
                      ? "text-[#C7A550]"
                      : "text-[#393631] hover:text-[#C7A550]"
                  }`
                }
              >
                {item.name}

                {/* Gold Underline */}
                <span className="absolute bottom-0 left-0 h-[1px] w-0 bg-[#C7A550] shadow-[0_0_8px_rgba(199,165,80,0.35)] transition-all duration-300 group-hover:w-full" />
              </NavLink>
            ))}
          </div>

          {/* Right Actions */}
          <div className="flex items-center gap-2 md:gap-3">

            {/* Search */}
            <button
              type="button"
              aria-label="Search"
              className="group hidden h-10 w-10 cursor-pointer items-center justify-center rounded-full text-[#393631] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#F4F0E8] hover:text-[#C7A550] hover:shadow-[0_8px_20px_rgba(199,165,80,0.12)] sm:flex"
            >
              <FiSearch
                size={18}
                className="transition-transform duration-300 group-hover:scale-110"
              />
            </button>

            {/* Shopping Bag */}
            <NavLink
              to="/product"
              aria-label="Shopping Bag"
              className="group flex h-10 w-10 cursor-pointer items-center justify-center rounded-full text-[#393631] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#F4F0E8] hover:text-[#C7A550] hover:shadow-[0_8px_20px_rgba(199,165,80,0.12)]"
            >
              <FiShoppingBag
                size={18}
                className="transition-transform duration-300 group-hover:scale-110"
              />
            </NavLink>

            {/* Shop Now */}
            <NavLink
              to="/product"
              className="group ml-2 hidden cursor-pointer items-center gap-2 rounded-none bg-[#171717] px-6 py-3 text-[12px] font-semibold uppercase tracking-[1.5px] text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#C7A550] hover:text-[#171717] hover:shadow-[0_10px_25px_rgba(199,165,80,0.22)] md:flex"
            >
              Shop Now

              <FiArrowUpRight
                size={15}
                className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </NavLink>

            {/* Mobile Menu */}
            <button
              type="button"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
              className="ml-1 flex h-10 w-10 cursor-pointer items-center justify-center border border-[#DCD4C7] text-[#25231F] transition-all duration-300 hover:border-[#C7A550] hover:bg-[#F4F0E8] hover:text-[#C7A550] hover:shadow-[0_8px_20px_rgba(199,165,80,0.12)] lg:hidden"
            >
              {menuOpen ? <FiX size={20} /> : <FiMenu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`overflow-hidden transition-all duration-500 lg:hidden ${
            menuOpen
              ? "max-h-[450px] opacity-100"
              : "max-h-0 opacity-0"
          }`}
        >
          <div className="border-t border-[#E7E0D5] bg-white px-6 py-7">
            <div className="flex flex-col">

              {navItems.map((item, index) => (
                <NavLink
                  key={item.name}
                  to={item.path}
                  onClick={() => setMenuOpen(false)}
                  className={({ isActive }) =>
                    `group flex cursor-pointer items-center justify-between border-b border-[#E7E0D5] py-4 text-[13px] font-semibold uppercase tracking-[1.8px] transition-all duration-300 hover:pl-2 ${
                      isActive
                        ? "text-[#C7A550]"
                        : "text-[#393631] hover:text-[#C7A550]"
                    }`
                  }
                >
                  <span>
                    <span className="mr-4 text-[10px] font-semibold text-[#C7A550]">
                      0{index + 1}
                    </span>

                    {item.name}
                  </span>

                  <FiArrowUpRight
                    size={15}
                    className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  />
                </NavLink>
              ))}

              {/* Mobile CTA */}
              <NavLink
                to="/product"
                onClick={() => setMenuOpen(false)}
                className="group mt-6 flex cursor-pointer items-center justify-center gap-2 bg-[#171717] py-3.5 text-[12px] font-semibold uppercase tracking-[1.5px] text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#C7A550] hover:text-[#171717] hover:shadow-[0_12px_30px_rgba(199,165,80,0.2)]"
              >
                Explore Products

                <FiArrowUpRight
                  size={15}
                  className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </NavLink>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;