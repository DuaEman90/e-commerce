
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
      <div className="bg-[#171717] text-[#E7D4B0] text-[11px] tracking-[2px] uppercase text-center py-2.5">
        Global Brands · One Destination
      </div>

      <nav className="sticky top-0 z-50 bg-[#FAF9F6]/95 backdrop-blur-xl border-b border-[#E7E0D5]">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10 h-[86px] flex items-center justify-between">
          <NavLink to="/" className="group flex items-center shrink-0">
            <img
              src="/logo.jpeg"
              alt="VELORA"
              className="h-12 w-auto object-contain transition-all duration-500 group-hover:scale-[1.04] group-hover:-translate-y-0.5"
            />
          </NavLink>

          <div className="hidden lg:flex items-center gap-10 ml-10">
            {navItems.map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                className={({ isActive }) =>
                  `group relative py-2 text-[13px] uppercase tracking-[1.8px] transition-all duration-300 ${
                    isActive
                      ? "text-[#B58B45]"
                      : "text-[#393631] hover:text-[#B58B45]"
                  }`
                }
              >
                {item.name}

                <span className="absolute left-0 bottom-0 h-[1px] w-0 bg-[#B58B45] transition-all duration-300 group-hover:w-full" />
              </NavLink>
            ))}
          </div>

          <div className="flex items-center gap-2 md:gap-3">
            <button
              aria-label="Search"
              className="hidden sm:flex w-10 h-10 items-center justify-center rounded-full text-[#393631] transition-all duration-300 hover:bg-[#EFE9DF] hover:text-[#B58B45] hover:-translate-y-0.5"
            >
              <FiSearch size={18} />
            </button>

            <NavLink
              to="/product"
              aria-label="Shopping Bag"
              className="group flex items-center justify-center w-10 h-10 rounded-full text-[#393631] transition-all duration-300 hover:bg-[#EFE9DF] hover:text-[#B58B45] hover:-translate-y-0.5"
            >
              <FiShoppingBag
                size={18}
                className="transition-transform duration-300 group-hover:scale-110"
              />
            </NavLink>

            <NavLink
              to="/product"
              className="hidden md:flex group ml-2 items-center gap-2 bg-[#171717] text-white px-6 py-3 rounded-none text-[12px] uppercase tracking-[1.5px] transition-all duration-300 hover:bg-[#B58B45] hover:-translate-y-0.5"
            >
              Shop Now

              <FiArrowUpRight
                size={15}
                className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </NavLink>

            <button
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
              className="lg:hidden ml-1 w-10 h-10 flex items-center justify-center border border-[#DCD4C7] text-[#25231F] transition-all duration-300 hover:border-[#B58B45] hover:text-[#B58B45]"
            >
              {menuOpen ? <FiX size={20} /> : <FiMenu size={20} />}
            </button>
          </div>
        </div>

        <div
          className={`lg:hidden overflow-hidden transition-all duration-500 ${
            menuOpen ? "max-h-[450px] opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="border-t border-[#E7E0D5] bg-[#FAF9F6] px-6 py-7">
            <div className="flex flex-col">
              {navItems.map((item, index) => (
                <NavLink
                  key={item.name}
                  to={item.path}
                  onClick={() => setMenuOpen(false)}
                  className={({ isActive }) =>
                    `flex items-center justify-between py-4 border-b border-[#E7E0D5] text-[13px] uppercase tracking-[1.8px] transition-all duration-300 hover:pl-2 ${
                      isActive
                        ? "text-[#B58B45]"
                        : "text-[#393631] hover:text-[#B58B45]"
                    }`
                  }
                >
                  <span>
                    <span className="text-[10px] text-[#B58B45] mr-4">
                      0{index + 1}
                    </span>

                    {item.name}
                  </span>

                  <FiArrowUpRight size={15} />
                </NavLink>
              ))}

              <NavLink
                to="/product"
                onClick={() => setMenuOpen(false)}
                className="mt-6 flex items-center justify-center gap-2 bg-[#171717] text-white py-3.5 text-[12px] uppercase tracking-[1.5px] transition-all duration-300 hover:bg-[#B58B45]"
              >
                Explore Products
                <FiArrowUpRight size={15} />
              </NavLink>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;

