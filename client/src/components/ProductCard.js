// src/components/ProductCard.js
import React from "react";
import StarRating from "./StarRating";
// import { products } from "../data/products";

const ProductCard = ({ name, image, offer, rating }) => {
  console.log("Rating for", name, "is", rating)
  return (
    <div className="bg-white rounded-lg shadow hover:shadow-lg transition p-4 flex flex-col items-center relative">
      {/* Offer Badge */}
      {offer && (
        <span className="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-1 rounded">
          {offer}
        </span>
      )}

      {/* Product Image */}
      <img
        src={image}
        alt={name}
        className="w-32 h-32 object-contain mb-4"
      />
    
      {/* Product Name */}
      <h3 className="text-gray-800 font-medium text-sm text-center">{name}</h3>
      {/* Product rating */}
      <StarRating rating={rating} />
    </div>
  );
};

export default ProductCard;
