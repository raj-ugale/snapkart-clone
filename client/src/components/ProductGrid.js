import React from "react";
import ProductCard from "./ProductCard";
import products  from "../data/products";
import {heroproducts} from "../data/products";

const excludedIds = ["hero-1", "hero-2", "hero-3", "hero-4"];

const filteredProducts = heroproducts.filter(
  (product) => !excludedIds.includes(product.id)
);

const girdProducts = products.filter(p => !p.featured)

return (
  <div className="grid grid-cols-2 ">
    {filteredProducts.map((product) => (
      <ProductCard key={product.id} product={product} />
    ))}
  </div>
);

export default function ProductGrid() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      {Object.keys(categories).map((category) => (
        <div key={category} className="mb-12">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-gray-800">{category}</h2>
            <button className="text-blue-600 hover:underline">
              See More →
            </button>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {categories[category].map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
