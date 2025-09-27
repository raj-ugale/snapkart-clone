// src/components/CategorySection.js
import React from "react";
import { Link } from "react-router-dom";

export default function CategorySection({ title, offer, products, subcategories }) {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      {/* Section Title */}
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-gray-800">{title}</h2>
        {offer && <span className="text-sm text-blue-600 font-medium">{offer}</span>}
        <button className="text-blue-600 hover:text-blue-800 font-medium text-sm">
          See More
        </button>
      </div>

      {/* Product Grid */}
      {products && (
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {(products || []).map((product) => (
            <Link
              key={product.id}
              // 👇 changed from /product/:id → /products/:productId
              to={`/products/${product.id}`}
              className="bg-white rounded-lg shadow hover:shadow-lg transition transform hover:scale-105 p-4 flex flex-col items-center"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-28 h-28 object-contain mb-4"
              />
              <span className="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-1 rounded">{product.offer}</span>
              <h3 className="text-sm font-medium text-gray-700 text-center">
                {product.name}
              </h3>
              <p className="text-gray-500 line-through text-xs">
                ₹{product.originalPrice.toLocaleString()}
              </p>
              <p className="text-green-600 font-semibold text-sm">
                ₹{product.price.toLocaleString()} 
              </p>
            </Link>
          ))}
        </div>
      )}

      {/* If subcategories exist */}
      {subcategories &&
        subcategories.map((sub) => (
          <div key={sub.id} className="mb-8">
            <h3 className="text-lg font-semibold text-gray-700 mb-4">{sub.title}</h3>
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6">
              {sub.products.map((product) => (
                <Link 
                  key={product.id}
                  to={`/products/${product.id}`}
                  className="bg-white rounded-lg shadow hover:shadow-lg transform hover:scale-105 p-4 flex flex-col items-center"
                >
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-28 h-28 object-contain mb-4"
                  />
                  <span className="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-1 rounded">{product.offer}</span>
                  <h3 className="text-sm font-medium text-gray-700 text-center">
                    {product.name}
                  </h3>
                  <p className="text-gray-500 line-through text-xs">
                    ₹{product.originalPrice.toLocaleString()}
                  </p>
                  <p className="text-green-600 font-semibold text-sm">
                    ₹{product.price.toLocaleString()} 
                  </p>
                </Link>
              ))}
            </div>
          </div>
        ))}
    </div>
  );
}
