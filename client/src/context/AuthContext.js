// src/context/AuthContext.js
import React, { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  // Load user from localStorage
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const login = (email, password) => {
    
    // Mock check (in real apps, verify from backend)
    if (email && password) {
      // Try to get stored user by email
      const storedUser = JSON.parse(localStorage.getItem("user"));
      if (storedUser && storedUser.email === email && storedUser.password === password) {
        setUser(storedUser);
        return true;
      }
      return false;
    }
    return false;
  };

  const register = (email, password, fullName) => {
    // Mock register (store email and fullName)
    if (email && password && fullName) {
      const newUser = { email, fullName };
      setUser(newUser);
      localStorage.setItem("user", JSON.stringify(newUser));
      return true;
    }
    return false;
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
  };

  return (
    <AuthContext.Provider value={{ user, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
