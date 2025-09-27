// src/components/Hero.js
import React from "react";
import { motion } from "framer-motion";
import { heroProducts } from "../data/products";
import { Link } from "react-router-dom";


export default function Hero() {
  return (
    <section className="relative w-full min-h-screen flex flex-col justify-center items-center text-white overflow-hidden py-16 sm:py-20 lg:py-24">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-[linear-gradient(135deg,#1e3a8a,#2563eb,#3b82f6,#60a5fa)] bg-[length:400%_400%] animate-gradient-x z-0"></div>

      <div className="relative z-10 max-w-7xl px-6 sm:px-10 lg:px-16 flex flex-col items-center text-center space-y-8">
        {/* Heading */}
        <motion.h1
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight"
        >
          Discover Amazing Products
        </motion.h1>

        {/* Subheading */}
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-lg sm:text-xl md:text-2xl max-w-2xl text-white/90"
        >
          Shop the latest gadgets, accessories, and lifestyle products — all in one place.
        </motion.p>

        {/* Call-to-action button */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-8 py-3 bg-white text-blue-600 font-semibold rounded-lg shadow-lg hover:bg-gray-100 transition"
        >
          Shop Now
        </motion.button>

        {/* Featured products */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mt-12 w-full grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 md:gap-10 px-4"
        >
          {heroProducts.map((product) => (
            <Link
              to={`/product/${product.id}`}
              key={product.id}
              whileHover={{ scale: 1.05, y: -5 }}
              className="relative bg-white/10 backdrop-blur-md rounded-xl p-6 flex flex-col items-center gap-3 hover:shadow-xl transition cursor-pointer"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-28 h-28 md:w-32 md:h-32 object-contain rounded-lg shadow-md"
              />
              <span className="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-1 rounded">{product.offer}</span>
              <h3 className="text-lg font-semibold">{product.name}</h3>
              <p className="text-sm text-white/70 line-through">₹{product.originalPrice.toLocaleString()}</p>
              <p className="text-lg text-white/90 font-bold">
                ₹{product.price.toLocaleString()}
              </p>
            </Link>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
