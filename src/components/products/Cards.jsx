import React from "react";
import { Link } from "react-router-dom";

const Cards = ({ product }) => {
  return (
    <div className="group relative bg-white border border-[#E8E2D9] overflow-hidden cursor-pointer transition-all duration-500 hover:-translate-y-2 hover:border-[#C9A45C] hover:shadow-[0_15px_45px_rgba(181,139,69,0.18)]">

      {/* Golden Glow */}
      <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500 shadow-[inset_0_0_35px_rgba(201,164,92,0.08)]" />

      {/* ================= IMAGE ================= */}
      <div className="relative h-72 bg-[#F3F0EA] overflow-hidden">

        <img
          src={product.thumbnail}
          alt={product.title}
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
        />

        {/* Image Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#171717]/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        {/* Discount */}
        <span className="absolute top-4 left-4 bg-[#171717] text-white px-3 py-1.5 text-[10px] tracking-[1.5px] font-medium">
          -{Math.round(product.discountPercentage)}%
        </span>

        {/* Wishlist */}
        <button
          onClick={(e) => e.stopPropagation()}
          className="absolute top-4 right-4 w-10 h-10 bg-white/95 backdrop-blur-sm flex items-center justify-center text-[#4A4742] shadow-sm transition-all duration-300 hover:bg-[#B58B45] hover:text-white hover:scale-105"
        >
          <span className="text-xl leading-none">
            ♡
          </span>
        </button>

        {/* Quick View */}
        <div className="absolute bottom-4 left-4 right-4 translate-y-3 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
          <button
            onClick={(e) => e.stopPropagation()}
            className="w-full bg-white/95 backdrop-blur-sm text-[#171717] py-3 text-[11px] uppercase tracking-[2px] font-medium transition-all duration-300 hover:bg-[#B58B45] hover:text-white"
          >
            Quick View
          </button>
        </div>

      </div>

      {/* ================= INFO ================= */}
      <div className="p-5">

        {/* Category */}
        <p className="text-[10px] uppercase tracking-[2px] text-[#B58B45] font-semibold">
          {product.category}
        </p>

        {/* Title */}
        <h2 className="mt-2 text-[17px] font-medium text-[#22201D] line-clamp-1 transition-colors duration-300 group-hover:text-[#B58B45]">
          {product.title}
        </h2>

        {/* Description */}
        <p className="text-[13px] text-[#88837B] mt-2 leading-6 line-clamp-2">
          {product.description}
        </p>

        {/* Rating */}
        <div className="flex items-center gap-2 mt-4">
          <div className="flex items-center gap-0.5 text-[#C9A45C] text-sm">
            ★★★★★
          </div>
          <span className="text-xs text-[#77736D]">
            {product.rating}
          </span>
        </div>

        {/* Divider */}
        <div className="h-[1px] bg-[#EEE9E1] mt-5 mb-4" />

        {/* Price + View Detail */}
        <div className="flex items-center justify-between gap-3">

          <div>
            <p className="text-[9px] uppercase tracking-[1.5px] text-[#AAA59D]">
              Price
            </p>
            <p className="text-xl font-semibold text-[#171717] mt-0.5">
              ${product.price}
            </p>
          </div>

          {/* View Detail — Link to /product/:id */}
          <Link
            to={`/product/${product.id}`}
            className="group/btn flex items-center gap-2 bg-[#171717] text-white px-4 py-2.5 text-[11px] uppercase tracking-[1px] transition-all duration-300 hover:bg-[#B58B45] hover:-translate-y-0.5"
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
