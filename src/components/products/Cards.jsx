import React from "react";
import { Link } from "react-router-dom";
import {
  FiArrowUpRight,
  FiHeart,
  FiStar,
} from "react-icons/fi";

const Cards = ({ product }) => {
  const discountPercentage = Math.round(product.discountPercentage || 0);

  return (
    <article className="group relative overflow-hidden rounded-[26px] border border-[#171717]/10 bg-white/75 shadow-[0_18px_50px_rgba(45,37,22,0.07)] backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:border-[#C7A550]/35 hover:shadow-[0_25px_65px_rgba(45,37,22,0.13)]">
      {/* Card Glow */}
      <div className="pointer-events-none absolute -right-16 -top-16 h-36 w-36 rounded-full bg-[#E7C77B]/20 blur-[55px] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

      {/* Image */}
      <div className="relative h-[285px] overflow-hidden bg-[#E9E2D5]">
        <img
          src={product.thumbnail}
          alt={product.title}
          className="h-full w-full object-cover transition-transform duration-[1200ms] group-hover:scale-[1.06]"
        />

        {/* Image Overlay */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#17130C]/15 via-transparent to-[#FFF5D8]/10" />

        {/* Moving Shine */}
        <div className="pointer-events-none absolute -left-[80%] top-0 h-full w-[40%] skew-x-[-18deg] bg-gradient-to-r from-transparent via-white/25 to-transparent transition-all duration-[1200ms] group-hover:left-[130%]" />

        {/* Discount */}
        {discountPercentage > 0 && (
          <div className="absolute left-4 top-4 rounded-full border border-white/50 bg-[#171717]/75 px-3 py-1.5 text-[8px] font-bold uppercase tracking-[1.5px] text-white backdrop-blur-md">
            {discountPercentage}% Off
          </div>
        )}

        {/* Wishlist */}
        <button
          type="button"
          onClick={(e) => e.preventDefault()}
          aria-label="Add to wishlist"
          className="absolute right-4 top-4 flex h-9 w-9 cursor-pointer items-center justify-center rounded-full border border-white/50 bg-white/75 text-[#171717] backdrop-blur-md transition-all duration-300 hover:scale-110 hover:border-[#C7A550]/50 hover:bg-[#C7A550] hover:text-white"
        >
          <FiHeart size={15} strokeWidth={1.7} />
        </button>

        {/* Image Bottom Label */}
        <div className="absolute bottom-4 left-4">
          <span className="rounded-full border border-white/30 bg-black/20 px-3 py-1.5 text-[7px] font-semibold uppercase tracking-[2px] text-white/90 backdrop-blur-md">
            Global Selection
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="relative p-5">
        {/* Category */}
        <div className="flex items-center justify-between">
          <p className="text-[8px] font-bold uppercase tracking-[2px] text-[#A38332]">
            {product.category}
          </p>

          <span className="h-1.5 w-1.5 rounded-full bg-[#C7A550] shadow-[0_0_9px_3px_rgba(199,165,80,0.25)]" />
        </div>

        {/* Title */}
        <h3 className="mt-2 line-clamp-1 text-[17px] font-medium tracking-[-0.5px] text-[#171717]">
          {product.title}
        </h3>

        {/* Description */}
        <p className="mt-2 line-clamp-2 min-h-[40px] text-[11px] leading-5 text-[#171717]/50">
          {product.description}
        </p>

        {/* Rating */}
        <div className="mt-4 flex items-center gap-2">
          <div className="flex items-center gap-1">
            <FiStar
              size={13}
              className="fill-[#C7A550] text-[#C7A550]"
            />

            <span className="text-[10px] font-semibold text-[#171717]">
              {product.rating?.toFixed(1) || "4.5"}
            </span>
          </div>

          <span className="h-3 w-px bg-[#171717]/10" />

          <span className="text-[9px] text-[#171717]/40">
            {product.stock || 0} in stock
          </span>
        </div>

        {/* Bottom */}
        <div className="mt-5 flex items-end justify-between border-t border-[#171717]/10 pt-4">
          <div>
            <p className="text-[8px] uppercase tracking-[1.5px] text-[#171717]/35">
              Price
            </p>

            <p className="mt-1 text-xl font-semibold tracking-[-0.7px] text-[#171717]">
              ${product.price}
            </p>
          </div>

          <Link
            to={`/product/${product.id}`}
            className="group/link flex cursor-pointer items-center gap-2 rounded-full border border-[#171717]/10 bg-[#F4F0E8] px-4 py-2.5 text-[8px] font-bold uppercase tracking-[1.5px] text-[#171717] transition-all duration-300 hover:border-[#C7A550] hover:bg-[#C7A550] hover:text-white"
          >
            View Detail

            <FiArrowUpRight
              size={12}
              className="transition-transform duration-300 group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5"
            />
          </Link>
        </div>
      </div>
    </article>
  );
};

export default Cards;