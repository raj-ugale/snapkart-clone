// src/components/SearchResults.js
import React, { useEffect } from "react";
import { useSearch } from "../context/SearchContext";
import { products } from "../data/products";
import { useNavigate } from "react-router-dom";
import StarRating from "./StarRating";

export default function SearchResults() {
  const { searchTerm } = useSearch();
  const navigate = useNavigate();

  // If no search term, automatically go back to home (so results "disappear")
  useEffect(() => {
    if (!searchTerm || searchTerm.trim() === "") {
      // navigate back to previous page if possible; otherwise go to homepage
      if (window.history.length > 1) {
        navigate(-1);
      } else {
        navigate("/");
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchTerm]);

  if (!searchTerm) return null; // safety guard (component will quickly navigate away)

  const filteredProducts = products.filter((p) =>
    p.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="pt-24 px-6 max-w-6xl mx-auto mt-6">
      <h2 className="text-xl font-semibold mb-4">
        Search results for: <span className="text-blue-600">{searchTerm}</span>
      </h2>

      {filteredProducts.length > 0 ? (
        <div className="space-y-4">
          {filteredProducts.map((p) => (
            <div
              key={p.id}
              onClick={() => navigate(`/products/${p.id}`)}
              className="flex gap-4 bg-white p-4 rounded-lg shadow hover:shadow-md cursor-pointer"
            >
              <img
                src={p.image}
                alt={p.name}
                className="w-28 h-28 object-contain"
              />
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-gray-800">{p.name}</h3>
                <p className="text-sm text-gray-600">{<StarRating rating={p.rating}/>}</p>
                <div className="flex items-center gap-3 mt-2">
                  <span className="text-xl font-bold text-green-700">₹{p.price}</span>
                  <span className="line-through text-gray-500">₹{p.originalPrice}</span>
                  <span className="text-red-500 font-semibold">{p.offer}</span>
                </div>
                <span className="text-gray-500">{p.shortDescription}</span>
                <p className="text-gray-600 text-sm mt-2">Best deal on {p.name}. Limited stock available</p>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-gray-500 text-center">No products found for "{searchTerm}"</p>
      )}
    </div>
  );
}
