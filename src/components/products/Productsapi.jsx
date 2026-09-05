import React, { useEffect, useState } from "react";
import Cards from "./Cards";

const ProductsApi = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const handleProducts = async () => {
    try {
      setLoading(true);
      setError("");

      const response = await fetch(
        "https://dummyjson.com/products"
      );

      if (!response.ok) {
        throw new Error("Failed to fetch products");
      }

      const data = await response.json();

      setProducts(data.products);
    } catch (error) {
      console.error("Error fetching products:", error);

      setError(
        "Something went wrong while loading products."
      );
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    handleProducts();
  }, []);

  return (
    <section className="bg-[#FAF9F6] px-5 py-20 md:px-8">
      <div className="mx-auto max-w-7xl">

        {/* ================= HEADER ================= */}
        <div className="mx-auto mb-16 max-w-3xl text-center">

          <p className="text-[11px] font-semibold uppercase tracking-[4px] text-[#B58B45]">
            VELORA COLLECTION
          </p>

          <h1 className="mt-4 text-4xl font-light tracking-tight text-[#171717] md:text-5xl lg:text-6xl">
            Curated for
            <span className="font-serif italic text-[#B58B45]">
              {" "}your lifestyle
            </span>
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-[#77736D] md:text-base">
            Discover thoughtfully selected pieces designed to bring
            elegance, quality and effortless style into your everyday life.
          </p>

          {/* Decorative Line */}
          <div className="mt-7 flex items-center justify-center gap-3">
            <span className="h-[1px] w-12 bg-[#D8C7A9]" />

            <span className="h-1.5 w-1.5 rounded-full bg-[#B58B45]" />

            <span className="h-[1px] w-12 bg-[#D8C7A9]" />
          </div>
        </div>

        {/* ================= LOADING ================= */}
        {loading && (
          <div className="flex min-h-[55vh] items-center justify-center">

            <div className="w-full max-w-md rounded-2xl border border-[#E8E1D7] bg-white px-8 py-10 text-center shadow-[0_20px_60px_rgba(23,23,23,0.05)]">

              {/* Velora Logo Mark */}
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full border border-[#D8C7A9]">

                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#FAF9F6]">

                  <span className="font-serif text-lg italic text-[#B58B45]">
                    V
                  </span>

                </div>
              </div>

              {/* Brand */}
              <p className="mt-6 text-[10px] font-semibold uppercase tracking-[4px] text-[#B58B45]">
                VELORA
              </p>

              {/* Heading */}
              <h2 className="mt-3 text-2xl font-light tracking-tight text-[#171717]">
                Preparing something

                <span className="block font-serif italic text-[#B58B45]">
                  beautiful for you
                </span>
              </h2>

              {/* Description */}
              <p className="mx-auto mt-4 max-w-xs text-xs leading-6 text-[#88837B]">
                We're carefully bringing together our collection.
                Just a moment.
              </p>

              {/* Elegant Loader */}
              <div className="mx-auto mt-7 flex items-center justify-center gap-2">

                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#D8C7A9]" />

                <span
                  className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#B58B45]"
                  style={{
                    animationDelay: "150ms",
                  }}
                />

                <span
                  className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#D8C7A9]"
                  style={{
                    animationDelay: "300ms",
                  }}
                />

              </div>

              {/* Bottom Decorative Line */}
              <div className="mx-auto mt-8 flex items-center justify-center gap-3">

                <span className="h-px w-12 bg-[#E5DED4]" />

                <span className="h-1 w-1 rounded-full bg-[#B58B45]" />

                <span className="h-px w-12 bg-[#E5DED4]" />

              </div>

            </div>
          </div>
        )}

        {/* ================= ERROR ================= */}
        {!loading && error && (
          <div className="flex min-h-[45vh] items-center justify-center">

            <div className="w-full max-w-md rounded-2xl border border-[#E5DED4] bg-white px-6 py-10 text-center">

              <p className="text-xs font-semibold uppercase tracking-[3px] text-[#B58B45]">
                Velora Collection
              </p>

              <h2 className="mt-3 text-2xl font-light text-[#171717]">
                Something went wrong
              </h2>

              <p className="mt-3 text-sm leading-6 text-[#77736D]">
                {error}
              </p>

              <button
                onClick={handleProducts}
                className="mt-6 rounded-xl bg-[#171717] px-6 py-3 text-sm font-medium text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#B58B45]"
              >
                Try Again
              </button>

            </div>
          </div>
        )}

        {/* ================= PRODUCTS ================= */}
        {!loading && !error && (
          <div className="grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-4">

            {products.map((product) => (
              <Cards
                key={product.id}
                product={product}
              />
            ))}

          </div>
        )}

      </div>
    </section>
  );
};

export default ProductsApi;