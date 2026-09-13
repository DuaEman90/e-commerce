import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import {
  FiArrowLeft,
  FiArrowUpRight,
  FiHeart,
  FiRotateCcw,
  FiShield,
  FiShoppingBag,
  FiStar,
  FiTruck,
} from "react-icons/fi";

const ProductDetail = () => {
  const { id } = useParams();

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });

    const fetchProduct = async () => {
      try {
        setLoading(true);
        setError("");

        const response = await fetch(
          `https://dummyjson.com/products/${id}`
        );

        if (!response.ok) {
          throw new Error("Product not found");
        }

        const data = await response.json();
        setProduct(data);
      } catch (err) {
        setError("Unable to load this product.");
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  const increaseQuantity = () => {
    setQuantity((prev) => prev + 1);
  };

  const decreaseQuantity = () => {
    setQuantity((prev) => (prev > 1 ? prev - 1 : 1));
  };

  const renderStars = (rating = 0) => {
    return Array.from({ length: 5 }, (_, index) => (
      <FiStar
        key={index}
        size={14}
        className={
          index < Math.round(rating)
            ? "fill-[#C7A550] text-[#C7A550]"
            : "text-[#171717]/15"
        }
      />
    ));
  };

  if (loading) {
    return (
      <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#F4F0E8]">
        <div className="pointer-events-none absolute -right-40 -top-40 h-[500px] w-[500px] rounded-full bg-[#E7C77B]/20 blur-[130px]" />

        <div className="relative z-10 flex flex-col items-center">
          <div className="flex h-16 w-16 items-center justify-center rounded-full border border-[#C7A550]/30 bg-[#C7A550]/10 font-serif text-xl text-[#A38332] shadow-[0_0_40px_rgba(199,165,80,0.12)]">
            V
          </div>

          <p className="mt-4 text-[9px] font-bold uppercase tracking-[3px] text-[#171717]/40">
            Loading Product
          </p>
        </div>
      </section>
    );
  }

  if (error || !product) {
    return (
      <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#F4F0E8] px-5">
        <div className="pointer-events-none absolute -left-40 -bottom-40 h-[500px] w-[500px] rounded-full bg-[#E7C77B]/20 blur-[130px]" />

        <div className="relative z-10 w-full max-w-md rounded-[28px] border border-[#171717]/10 bg-white/70 p-10 text-center shadow-[0_20px_60px_rgba(45,37,22,0.08)] backdrop-blur-xl">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#C7A550]/10 font-serif text-lg text-[#A38332]">
            V
          </div>

          <h2 className="mt-5 text-xl font-medium text-[#171717]">
            Product unavailable
          </h2>

          <p className="mt-2 text-sm text-[#171717]/50">
            {error || "This product could not be found."}
          </p>

          <Link
            to="/product"
            className="mt-6 inline-flex cursor-pointer items-center gap-3 rounded-full bg-[#171717] px-6 py-3.5 text-[9px] font-bold uppercase tracking-[2px] text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#C7A550]"
          >
            Back to Products
            <FiArrowUpRight size={13} />
          </Link>
        </div>
      </section>
    );
  }

  const images =
    product.images && product.images.length > 0
      ? product.images
      : [product.thumbnail];

  const discountPercentage = Math.round(
    product.discountPercentage || 0
  );

  const totalPrice = (product.price * quantity).toFixed(2);

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#F4F0E8] text-[#171717]">
      {/* Background Glows */}
      <div className="pointer-events-none absolute -right-48 -top-48 h-[650px] w-[650px] rounded-full bg-[#E7C77B]/20 blur-[150px]" />

      <div className="pointer-events-none absolute -bottom-48 -left-48 h-[600px] w-[600px] rounded-full bg-[#C7A550]/10 blur-[140px]" />

      <div className="pointer-events-none absolute left-[45%] top-[35%] h-[350px] w-[350px] rounded-full bg-[#E7C77B]/10 blur-[120px]" />

      {/* Texture */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.025] [background-image:radial-gradient(#171717_0.6px,transparent_0.6px)] [background-size:7px_7px]" />

      <div className="relative z-10 mx-auto max-w-[1500px] px-5 pb-20 pt-8 sm:px-8 lg:px-14 xl:px-20">
        {/* Top Navigation */}
        <div className="mb-8 flex items-center justify-between">
          <Link
            to="/product"
            className="group flex cursor-pointer items-center gap-2 text-[9px] font-bold uppercase tracking-[2px] text-[#171717]/50 transition-colors duration-300 hover:text-[#A38332]"
          >
            <FiArrowLeft
              size={13}
              className="transition-transform duration-300 group-hover:-translate-x-1"
            />
            Back to Collection
          </Link>

          <div className="hidden items-center gap-3 sm:flex">
            <span className="h-1.5 w-1.5 rounded-full bg-[#C7A550] shadow-[0_0_10px_3px_rgba(199,165,80,0.25)]" />

            <span className="text-[8px] font-bold uppercase tracking-[2.5px] text-[#171717]/35">
              Velora · Global Collection
            </span>
          </div>
        </div>

        {/* Main Grid */}
        <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
          {/* LEFT — IMAGE */}
          <div className="relative">
            {/* Image Glow */}
            <div
              className="pointer-events-none absolute right-[10%] top-[10%] h-[420px] w-[420px] rounded-full bg-[#D8B762]/20 blur-[110px]"
              style={{
                animation: "softGlow 6s ease-in-out infinite",
              }}
            />

            {/* Decorative Ring */}
            <div className="pointer-events-none absolute -right-8 top-1/2 hidden h-[420px] w-[420px] -translate-y-1/2 rounded-full border border-[#B79543]/15 lg:block" />

            {/* Main Image */}
            <div
              className="group relative z-10 overflow-hidden rounded-[32px] border border-white/70 bg-[#DED5C3] shadow-[0_30px_75px_rgba(60,49,29,0.16)]"
              style={{
                animation: "imageLift 6s ease-in-out infinite",
              }}
            >
              <div className="relative aspect-[4/4.3] overflow-hidden">
                <img
                  src={images[selectedImage]}
                  alt={product.title}
                  className="h-full w-full object-cover transition-transform duration-[1400ms] group-hover:scale-[1.04]"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#17130C]/35 via-transparent to-[#FFF5D8]/10" />

                {/* Warm Glow */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_20%,rgba(255,226,151,0.22),transparent_30%)]" />

                {/* Sweep */}
                <div
                  className="absolute -left-[60%] top-0 h-full w-[35%] skew-x-[-18deg] bg-gradient-to-r from-transparent via-white/25 to-transparent"
                  style={{
                    animation: "imageSweep 7s ease-in-out infinite",
                  }}
                />

                {/* Discount */}
                {discountPercentage > 0 && (
                  <div className="absolute left-5 top-5 rounded-full border border-white/30 bg-black/25 px-4 py-2 text-[8px] font-bold uppercase tracking-[2px] text-white backdrop-blur-md">
                    {discountPercentage}% Off
                  </div>
                )}

                {/* Wishlist */}
                <button
                  type="button"
                  className="absolute right-5 top-5 flex h-11 w-11 cursor-pointer items-center justify-center rounded-full border border-white/30 bg-white/15 text-white backdrop-blur-xl transition-all duration-300 hover:scale-110 hover:bg-[#C7A550]"
                >
                  <FiHeart size={17} />
                </button>

                {/* Image Label */}
                <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between">
                  <div className="rounded-full border border-white/20 bg-black/20 px-4 py-2.5 backdrop-blur-md">
                    <p className="text-[8px] font-semibold uppercase tracking-[2.5px] text-white/85">
                      Global Selection
                    </p>
                  </div>

                  <div className="flex h-10 w-10 items-center justify-center rounded-full border border-white/25 bg-white/15 text-white backdrop-blur-xl transition-transform duration-300 group-hover:rotate-45">
                    <FiArrowUpRight size={16} />
                  </div>
                </div>
              </div>
            </div>

            {/* Thumbnails */}
            {images.length > 1 && (
              <div className="relative z-20 mt-5 flex gap-3 overflow-x-auto pb-2">
                {images.map((image, index) => (
                  <button
                    key={image + index}
                    type="button"
                    onClick={() => setSelectedImage(index)}
                    className={`h-20 w-20 shrink-0 cursor-pointer overflow-hidden rounded-xl border-2 bg-white transition-all duration-300 ${
                      selectedImage === index
                        ? "border-[#C7A550] shadow-[0_8px_25px_rgba(199,165,80,0.18)]"
                        : "border-transparent opacity-65 hover:border-[#C7A550]/40 hover:opacity-100"
                    }`}
                  >
                    <img
                      src={image}
                      alt={`${product.title} ${index + 1}`}
                      className="h-full w-full object-cover"
                    />
                  </button>
                ))}
              </div>
            )}

            {/* Floating Info Card */}
            <div
              className="absolute -left-1 top-[15%] z-30 hidden rounded-2xl border border-white/70 bg-[#F8F4EA]/90 px-4 py-3 shadow-[0_15px_40px_rgba(45,37,22,0.13)] backdrop-blur-xl sm:block lg:-left-5"
              style={{
                animation: "floatCard 5s ease-in-out infinite",
              }}
            >
              <p className="text-[7px] uppercase tracking-[2px] text-[#171717]/40">
                Category
              </p>

              <p className="mt-1 text-[11px] font-semibold capitalize text-[#171717]">
                {product.category}
              </p>

              <div className="mt-2.5 h-1 w-8 rounded-full bg-[#C7A550]" />
            </div>
          </div>

          {/* RIGHT — DETAILS */}
          <div className="relative flex flex-col justify-center">
            {/* Eyebrow */}
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-9 bg-gradient-to-r from-transparent to-[#C7A550]" />

              <p className="text-[9px] font-bold uppercase tracking-[3px] text-[#A38332]">
                {product.brand || "Velora Collection"}
              </p>

              <span className="h-1.5 w-1.5 rounded-full bg-[#C7A550] shadow-[0_0_12px_4px_rgba(199,165,80,0.3)]" />
            </div>

            {/* Category */}
            <p className="text-[8px] font-bold uppercase tracking-[2px] text-[#171717]/40">
              {product.category}
            </p>

            {/* Title */}
            <h1 className="mt-3 max-w-[650px] text-[clamp(40px,4.5vw,68px)] font-medium leading-[0.95] tracking-[-3px] text-[#171717]">
              {product.title}
            </h1>

            {/* Rating */}
            <div className="mt-6 flex flex-wrap items-center gap-4">
              <div className="flex items-center gap-1">
                {renderStars(product.rating)}
              </div>

              <span className="h-4 w-px bg-[#171717]/10" />

              <span className="text-[9px] font-semibold uppercase tracking-[1px] text-[#171717]/45">
                {product.rating?.toFixed(1)} Rating
              </span>

              <span className="text-[9px] text-[#171717]/35">
                · {product.reviews?.length || 0} Reviews
              </span>
            </div>

            {/* Price */}
            <div className="mt-7 border-y border-[#171717]/10 py-5">
              <p className="text-[8px] font-bold uppercase tracking-[2px] text-[#171717]/35">
                Price
              </p>

              <div className="mt-1 flex items-end gap-3">
                <span className="text-3xl font-semibold tracking-[-1px] text-[#171717]">
                  ${product.price}
                </span>

                {discountPercentage > 0 && (
                  <span className="pb-1 text-[10px] text-[#171717]/35 line-through">
                    $
                    {(
                      product.price /
                      (1 - product.discountPercentage / 100)
                    ).toFixed(2)}
                  </span>
                )}
              </div>
            </div>

            {/* Description */}
            <p className="mt-6 max-w-[590px] text-[13px] leading-6 text-[#171717]/60">
              {product.description}
            </p>

            {/* Stock */}
            <div className="mt-5 flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-[#C7A550] shadow-[0_0_9px_3px_rgba(199,165,80,0.22)]" />

              <span className="text-[9px] font-semibold uppercase tracking-[1.5px] text-[#171717]/50">
                {product.stock} units available
              </span>
            </div>

            {/* Quantity + Add */}
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <div className="flex h-[54px] w-fit items-center rounded-full border border-[#171717]/10 bg-white/60 px-2 backdrop-blur-md">
                <button
                  type="button"
                  onClick={decreaseQuantity}
                  className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full text-lg text-[#171717]/60 transition-colors hover:bg-[#C7A550]/10 hover:text-[#A38332]"
                >
                  −
                </button>

                <span className="w-8 text-center text-sm font-semibold">
                  {quantity}
                </span>

                <button
                  type="button"
                  onClick={increaseQuantity}
                  className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full text-lg text-[#171717]/60 transition-colors hover:bg-[#C7A550]/10 hover:text-[#A38332]"
                >
                  +
                </button>
              </div>

              <button
                type="button"
                className="group flex h-[54px] flex-1 cursor-pointer items-center justify-center gap-4 rounded-full bg-[#171717] px-7 text-[9px] font-bold uppercase tracking-[2px] text-[#F7F2E8] shadow-[0_12px_35px_rgba(23,23,23,0.16)] transition-all duration-500 hover:-translate-y-1 hover:bg-[#C7A550] hover:text-white hover:shadow-[0_18px_45px_rgba(199,165,80,0.25)]"
              >
                <FiShoppingBag size={15} />

                Add to Bag

                <span className="text-white/45">·</span>

                ${totalPrice}

                <FiArrowUpRight
                  size={14}
                  className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </button>
            </div>

            {/* Secondary Wishlist */}
            <button
              type="button"
              className="mt-3 flex h-[50px] w-full cursor-pointer items-center justify-center gap-3 rounded-full border border-[#171717]/10 bg-white/45 text-[9px] font-bold uppercase tracking-[2px] text-[#171717]/65 transition-all duration-300 hover:border-[#C7A550]/40 hover:bg-[#C7A550]/10 hover:text-[#A38332]"
            >
              <FiHeart size={14} />
              Add to Wishlist
            </button>

            {/* Trust Features */}
            <div className="mt-8 grid grid-cols-3 border-y border-[#171717]/10 py-5">
              <div className="flex flex-col items-center gap-2 border-r border-[#171717]/10 text-center">
                <FiTruck size={16} className="text-[#A38332]" />

                <p className="text-[7px] font-bold uppercase tracking-[1.2px] text-[#171717]/50">
                  Global Delivery
                </p>
              </div>

              <div className="flex flex-col items-center gap-2 border-r border-[#171717]/10 text-center">
                <FiShield size={16} className="text-[#A38332]" />

                <p className="text-[7px] font-bold uppercase tracking-[1.2px] text-[#171717]/50">
                  Secure Shopping
                </p>
              </div>

              <div className="flex flex-col items-center gap-2 text-center">
                <FiRotateCcw size={16} className="text-[#A38332]" />

                <p className="text-[7px] font-bold uppercase tracking-[1.2px] text-[#171717]/50">
                  Easy Returns
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Product Information */}
        <section className="mt-20">
          <div className="mb-8 flex items-end justify-between gap-5">
            <div>
              <div className="mb-4 flex items-center gap-3">
                <span className="h-px w-8 bg-gradient-to-r from-transparent to-[#C7A550]" />

                <p className="text-[8px] font-bold uppercase tracking-[3px] text-[#A38332]">
                  Product Information
                </p>
              </div>

              <h2 className="text-[clamp(32px,4vw,52px)] font-medium leading-none tracking-[-2px]">
                More about this
                <span className="ml-2 font-serif italic font-normal text-[#B28A32]">
                  selection.
                </span>
              </h2>
            </div>
          </div>

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            <InfoCard
              label="Category"
              value={product.category}
            />

            <InfoCard
              label="Brand"
              value={product.brand || "Global Brand"}
            />

            <InfoCard
              label="SKU"
              value={product.sku || `VL-${product.id}`}
            />

            <InfoCard
              label="Availability"
              value={`${product.stock} units`}
            />
          </div>
        </section>

        {/* Reviews */}
        {product.reviews?.length > 0 && (
          <section className="mt-20">
            <div className="mb-8">
              <div className="mb-4 flex items-center gap-3">
                <span className="h-px w-8 bg-gradient-to-r from-transparent to-[#C7A550]" />

                <p className="text-[8px] font-bold uppercase tracking-[3px] text-[#A38332]">
                  Customer Reviews
                </p>
              </div>

              <h2 className="text-[clamp(32px,4vw,52px)] font-medium leading-none tracking-[-2px]">
                What shoppers
                <span className="ml-2 font-serif italic font-normal text-[#B28A32]">
                  say.
                </span>
              </h2>
            </div>

            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {product.reviews.slice(0, 3).map((review, index) => (
                <div
                  key={index}
                  className="group rounded-[24px] border border-[#171717]/10 bg-white/55 p-6 shadow-[0_15px_45px_rgba(45,37,22,0.05)] backdrop-blur-xl transition-all duration-500 hover:-translate-y-1 hover:border-[#C7A550]/30 hover:shadow-[0_20px_55px_rgba(45,37,22,0.09)]"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex gap-1">
                      {renderStars(review.rating)}
                    </div>

                    <span className="text-[8px] uppercase tracking-[1.5px] text-[#171717]/30">
                      Verified
                    </span>
                  </div>

                  <p className="mt-5 text-[12px] leading-6 text-[#171717]/60">
                    “{review.comment}”
                  </p>

                  <div className="mt-5 flex items-center justify-between border-t border-[#171717]/10 pt-4">
                    <p className="text-[9px] font-bold uppercase tracking-[1.5px] text-[#171717]">
                      {review.reviewerName}
                    </p>

                    <span className="h-1.5 w-1.5 rounded-full bg-[#C7A550]" />
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Bottom CTA */}
        <div className="mt-20 overflow-hidden rounded-[30px] border border-[#C7A550]/20 bg-[#171717] px-6 py-10 text-center shadow-[0_25px_70px_rgba(23,23,23,0.16)] sm:px-10">
          <div className="relative">
            <div className="pointer-events-none absolute left-1/2 top-1/2 h-48 w-48 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#C7A550]/15 blur-[80px]" />

            <p className="relative text-[8px] font-bold uppercase tracking-[3px] text-[#E7C77B]">
              Velora · Global Brands
            </p>

            <h2 className="relative mt-3 text-[clamp(30px,4vw,48px)] font-medium tracking-[-2px] text-white">
              Find something
              <span className="ml-2 font-serif italic font-normal text-[#E7C77B]">
                you'll love.
              </span>
            </h2>

            <Link
              to="/product"
              className="group relative mt-7 inline-flex cursor-pointer items-center gap-4 overflow-hidden rounded-full bg-[#C7A550] px-7 py-3.5 text-[9px] font-bold uppercase tracking-[2px] text-[#171717] transition-all duration-500 hover:-translate-y-1 hover:bg-[#E7C77B] hover:shadow-[0_15px_40px_rgba(199,165,80,0.25)]"
            >
              <span>Explore More Products</span>

              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-black/10">
                <FiArrowUpRight
                  size={13}
                  className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </span>

              <span className="absolute inset-y-0 -left-full w-1/3 skew-x-[-20deg] bg-white/25 transition-all duration-700 group-hover:left-[120%]" />
            </Link>
          </div>
        </div>
      </div>

      {/* Animations */}
      <style>
        {`
          @keyframes softGlow {
            0%, 100% {
              transform: scale(1);
              opacity: .55;
            }

            50% {
              transform: scale(1.12);
              opacity: .9;
            }
          }

          @keyframes imageLift {
            0%, 100% {
              transform: translateY(0);
            }

            50% {
              transform: translateY(-6px);
            }
          }

          @keyframes floatCard {
            0%, 100% {
              transform: translateY(0);
            }

            50% {
              transform: translateY(-9px);
            }
          }

          @keyframes imageSweep {
            0% {
              left: -60%;
            }

            45%, 100% {
              left: 130%;
            }
          }
        `}
      </style>
    </main>
  );
};

const InfoCard = ({ label, value }) => {
  return (
    <div className="group rounded-[22px] border border-[#171717]/10 bg-white/55 p-5 shadow-[0_12px_35px_rgba(45,37,22,0.05)] backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-[#C7A550]/30 hover:shadow-[0_18px_45px_rgba(45,37,22,0.08)]">
      <div className="flex items-center justify-between">
        <p className="text-[8px] font-bold uppercase tracking-[2px] text-[#171717]/35">
          {label}
        </p>

        <span className="h-1.5 w-1.5 rounded-full bg-[#C7A550] opacity-70 shadow-[0_0_8px_2px_rgba(199,165,80,0.2)]" />
      </div>

      <p className="mt-3 text-[13px] font-semibold capitalize text-[#171717]">
        {value}
      </p>
    </div>
  );
};

export default ProductDetail;