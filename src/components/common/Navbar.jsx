
import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Products", path: "/products" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="w-full bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <NavLink
          to="/"
          className="text-2xl font-bold tracking-wide text-gray-900"
        >
          Lunéa
        </NavLink>

        {/* Navigation */}
        <div className="hidden md:flex items-center gap-10">
          {navItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              className={({ isActive }) =>
                `text-sm font-medium transition-all duration-300 ${
                  isActive
                    ? "text-orange-500"
                    : "text-gray-600 hover:text-orange-500"
                }`
              }
            >
              {item.name}
            </NavLink>
          ))}
        </div>

        {/* Shop Button */}
        <NavLink
          to="/products"
          className="hidden md:block bg-gray-900 text-white px-5 py-2.5 rounded-full text-sm font-medium hover:bg-orange-500 transition-all duration-300"
        >
          Shop Now
        </NavLink>

      </div>
    </nav>
  );
};

export default Navbar;

