// src/components/Footer.js
import React from "react";
import { Instagram, Linkedin, Facebook } from "lucide-react";

export default function Footer() {
  return (
    <footer className="backdrop-blur-md bg-gray-900/80 text-gray-200  shadow-lg border-t border-gray-700/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">

          {/* Logo & Description */}
          <div>
            <h2 className="text-2xl font-bold text-white mb-2">Snapkart</h2>
            <p className="text-gray-400 text-sm">
              Your one-stop shop for everything you need. Electronics, Fashion, Home & more!
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-2">Quick Links</h3>
            <ul className="space-y-1 text-gray-400 text-sm">
              <li><a href="/" className="hover:text-white transition">Home</a></li>
              <li><a href="/" className="hover:text-white transition">Shop</a></li>
              <li><a href="/" className="hover:text-white transition">About Us</a></li>
              <li><a href="/" className="hover:text-white transition">Contact</a></li>
            </ul>
          </div>

          {/* Customer Care */}
          <div>
            <h3 className="text-white font-semibold mb-2">Customer Care</h3>
            <ul className="space-y-1 text-gray-400 text-sm">
              <li><a href="/" className="hover:text-white transition">Order Tracking</a></li>
              <li><a href="/" className="hover:text-white transition">Returns & Refunds</a></li>
              <li><a href="/" className="hover:text-white transition">Shipping Info</a></li>
              <li><a href="/" className="hover:text-white transition">FAQs</a></li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-white font-semibold mb-2">Follow Us</h3>
            <div className="flex gap-4">
              <a href="/" className="hover:text-white transition"><Instagram size={20} /></a>
              <a href="/" className="hover:text-white transition">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M18 2h3l-7 9 8 11h-7l-5-7-5 7H3l7-9L2 2h7l4.5 6L18 2z"/>
                </svg></a>
              <a href="/" className="hover:text-white transition"><Linkedin size={20} /></a>
              <a href="/" className="hover:text-white transition"><Facebook size={20} /></a>
            </div>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="mt-8 text-center text-gray-400 text-xs max-w-2xl mx-auto">
          <p>
            This project is created solely for educational and portfolio purposes. 
            All product names, images, and logos are the property of their respective owners. 
            No copyright infringement is intended. This project is not intended for 
            commercial use or deployment.
          </p>
        </div>

        {/* Divider & Copyright */}
        <div className="border-t border-gray-700 mt-6 pt-4 text-center text-gray-500 text-sm">
          &copy; {new Date().getFullYear()} Snapkart. All rights reserved.
        </div>

        {/* Credit */}
        <div className="mt-2 text-center text-gray-400 text-sm">
          Made by <a href="/" className="font-semibold hover:text-white underline">Raj Ugale</a>
        </div>
      </div>
    </footer>
  );
}
