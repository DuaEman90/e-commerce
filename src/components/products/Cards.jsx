import React from "react";
import { Link } from "react-router-dom";

const Cards = ({ product }) => {
  return (
    <div className="group relative cursor-pointer overflow-hidden border border-[#E8E2D9] bg-white transition-all duration-500 hover:-translate-y-2 hover:border-[#C9A45C] hover:shadow-[0_15px_45px_rgba(181,139,69,0.18)]">

      {/* Golden Glow */}
      <div className="pointer-events-none absolute inset-0 opacity-0 shadow-[inset_0_0_35px_rgba(201,164,92,0.08)] transition-opacity duration-500 group-hover:opacity-100" />

      {/* ================= IMAGE ================= */}
      <div className="relative h-72 overflow-hidden bg-[#F3F0EA]">

        <img
          src={product.thumbnail}
          alt={product.title}
          className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
        />

        {/* Image Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#171717]/20 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

        {/* Discount */}
        <span className="absolute left-4 top-4 bg-[#171717] px-3 py-1.5 text-[10px] font-medium tracking-[1.5px] text-white">
          -{Math.round(product.discountPercentage)}%
        </span>

        {/* Wishlist */}
        <button
          onClick={(e) => e.stopPropagation()}
          className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center bg-white/95 text-[#4A4742] shadow-sm backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:bg-[#B58B45] hover:text-white"
        >
          <span className="text-xl leading-none">♡</span>
        </button>
      </div>

      {/* ================= INFO ================= */}
      <div className="p-5">

        {/* Category */}
        <p className="text-[10px] font-semibold uppercase tracking-[2px] text-[#B58B45]">
          {product.category}
        </p>

        {/* Title */}
        <h2 className="mt-2 line-clamp-1 text-[17px] font-medium text-[#22201D] transition-colors duration-300 group-hover:text-[#B58B45]">
          {product.title}
        </h2>

        {/* Description */}
        <p className="mt-2 line-clamp-2 text-[13px] leading-6 text-[#88837B]">
          {product.description}
        </p>

        {/* Rating */}
        <div className="mt-4 flex items-center gap-2">
          <div className="flex items-center gap-0.5 text-sm text-[#C9A45C]">
            ★★★★★
          </div>

          <span className="text-xs text-[#77736D]">
            {product.rating}
          </span>
        </div>

        {/* Divider */}
        <div className="mb-4 mt-5 h-[1px] bg-[#EEE9E1]" />

        {/* Price + View Detail */}
        <div className="flex items-center justify-between gap-3">

          <div>
            <p className="text-[9px] uppercase tracking-[1.5px] text-[#AAA59D]">
              Price
            </p>

            <p className="mt-0.5 text-xl font-semibold text-[#171717]">
              ${product.price}
            </p>
          </div>

          {/* View Detail */}
          <Link
            to={`/product/${product.id}`}
            className="group/btn flex items-center gap-2 bg-[#171717] px-4 py-2.5 text-[11px] uppercase tracking-[1px] text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#B58B45]"
          >
            View Detail

            <span className="transition-transform duration-300 group-hover/btn:translate-x-0.5">
              →
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Cards;