import React, { useEffect, useState } from "react";

const ProductsApi = () => {
  const [products, setProducts] = useState([]);

  const handleProducts = async () => {
    try {
      const response = await fetch("https://dummyjson.com/products");
      const data = await response.json();
      setProducts(data.products);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  useEffect(() => {
    handleProducts();
  }, []);

  return (
    <section className="bg-[#F9F9F9] py-16 px-6">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-12">
          <p className="text-orange-500 uppercase tracking-[3px] text-sm font-semibold">
            Lunéa Collection
          </p>

          <h1 className="text-4xl md:text-5xl font-bold text-[#040813] mt-3">
            Explore Our Products
          </h1>

          <p className="text-gray-500 max-w-2xl mx-auto mt-4">
            Discover carefully selected products designed to bring quality,
            style and comfort into your everyday life.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-7">
          {products.map((product) => (
            <div
              key={product.id}
              className="group bg-white rounded-2xl overflow-hidden border border-gray-100 hover:shadow-xl transition-all duration-300"
            >
              {/* Image */}
              <div className="relative h-64 bg-gray-100 overflow-hidden">
                <img
                  src={product.thumbnail}
                  alt={product.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />

                {/* Discount Badge */}
                <span className="absolute top-4 left-4 bg-[#040813] text-white text-xs font-semibold px-3 py-1.5 rounded-full">
                  -{Math.round(product.discountPercentage)}%
                </span>

                {/* Wishlist */}
                <button className="absolute top-4 right-4 w-9 h-9 bg-white rounded-full flex items-center justify-center shadow-sm hover:bg-orange-500 hover:text-white transition">
                  ♡
                </button>
              </div>

              {/* Product Info */}
              <div className="p-5">

                <p className="text-xs uppercase tracking-wider text-orange-500 font-medium">
                  {product.category}
                </p>

                <h2 className="text-lg font-semibold text-[#040813] mt-2 line-clamp-1">
                  {product.title}
                </h2>

                <p className="text-sm text-gray-500 mt-2 line-clamp-2 leading-6">
                  {product.description}
                </p>

                {/* Rating */}
                <div className="flex items-center gap-2 mt-4">
                  <span className="text-yellow-500">★</span>
                  <span className="text-sm font-medium text-gray-700">
                    {product.rating}
                  </span>
                </div>

                {/* Price + Button */}
                <div className="flex items-center justify-between mt-5">
                  <div>
                    <p className="text-xs text-gray-400">Price</p>

                    <p className="text-xl font-bold text-[#040813]">
                      ${product.price}
                    </p>
                  </div>

                  <button className="bg-[#040813] text-white px-4 py-2.5 rounded-full text-sm font-medium hover:bg-orange-500 transition-all duration-300">
                    Add to Cart
                  </button>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ProductsApi;