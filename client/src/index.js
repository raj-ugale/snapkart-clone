import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { CartProvider } from "./context/CartContext";
import { SearchProvider } from "./context/SearchContext";
import { AuthProvider } from "./context/AuthContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <CartProvider>
      <SearchProvider>
        <AuthProvider>
          <App />  
        </AuthProvider>
      </SearchProvider>
    </CartProvider>
  </React.StrictMode>
);
