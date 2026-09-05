import React, { useEffect, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { ArrowLeft, Star, ShoppingBag, Heart, ArrowUpRight, Shield, RotateCcw, Truck } from "lucide-react";

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [wishlisted, setWishlisted] = useState(false);
  const [addedToCart, setAddedToCart] = useState(false);

  const fetchProductDetail = async () => {
    try {
      setLoading(true);
      setError("");

      const response = await fetch(`https://dummyjson.com/products/${id}`);

      if (!response.ok) {
        throw new Error("Product not found");
      }

      const data = await response.json();
      setProduct(data);
      setSelectedImage(0);
    } catch (err) {
      console.error("Error fetching product:", err);
      setError("Something went wrong while loading the product.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProductDetail();
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [id]);

  const handleAddToCart = () => {
    setAddedToCart(true);
    setTimeout(() => setAddedToCart(false), 2500);
  };

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        size={14}
        className={
          i < Math.floor(rating)
            ? "fill-[#C9A45C] text-[#C9A45C]"
            : i < rating
            ? "fill-[#C9A45C]/50 text-[#C9A45C]"
            : "fill-transparent text-[#D8C7A9]"
        }
        strokeWidth={1.5}
      />
    ));
  };

  /* ===================== LOADING ===================== */
  if (loading) {
    return (
      <section className="bg-[#FAF9F6] min-h-screen flex items-center justify-center px-5">
        <div className="w-full max-w-sm bg-white border border-[#E8E2D9] p-10 text-center shadow-[0_10px_35px_rgba(181,139,69,0.08)]">

          <div className="flex justify-center mb-6">
            <div className="w-12 h-12 border-2 border-[#E8E2D9] border-t-[#B58B45] rounded-full animate-spin" />
          </div>

          <p className="text-[#B58B45] uppercase tracking-[3px] text-[10px] font-semibold">
            VELORA
          </p>

          <h2 className="mt-3 text-xl font-light text-[#171717]">
            Loading
            <span className="italic font-serif text-[#B58B45]"> product</span>
          </h2>

          <p className="mt-3 text-xs leading-6 text-[#88837B]">
            Please wait while we fetch the product details for you.
          </p>

          <div className="flex items-center justify-center gap-3 mt-6">
            <span className="w-10 h-[1px] bg-[#D8C7A9]" />
            <span className="w-1.5 h-1.5 rounded-full bg-[#B58B45]" />
            <span className="w-10 h-[1px] bg-[#D8C7A9]" />
          </div>

        </div>
      </section>
    );
  }

  /* ===================== ERROR ===================== */
  if (error) {
    return (
      <section className="bg-[#FAF9F6] min-h-screen flex items-center justify-center px-5">
        <div className="text-center">

          <p className="text-[#B58B45] uppercase tracking-[3px] text-[10px] font-semibold mb-4">
            OOPS
          </p>

          <h2 className="text-2xl font-light text-[#171717]">
            {error}
          </h2>

          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={fetchProductDetail}
              className="bg-[#171717] text-white px-6 py-3 text-[12px] uppercase tracking-[1.5px] transition-all duration-300 hover:bg-[#B58B45] hover:-translate-y-0.5"
            >
              Try Again
            </button>

            <button
              onClick={() => navigate("/product")}
              className="border border-[#171717] text-[#171717] px-6 py-3 text-[12px] uppercase tracking-[1.5px] transition-all duration-300 hover:border-[#B58B45] hover:text-[#B58B45] hover:-translate-y-0.5"
            >
              Back to Products
            </button>
          </div>

        </div>
      </section>
    );
  }

  /* ===================== PRODUCT DETAIL ===================== */
  const discountedPrice = (
    product.price -
    (product.price * product.discountPercentage) / 100
  ).toFixed(2);

  const allImages = product.images?.length > 0 ? product.images : [product.thumbnail];

  return (
    <section className="bg-[#FAF9F6] min-h-screen">

      {/* ===== BREADCRUMB ===== */}
      <div className="border-b border-[#E8E2D9] bg-white">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10 py-4">
          <div className="flex items-center gap-2 text-[11px] uppercase tracking-[1.5px]">

            <Link
              to="/"
              className="text-[#88837B] hover:text-[#B58B45] transition-colors duration-300"
            >
              Home
            </Link>

            <span className="text-[#D8C7A9]">/</span>

            <Link
              to="/product"
              className="text-[#88837B] hover:text-[#B58B45] transition-colors duration-300"
            >
              Products
            </Link>

            <span className="text-[#D8C7A9]">/</span>

            <span className="text-[#B58B45] line-clamp-1 max-w-[200px]">
              {product.title}
            </span>

          </div>
        </div>
      </div>

      <div className="max-w-[1400px] mx-auto px-6 lg:px-10 py-12">

        {/* ===== BACK BUTTON ===== */}
        <button
          onClick={() => navigate("/product")}
          className="group flex items-center gap-2 text-[11px] uppercase tracking-[2px] text-[#88837B] hover:text-[#B58B45] transition-all duration-300 mb-10"
        >
          <ArrowLeft
            size={15}
            strokeWidth={1.5}
            className="transition-transform duration-300 group-hover:-translate-x-1"
          />
          Back to Collection
        </button>

        {/* ===== MAIN GRID ===== */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 xl:gap-20">

          {/* ===== LEFT: IMAGES ===== */}
          <div className="flex flex-col gap-4">

            {/* Main Image */}
            <div className="relative bg-[#F3F0EA] border border-[#E8E2D9] overflow-hidden aspect-square">

              <img
                src={allImages[selectedImage]}
                alt={product.title}
                className="w-full h-full object-cover transition-all duration-700 ease-out hover:scale-105"
              />

              {/* Discount Badge */}
              <span className="absolute top-5 left-5 bg-[#171717] text-white px-4 py-2 text-[10px] tracking-[1.5px] font-medium">
                -{Math.round(product.discountPercentage)}% OFF
              </span>

              {/* Wishlist */}
              <button
                onClick={() => setWishlisted(!wishlisted)}
                className={`absolute top-5 right-5 w-11 h-11 flex items-center justify-center shadow-sm transition-all duration-300 hover:scale-105 ${
                  wishlisted
                    ? "bg-[#B58B45] text-white"
                    : "bg-white text-[#4A4742] hover:bg-[#B58B45] hover:text-white"
                }`}
              >
                <Heart
                  size={18}
                  strokeWidth={1.5}
                  className={wishlisted ? "fill-white" : ""}
                />
              </button>

            </div>

            {/* Thumbnail Strip */}
            {allImages.length > 1 && (
              <div className="flex gap-3 overflow-x-auto pb-1">
                {allImages.map((img, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`shrink-0 w-20 h-20 border-2 overflow-hidden transition-all duration-300 ${
                      selectedImage === index
                        ? "border-[#B58B45]"
                        : "border-[#E8E2D9] hover:border-[#C9A45C]"
                    }`}
                  >
                    <img
                      src={img}
                      alt={`${product.title} ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            )}

          </div>

          {/* ===== RIGHT: INFO ===== */}
          <div className="flex flex-col">

            {/* Category + ID */}
            <div className="flex items-center justify-between mb-4">
              <p className="text-[10px] uppercase tracking-[3px] text-[#B58B45] font-semibold">
                {product.category}
              </p>
              <span className="text-[10px] text-[#AAA59D] tracking-[1px] uppercase">
                ID #{product.id}
              </span>
            </div>

            {/* Title */}
            <h1 className="text-3xl md:text-4xl font-light text-[#171717] leading-tight">
              {product.title}
            </h1>

            {/* Brand */}
            {product.brand && (
              <p className="mt-2 text-[12px] tracking-[1.5px] uppercase text-[#88837B]">
                by{" "}
                <span className="text-[#B58B45] font-medium">
                  {product.brand}
                </span>
              </p>
            )}

            {/* Decorative Line */}
            <div className="flex items-center gap-3 mt-5">
              <span className="w-10 h-[1px] bg-[#D8C7A9]" />
              <span className="w-1.5 h-1.5 rounded-full bg-[#B58B45]" />
              <span className="w-10 h-[1px] bg-[#D8C7A9]" />
            </div>

            {/* Rating + Reviews */}
            <div className="flex items-center gap-3 mt-5">
              <div className="flex items-center gap-0.5">
                {renderStars(product.rating)}
              </div>
              <span className="text-sm text-[#77736D]">
                {product.rating} / 5
              </span>
              {product.reviews?.length > 0 && (
                <span className="text-[11px] text-[#AAA59D] uppercase tracking-[1px]">
                  ({product.reviews.length} reviews)
                </span>
              )}
            </div>

            {/* Price Block */}
            <div className="mt-6 p-5 bg-white border border-[#E8E2D9]">
              <div className="flex items-end gap-4">
                <div>
                  <p className="text-[9px] uppercase tracking-[1.5px] text-[#AAA59D] mb-1">
                    Sale Price
                  </p>
                  <p className="text-4xl font-semibold text-[#171717]">
                    ${discountedPrice}
                  </p>
                </div>
                <div className="mb-1">
                  <p className="text-[9px] uppercase tracking-[1.5px] text-[#AAA59D] mb-1">
                    Original
                  </p>
                  <p className="text-lg text-[#AAA59D] line-through">
                    ${product.price}
                  </p>
                </div>
                <span className="mb-1 ml-auto bg-[#B58B45]/10 text-[#B58B45] px-3 py-1 text-[11px] uppercase tracking-[1.5px] font-semibold">
                  Save {Math.round(product.discountPercentage)}%
                </span>
              </div>
            </div>

            {/* Description */}
            <p className="mt-6 text-sm leading-7 text-[#77736D]">
              {product.description}
            </p>

            {/* Stock Status */}
            <div className="mt-5 flex items-center gap-2">
              <span
                className={`w-2 h-2 rounded-full ${
                  product.stock > 10
                    ? "bg-green-500"
                    : product.stock > 0
                    ? "bg-[#C9A45C]"
                    : "bg-red-400"
                }`}
              />
              <p className="text-[11px] uppercase tracking-[1.5px] text-[#88837B]">
                {product.stock > 10
                  ? `In Stock (${product.stock} available)`
                  : product.stock > 0
                  ? `Low Stock — only ${product.stock} left`
                  : "Out of Stock"}
              </p>
            </div>

            {/* Divider */}
            <div className="h-[1px] bg-[#EEE9E1] my-7" />

            {/* Quantity + Actions */}
            <div className="flex flex-col sm:flex-row items-stretch gap-3">

              {/* Quantity */}
              <div className="flex items-center border border-[#E8E2D9] bg-white">
                <button
                  onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                  className="w-11 h-12 flex items-center justify-center text-[#171717] text-lg hover:bg-[#F3F0EA] transition-colors duration-200"
                >
                  −
                </button>
                <span className="w-12 text-center text-sm font-medium text-[#171717]">
                  {quantity}
                </span>
                <button
                  onClick={() =>
                    setQuantity((q) => Math.min(product.stock, q + 1))
                  }
                  className="w-11 h-12 flex items-center justify-center text-[#171717] text-lg hover:bg-[#F3F0EA] transition-colors duration-200"
                >
                  +
                </button>
              </div>

              {/* Add to Cart */}
              <button
                onClick={handleAddToCart}
                disabled={product.stock === 0}
                className={`flex-1 flex items-center justify-center gap-2 py-3 text-[12px] uppercase tracking-[1.5px] transition-all duration-300 hover:-translate-y-0.5 ${
                  addedToCart
                    ? "bg-[#B58B45] text-white"
                    : product.stock === 0
                    ? "bg-[#D8C7A9] text-white cursor-not-allowed"
                    : "bg-[#171717] text-white hover:bg-[#B58B45]"
                }`}
              >
                <ShoppingBag size={15} strokeWidth={1.5} />
                {addedToCart ? "Added to Bag ✓" : "Add to Bag"}
              </button>

              {/* Wishlist */}
              <button
                onClick={() => setWishlisted(!wishlisted)}
                className={`w-12 h-12 flex items-center justify-center border transition-all duration-300 ${
                  wishlisted
                    ? "border-[#B58B45] bg-[#B58B45] text-white"
                    : "border-[#E8E2D9] text-[#4A4742] hover:border-[#B58B45] hover:text-[#B58B45]"
                }`}
              >
                <Heart
                  size={17}
                  strokeWidth={1.5}
                  className={wishlisted ? "fill-white" : ""}
                />
              </button>

            </div>

            {/* Trust Badges */}
            <div className="grid grid-cols-3 gap-3 mt-7">

              <div className="flex flex-col items-center gap-2 p-3 bg-white border border-[#E8E2D9] text-center">
                <Truck size={18} strokeWidth={1.5} className="text-[#B58B45]" />
                <p className="text-[9px] uppercase tracking-[1px] text-[#88837B] leading-4">
                  Free Shipping
                </p>
              </div>

              <div className="flex flex-col items-center gap-2 p-3 bg-white border border-[#E8E2D9] text-center">
                <RotateCcw size={18} strokeWidth={1.5} className="text-[#B58B45]" />
                <p className="text-[9px] uppercase tracking-[1px] text-[#88837B] leading-4">
                  Easy Returns
                </p>
              </div>

              <div className="flex flex-col items-center gap-2 p-3 bg-white border border-[#E8E2D9] text-center">
                <Shield size={18} strokeWidth={1.5} className="text-[#B58B45]" />
                <p className="text-[9px] uppercase tracking-[1px] text-[#88837B] leading-4">
                  Secure Pay
                </p>
              </div>

            </div>

            {/* Extra Info */}
            {(product.sku || product.warrantyInformation || product.shippingInformation) && (
              <div className="mt-7 p-5 bg-white border border-[#E8E2D9] flex flex-col gap-3">

                {product.sku && (
                  <div className="flex items-center justify-between text-[11px]">
                    <span className="uppercase tracking-[1.5px] text-[#AAA59D]">SKU</span>
                    <span className="text-[#77736D] font-medium">{product.sku}</span>
                  </div>
                )}

                {product.warrantyInformation && (
                  <div className="flex items-center justify-between text-[11px]">
                    <span className="uppercase tracking-[1.5px] text-[#AAA59D]">Warranty</span>
                    <span className="text-[#77736D] font-medium">{product.warrantyInformation}</span>
                  </div>
                )}

                {product.shippingInformation && (
                  <div className="flex items-center justify-between text-[11px]">
                    <span className="uppercase tracking-[1.5px] text-[#AAA59D]">Shipping</span>
                    <span className="text-[#77736D] font-medium">{product.shippingInformation}</span>
                  </div>
                )}

                {product.returnPolicy && (
                  <div className="flex items-center justify-between text-[11px]">
                    <span className="uppercase tracking-[1.5px] text-[#AAA59D]">Returns</span>
                    <span className="text-[#77736D] font-medium">{product.returnPolicy}</span>
                  </div>
                )}

              </div>
            )}

          </div>
        </div>

        {/* ===== REVIEWS SECTION ===== */}
        {product.reviews?.length > 0 && (
          <div className="mt-20">

            {/* Section Header */}
            <div className="text-center max-w-xl mx-auto mb-12">
              <p className="text-[#B58B45] uppercase tracking-[4px] text-[11px] font-semibold">
                Customer Voices
              </p>
              <h2 className="mt-4 text-3xl font-light text-[#171717]">
                What people
                <span className="italic font-serif text-[#B58B45]"> are saying</span>
              </h2>
              <div className="flex items-center justify-center gap-3 mt-5">
                <span className="w-10 h-[1px] bg-[#D8C7A9]" />
                <span className="w-1.5 h-1.5 rounded-full bg-[#B58B45]" />
                <span className="w-10 h-[1px] bg-[#D8C7A9]" />
              </div>
            </div>

            {/* Review Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {product.reviews.map((review, index) => (
                <div
                  key={index}
                  className="bg-white border border-[#E8E2D9] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#C9A45C] hover:shadow-[0_10px_30px_rgba(181,139,69,0.1)]"
                >

                  {/* Stars */}
                  <div className="flex items-center gap-0.5 mb-4">
                    {renderStars(review.rating)}
                  </div>

                  {/* Comment */}
                  <p className="text-[13px] leading-7 text-[#77736D] italic">
                    "{review.comment}"
                  </p>

                  {/* Divider */}
                  <div className="h-[1px] bg-[#EEE9E1] my-4" />

                  {/* Reviewer */}
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-[12px] font-medium text-[#22201D]">
                        {review.reviewerName}
                      </p>
                      <p className="text-[10px] text-[#AAA59D] mt-0.5">
                        {new Date(review.date).toLocaleDateString("en-US", {
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        })}
                      </p>
                    </div>
                    <span className="text-[10px] uppercase tracking-[1.5px] text-[#B58B45] font-semibold">
                      Verified
                    </span>
                  </div>

                </div>
              ))}
            </div>

          </div>
        )}

        {/* ===== BACK TO COLLECTION CTA ===== */}
        <div className="mt-20 text-center border-t border-[#E8E2D9] pt-14">

          <p className="text-[#B58B45] uppercase tracking-[4px] text-[11px] font-semibold mb-4">
            Continue Shopping
          </p>

          <h3 className="text-2xl md:text-3xl font-light text-[#171717]">
            Explore our full
            <span className="italic font-serif text-[#B58B45]"> collection</span>
          </h3>

          <Link
            to="/product"
            className="group mt-8 inline-flex items-center gap-2 bg-[#171717] text-white px-8 py-4 text-[12px] uppercase tracking-[1.5px] transition-all duration-300 hover:bg-[#B58B45] hover:-translate-y-0.5"
          >
            Back to Collection
            <ArrowUpRight
              size={15}
              strokeWidth={1.7}
              className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </Link>

        </div>

      </div>
    </section>
  );
};

export default ProductDetail;
