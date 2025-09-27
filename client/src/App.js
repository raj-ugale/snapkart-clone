// src/App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import CategoryBar from "./components/CategoryBar";
import BannerCarousel from "./components/BannerCarousel";
import Hero from "./components/Hero";
import CategorySection from "./components/CategorySection";
import Footer from "./components/Footer";
import ProductDetails from "./components/ProductDetails";
import { categories } from "./data/products";
import { SearchProvider } from "./context/SearchContext";
import { CartProvider } from "./context/CartContext";
import ScrollToTop from "./components/ScrollToTop";
import SearchResults from "./components/SearchResults";
import Login from "./components/Login";

function App() {
  return (
    <SearchProvider>
      <CartProvider>
        <Router>
          <ScrollToTop />
          <div className="max-w-auto min-h-screen bg-gray-100">
            <Navbar />
            {/* <ProductList /> */}
            <Routes>
              {/* Home Page */}
                <Route
                  path="/"
                  element={
                    <>
                      <div className="pt-20">
                        <CategoryBar />
                      </div>
                      <BannerCarousel />
                      <Hero />
                      {categories.map((cat) => (
                        <CategorySection
                          key={cat.id}
                          title={cat.title}
                          offer={cat.offer}
                          products={cat.products}
                          subcategories={cat.subcategories}
                        />
                      ))}
                    </>
                  }
                />
                  {/* Login */}
                  <Route path="/login" element={<Login />} />

                  {/* ✅ Product Details Page */}
                <Route path="/products/:id" element={<ProductDetails />} />
                <Route path="/product/:id" element={<ProductDetails />} />
                  {/* Search Results Page */}
                <Route path="/search" element={<SearchResults />} />
            </Routes>
          </div>
          <Footer />
        </Router>
      </CartProvider>
    </SearchProvider>

  );
}

export default App;
