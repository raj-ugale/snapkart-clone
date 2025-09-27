// src/components/Navbar.js
import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { ShoppingCart, Headset, Search, X } from "lucide-react";
import CartDrawer from "./CartDrawer";
import { useCart } from "../context/CartContext";
import { useSearch } from "../context/SearchContext";
import { products } from "../data/products";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [mobileSearchOpen, setMobileSearchOpen] = useState(false);
  const { cart } = useCart();
  const [isCartOpen, setIsCartOpen] = useState(false);

  const { searchTerm, setSearchTerm } = useSearch();
  const navigate = useNavigate();
  
  // user login
  const { user, logout } = useAuth();
  

  // show/hide suggestions locally (so we can keep the input value in context)
  const [showSuggestions, setShowSuggestions] = useState(false);

  // wrapper ref used to detect outside clicks and not abruptly hide suggestions when clicking a suggestion
  const wrapperRef = useRef(null);

  // filtered suggestions (limit to top 8)
  const filteredSuggestions = searchTerm
    ? products
        .filter((p) =>
          p.name.toLowerCase().includes(searchTerm.toLowerCase())
        )
        .slice(0, 8)
    : [];

  useEffect(() => {
    function handleClickOutside(e) {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target)) {
        setShowSuggestions(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // typing => update global searchTerm and show suggestions
  const onInputChange = (e) => {
    setSearchTerm(e.target.value);
    setShowSuggestions(true);
  };

  // Enter => go to /search (only when non-empty)
  const onInputKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      if (searchTerm.trim() !== "") {
        setShowSuggestions(false);
        navigate("/search");
      }
    }
  };

  // clicking suggestion: use onMouseDown to avoid input blur hiding the dropdown before handler runs
  const onSuggestionClick = (p) => {
    setSearchTerm(p.name);
    setShowSuggestions(false);
    navigate("/search");
  };

  return (
    <>
      <motion.nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-md">
        <div className="bg-blue-900 shadow-lg/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center h-16 md:h-18 justify-between gap-4">

              {/* LEFT - Logo */}
              <div className="flex items-center gap-3">
                <a href="/" className="text-white text-lg md:text-xl font-extrabold tracking-wide">
                  Snapkart
                </a>
              </div>

              {/* CENTER - Search Panel (desktop) */}
              <div className="flex-1 hidden md:flex items-center justify-center mx-8" ref={wrapperRef}>
                <div className="w-full max-w-2xl relative">
                  <div className="text-black flex shadow-sm rounded-lg overflow-hidden bg-white/90">
                    <input
                      type="text"
                      placeholder="Search products, brands, categories..."
                      className="flex-1 px-4 py-2 placeholder-gray-600 focus:outline-none text-sm md:text-base"
                      value={searchTerm}
                      onChange={onInputChange}
                      onKeyDown={onInputKeyDown}
                      onFocus={() => setShowSuggestions(true)}
                      aria-label="Search products"
                    />
                    <button
                      onClick={() => {
                        if (searchTerm.trim() !== "") {
                          setShowSuggestions(false);
                          navigate("/search");
                        }
                      }}
                      className="px-4 py-2 bg-black/90 text-white flex items-center gap-2 hover:scale-105 transition"
                      aria-label="Search button"
                    >
                      <Search size={16} />
                      <span className="text-sm font-semibold">Search</span>
                    </button>
                  </div>

                  {/* Suggestions dropdown */}
                  {showSuggestions && searchTerm && (
                    <div className="absolute left-0 right-0 mt-2 bg-white border rounded-md shadow-lg max-h-64 overflow-y-auto z-50">
                      {filteredSuggestions.length > 0 ? (
                        filteredSuggestions.map((p) => (
                          <div
                            key={p.id}
                            // onMouseDown used to avoid blur hiding the dropdown before click handler runs
                            onMouseDown={(e) => {
                              e.preventDefault();
                              onSuggestionClick(p);
                            }}
                            className="px-4 py-3 hover:bg-gray-100 cursor-pointer flex items-center gap-3"
                          >
                            <img src={p.image} alt={p.name} className="w-10 h-10 object-contain" />
                            <div className="text-sm">
                              <div className="font-medium text-gray-800">{p.name}</div>
                            </div>
                          </div>
                        ))
                      ) : (
                        <div className="px-4 py-3 text-sm text-gray-500">No results</div>
                      )}
                    </div>
                  )}
                </div>
              </div>

              {/* RIGHT - Actions */}
              <div className="flex items-center gap-3 md:gap-6">
                <div className="hidden sm:flex items-center gap-1 text-white/90 px-3 py-1 rounded-md">
                  <Headset size={18} />
                  <span className="text-sm">Support</span>
                </div>

                <motion.button
                  whileHover={{ scale: 1.08 }}
                  className="relative flex items-center justify-center w-10 h-10 rounded-md bg-white/10 hover:bg-white/20 text-white transition"
                  onClick={() => setIsCartOpen(true)}
                >
                  <ShoppingCart size={18} />
                  <span className="absolute -top-2 -right-2 bg-amber-400 text-black text-[10px] font-bold px-1.5 py-0.5 rounded-full">
                    {cart.length}
                  </span>
                </motion.button>
                
                {/* User dropdown */}
                <div className="relative">
                  {user ? (
                    <div className="group relative">
                      <button className="flex flex-col items-start text-white font-medium focus:outline-none">
                        <span className="text-xs text-gray-300">Hey</span>
                        <span className="text-sm font-semibold">{user.fullName || user.email}</span>
                        <svg
                          className="w-4 h-4 ml-1 text-white absolute right-[-20px] top-5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24" 
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      </button>

                      {/* Dropdown */}
                      <div className="absolute right-0 mt-2 w-40 bg-white text-gray-800 rounded-md shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 z-50">
                        <button
                          onClick={logout}
                          className="block w-full text-left px-4 py-2 hover:bg-gray-100 rounded-md"
                        >
                          Logout
                        </button>
                      </div>
                    </div>
                  ): (
                    <div className="text-white">
                      <Link
                        to="/login"
                        className="text-sm hidden sm:flex items-center gap-1 text-white/90 px-3 py-1 rounded-md"
                      >
                        Login
                      </Link>
                    </div>
                  )}
                </div>

                {/* Mobile search toggle */}
                <motion.button
                  whileTap={{ scale: 0.95 }}
                  className="sm:hidden flex items-center justify-center w-10 h-10 rounded-md bg-white/10 hover:bg-white/20 text-white transition"
                  onClick={() => setMobileSearchOpen((s) => !s)}
                >
                  {mobileSearchOpen ? <X size={18} /> : <Search size={18} />}
                </motion.button>
              </div>
            </div>

            {/* MOBILE SEARCH BAR (and suggestions) */}
            {mobileSearchOpen && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.18 }}
                className="md:hidden mt-3 pb-3 px-4"
              >
                <div className="relative">
                  <div className="flex w-full items-center rounded-lg overflow-hidden bg-white/90 shadow-sm">
                    <input
                      className="flex-1 px-3 py-2 text-sm placeholder-gray-600 focus:outline-none"
                      placeholder="Search products..."
                      value={searchTerm}
                      onChange={onInputChange}
                      onKeyDown={onInputKeyDown}
                      onFocus={() => setShowSuggestions(true)}
                    />
                    <button
                      className="px-3 py-2 bg-black/90 text-white"
                      onClick={() => {
                        if (searchTerm.trim() !== "") {
                          setShowSuggestions(false);
                          navigate("/search");
                        }
                      }}
                    >
                      <Search size={16} />
                    </button>
                  </div>

                  {/* mobile suggestions */}
                  {showSuggestions && searchTerm && (
                    <div className="absolute left-0 right-0 mt-2 bg-white border rounded-md shadow-lg max-h-64 overflow-y-auto z-50">
                      {filteredSuggestions.length > 0 ? (
                        filteredSuggestions.map((p) => (
                          <div
                            key={p.id}
                            onMouseDown={(e) => {
                              e.preventDefault();
                              onSuggestionClick(p);
                            }}
                            className="px-4 py-3 hover:bg-gray-100 cursor-pointer flex items-center gap-3"
                          >
                            <img src={p.image} alt={p.name} className="w-10 h-10 object-contain" />
                            <div className="text-sm">
                              <div className="font-medium text-gray-800">{p.name}</div>
                              <div className="text-xs text-gray-500">₹{p.price} • {p.offer}</div>
                            </div>
                          </div>
                        ))
                      ) : (
                        <div className="px-4 py-3 text-sm text-gray-500">No results</div>
                      )}
                    </div>
                  )}
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </motion.nav>

      {/* Cart Drawer */}
      <CartDrawer isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </>
  );
}
