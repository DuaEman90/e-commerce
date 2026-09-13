import React, { useEffect, useState } from "react";
import Cards from "./Cards";

const ProductsApi = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const fetchProducts = async () => {
    try {
      setLoading(true);
      setError("");

      const response = await fetch("https://dummyjson.com/products");

      if (!response.ok) {
        throw new Error("Failed to fetch products");
      }

      const data = await response.json();
      setProducts(data.products || []);
    } catch (err) {
      setError("Unable to load products. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <section className="relative min-h-screen overflow-hidden bg-[#F4F0E8] px-5 py-16 text-[#171717] sm:px-8 lg:px-14 xl:px-20">
      {/* Ambient Glows */}
      <div className="pointer-events-none absolute -right-40 -top-40 h-[520px] w-[520px] rounded-full bg-[#E7C77B]/20 blur-[130px]" />

      <div className="pointer-events-none absolute -bottom-40 -left-40 h-[480px] w-[480px] rounded-full bg-[#C7A550]/10 blur-[120px]" />

      <div className="pointer-events-none absolute left-1/2 top-[35%] h-[400px] w-[400px] -translate-x-1/2 rounded-full bg-[#E7C77B]/10 blur-[140px]" />

      {/* Subtle Texture */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.025] [background-image:radial-gradient(#171717_0.6px,transparent_0.6px)] [background-size:7px_7px]" />

      <div className="relative z-10 mx-auto max-w-[1500px]">
        {/* Centered Header */}
        <div className="mb-12 flex flex-col items-center text-center">
          {/* Eyebrow */}
          <div className="mb-5 flex items-center justify-center gap-3">
            <span className="h-px w-9 bg-gradient-to-r from-transparent to-[#C7A550]" />

            <p className="text-[9px] font-bold uppercase tracking-[3.5px] text-[#A38332]">
              Velora · Global Collection
            </p>

            <span className="h-1.5 w-1.5 rounded-full bg-[#C7A550] shadow-[0_0_12px_4px_rgba(199,165,80,0.3)]" />
          </div>

          {/* Heading */}
          <h1 className="max-w-[800px] text-[clamp(42px,5vw,72px)] font-medium leading-[0.94] tracking-[-3px] text-[#171717]">
            Explore products.
            <span className="mt-2 block font-serif italic font-normal tracking-[-2px] text-[#B28A32]">
              One destination.
            </span>
          </h1>

          {/* Description */}
          <p className="mt-6 max-w-[600px] text-[13px] leading-6 text-[#171717]/60 md:text-[14px]">
            Discover products across beauty, fashion, technology, home,
            groceries and more — brought together into one seamless global
            shopping experience.
          </p>
        </div>

        {/* Loading */}
        {loading && (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
              <div
                key={item}
                className="relative h-[430px] overflow-hidden rounded-[24px] border border-[#171717]/10 bg-white/50 shadow-[0_15px_45px_rgba(45,37,22,0.06)]"
              >
                <div className="absolute inset-0 animate-pulse bg-gradient-to-br from-white/70 via-[#E7C77B]/10 to-transparent" />

                <div className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full border border-[#C7A550]/30 bg-[#C7A550]/10 text-lg font-serif text-[#A38332]">
                    V
                  </div>

                  <p className="mt-3 text-[8px] font-semibold uppercase tracking-[2px] text-[#171717]/35">
                    Loading
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Error */}
        {!loading && error && (
          <div className="flex min-h-[350px] items-center justify-center">
            <div className="w-full max-w-md rounded-[28px] border border-[#171717]/10 bg-white/65 p-10 text-center shadow-[0_20px_60px_rgba(45,37,22,0.08)] backdrop-blur-xl">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#C7A550]/10 text-xl font-serif text-[#A38332]">
                V
              </div>

              <h2 className="mt-5 text-xl font-medium text-[#171717]">
                Something went wrong
              </h2>

              <p className="mt-2 text-sm text-[#171717]/55">
                {error}
              </p>

              <button
                onClick={fetchProducts}
                className="mt-6 cursor-pointer rounded-full bg-[#171717] px-6 py-3 text-[9px] font-bold uppercase tracking-[2px] text-[#F7F2E8] shadow-[0_10px_30px_rgba(23,23,23,0.15)] transition-all duration-300 hover:-translate-y-1 hover:bg-[#C7A550] hover:text-[#171717] hover:shadow-[0_15px_35px_rgba(199,165,80,0.25)]"
              >
                Try Again
              </button>
            </div>
          </div>
        )}

        {/* Products */}
        {!loading && !error && products.length > 0 && (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {products.map((product) => (
              <Cards key={product.id} product={product} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default ProductsApi;