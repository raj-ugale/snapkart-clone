// src/components/ProductList.js
import React from "react";
import { useSearch } from "../context/SearchContext";
import { products } from "../data/products";
import ProductCard from "./ProductCard";

export default function ProductList() {
  const { searchTerm } = useSearch();

  // ✅ Only filter if searchTerm is not empty
  const filteredProducts = searchTerm
    ? products.filter((product) =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : [];

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
      {searchTerm && filteredProducts.length > 0 ? (
        filteredProducts.map((p) => (
          <ProductCard
            key={p.id}
            name={p.name}
            image={p.image}
            offer={p.offer}
            price={p.price}
            originalPrice={p.originalPrice}
            rating={p.rating}
          />
        ))
      ) : searchTerm ? (
        <p className="text-gray-500 col-span-full text-center">
          No products found
        </p>
      ) : (
        <p className="text-gray-400 col-span-full text-center">
          
        </p>
      )}
    </div>
  );
}
