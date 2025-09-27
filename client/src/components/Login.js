import React, { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const AuthPage = () => {
  const { login, register } = useAuth();
  const [isLogin, setIsLogin] = useState(true); // toggle between login/register
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fullName, setFullName] = useState(""); // new state for full name
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    let success = false;

    if (isLogin) {
      success = login(email, password);
    } else {
      success = register(email, password, fullName); // pass fullName to register
    }

    if (success) {
      navigate("/");
    } else {
      alert(isLogin ? "Invalid credentials" : "Failed to register");
    }
  };

  return (
    <div className="pt-20 flex items-center justify-center min-h-screen bg-gray-200">
      <div className="bg-white/60 backdrop-blur-md p-8 rounded-2xl shadow-xl w-full max-w-md border border-white/30">

        {/* Header Tabs */}
        <div className="flex justify-between mb-6">
          <button
            onClick={() => setIsLogin(true)}
            className={`w-1/2 py-2 rounded-l-lg font-semibold ${
              isLogin ? "bg-blue-500 text-white hover:bg-blue-700" : "bg-gray-100 text-gray-700"
            }`}
          >
            Login
          </button>
          <button
            onClick={() => setIsLogin(false)}
            className={`w-1/2 py-2 rounded-r-lg font-semibold ${
              !isLogin ? "bg-blue-500 text-white hover:bg-blue-700" : "bg-gray-100 text-gray-700"
            }`}
          >
            Register
          </button>
        </div>

        {/* Title */}
        <h2 className="text-blue-500 text-2xl font-bold text-center mb-4 hover:text-blue-700">
          {isLogin ? "Welcome Back" : "Create Account"}
        </h2>
        <p className="text-gray-500 text-center mb-6">
          {isLogin
            ? "Login to continue shopping with us"
            : "Join us today and start shopping smarter"}
        </p>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4 text-blue-800">
          {!isLogin && (
            <input
              type="text"
              placeholder="Full Name"
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              required
            />
          )}
          <input
            type="email"
            placeholder="Email"
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button
            type="submit"
            className={`w-full py-2 rounded-lg text-white font-semibold transition ${
              isLogin
                ? "bg-blue-500 hover:bg-blue-600"
                : "bg-blue-500 hover:bg-blue-600"
            }`}
          >
            {isLogin ? "Login" : "Register"}
          </button>
        </form>

        {/* Switch Link */}
        <p className="text-center text-gray-600 mt-6">
          {isLogin ? "Don’t have an account? " : "Already have an account? "}
          <button
            onClick={() => setIsLogin(!isLogin)}
            className="text-blue-500 font-semibold hover:underline"
          >
            {isLogin ? "Register" : "Login"}
          </button>
        </p>
      </div>
    </div>
  );
};

export default AuthPage;
