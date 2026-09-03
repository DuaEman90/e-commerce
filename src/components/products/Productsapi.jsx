import React, { useEffect, useState } from "react";
import Cards from "./Cards";

const ProductApis = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const handleProducts = async () => {
    try {
      setLoading(true);
      setError("");

      const response = await fetch("https://dummyjson.com/products");

      if (!response.ok) {
        throw new Error("Failed to fetch products");
      }

      const data = await response.json();

      setProducts(data.products);
    } catch (error) {
      console.error("Error fetching products:", error);
      setError("Something went wrong while loading products.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    handleProducts();
  }, []);

  return (
    <section className="bg-[#FAF9F6] py-20 px-5 md:px-8">
      <div className="max-w-7xl mx-auto">

        {/* ================= HEADER ================= */}
        <div className="text-center max-w-3xl mx-auto mb-16">

          <p className="text-[#B58B45] uppercase tracking-[4px] text-[11px] font-semibold">
            VELORA COLLECTION
          </p>

          <h1 className="mt-4 text-4xl md:text-5xl lg:text-6xl font-light tracking-tight text-[#171717]">
            Curated for
            <span className="italic font-serif text-[#B58B45]">
              {" "}your lifestyle
            </span>
          </h1>

          <p className="mt-5 text-sm md:text-base leading-7 text-[#77736D] max-w-2xl mx-auto">
            Discover thoughtfully selected pieces designed to bring
            elegance, quality and effortless style into your everyday life.
          </p>

          {/* Small decorative line */}
          <div className="flex items-center justify-center gap-3 mt-7">
            <span className="w-12 h-[1px] bg-[#D8C7A9]" />
            <span className="w-1.5 h-1.5 rounded-full bg-[#B58B45]" />
            <span className="w-12 h-[1px] bg-[#D8C7A9]" />
          </div>

        </div>

        {/* ================= LOADING ================= */}
        {loading && (
          <div className="min-h-[450px] flex items-center justify-center">

            <div className="w-full max-w-sm bg-white border border-[#E8E2D9] p-8 text-center shadow-[0_10px_35px_rgba(181,139,69,0.08)]">

              {/* Loader */}
              <div className="flex justify-center mb-6">
                <div className="w-12 h-12 border-2 border-[#E8E2D9] border-t-[#B58B45] rounded-full animate-spin" />
              </div>

              <p className="text-[#B58B45] uppercase tracking-[3px] text-[10px] font-semibold">
                VELORA COLLECTION
              </p>

              <h2 className="mt-3 text-xl font-light text-[#171717]">
                Curating your
                <span className="italic font-serif text-[#B58B45]">
                  {" "}collection
                </span>
              </h2>

              <p className="mt-3 text-xs leading-6 text-[#88837B]">
                Please wait while we bring you our thoughtfully selected pieces.
              </p>

              {/* Decorative Line */}
              <div className="flex items-center justify-center gap-3 mt-6">
                <span className="w-10 h-[1px] bg-[#D8C7A9]" />
                <span className="w-1.5 h-1.5 rounded-full bg-[#B58B45]" />
                <span className="w-10 h-[1px] bg-[#D8C7A9]" />
              </div>

            </div>

          </div>
        )}

        {/* ================= ERROR ================= */}
        {!loading && error && (
          <div className="text-center py-20">

            <p className="text-[#171717] text-lg font-medium">
              {error}
            </p>

            <button
              onClick={handleProducts}
              className="mt-5 bg-[#171717] text-white px-6 py-3 text-sm transition-all duration-300 hover:bg-[#B58B45] hover:-translate-y-0.5"
            >
              Try Again
            </button>

          </div>
        )}

        {/* ================= PRODUCTS ================= */}
        {!loading && !error && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-7">

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

export default ProductApi;