// src/pages/ProductDetails.js
import React from "react";
import { useParams } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { products, heroProducts } from "../data/products";
import StarRating from "./StarRating";

export default function ProductDetails() {
  const { id } = useParams();
  const { addToCart } = useCart();

  // Find product by id
  const allProducts = [...products, ...heroProducts];

  console.log("Looking for product with id:", id);
  console.log("All products:", allProducts);
  const product = allProducts.find((p) => p.id.toString() === id);


  
  if (!product) {
    return (
      <div className="pt-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <h2 className="text-2xl font-bold text-red-600">Product not found</h2>
      </div>
    );
  }

  return (
    <div className="bg-white min-h-screen pt-24">
      <div className="max-w-7xl mx-auto bg-white px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Product Image */}
          <div className="flex justify-center rounded-lg p-6">
            <img
              src={product.image} 
              alt={product.name}
              className="w-80 h-80 object-contain"
            />
          </div>

          {/* Product Info */}
          <div>
            <h1 className="text-3xl font-bold text-gray-800 mb-4">
              {product.name}
            </h1>
            <StarRating rating={product.rating}/>
            <p className="text-gray-500 line-through text-lg">
              ₹{product.originalPrice.toLocaleString()}
            </p>
            <p className="text-black font-semibold text-2xl mb-4">
              ₹{product.price.toLocaleString()} ({product.offer})
            </p>
            <button
              onClick={() => addToCart(product)} // ✅ hooked into cart
              className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700"
            >
              Add to Cart
            </button>
            <div>
              <p className="pt-6 text-black font-bold text-2xl">About</p>
              <span className="text-gray-600 font-justify">{product.longDescription}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
