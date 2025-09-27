// src/components/CartDrawer.js
import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { useCart } from "../context/CartContext";


export default function CartDrawer({ isOpen, onClose }) {
  const { cart, getCartTotal, decrementQuantity, incrementQuantity } = useCart();

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Overlay */}
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-50 z-40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose} // ✅ close cart when clicking outside
          />

          {/* Drawer */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.3 }}
            className="fixed top-0 right-0 w-80 h-full bg-white shadow-lg z-50 flex flex-col"
          >
            {/* Header */}
            <div className="flex justify-between items-center p-4 border-b">
              <h2 className="text-lg font-bold text-gray-800">Your Cart</h2>
              <button
                onClick={onClose}
                className="text-gray-600 hover:text-black transition"
              >
                < X size={22} strokeWidth={2} />
              </button>
            </div>

            {/* Cart Items */}
            <div className="p-4 flex-1 overflow-y-auto space-y-4">
              {cart.length === 0 ? (
                <p className="text-gray-500">Cart is empty</p>
              ) : (
                cart.map((item) => (
                  <div
                    key={item.id}
                    className="flex items-center justify-between border-b pb-2"
                  >
                    <div>
                      <p className="font-medium text-gray-800">{item.name}</p>
                      <p className="text-sm text-gray-500">
                        Qty: {item.quantity || 1} × ₹{item.price}
                      </p>
                    </div>
                    <div className="flex items-center space-x-2">
                      <button
                        onClick={() => decrementQuantity(item.id)}
                        className="w-8 h-8 flex items-center justify-center bg-gray-200 rounded hover:bg-gray-300"
                      >
                        -
                      </button>
                      <span>{item.quantity}</span>
                      <button
                        onClick={() => incrementQuantity(item.id)}
                        className="w-8 h-8 flex items-center justify-center bg-gray-200 rounded hover:bg-gray-300"
                      >
                        +
                      </button>
                    </div>
                  </div>
                ))
              )}
            </div>
            
            {/* Cart Total */}
            {cart.length > 0 && (
              <div className="p-4 border-t bg-gray-50 space-y-3">
                <p className="text-gray-800 text-lg font-semibold ">
                  Total: ₹{getCartTotal()}
                </p>
              </div>
            )}
            {/* Footer */}
            {cart.length > 0 && (
              <div className="p-4 border-t">
                <button
                  className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700"
                  onClick={() => alert("Proceed to Checkout")}
                >
                  Checkout
                </button>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
