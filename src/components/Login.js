// src/pages/Login.js
import React, { useState } from "react";
import { auth } from "../utils/firebase"; // Import auth from firebase
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom"; // Import useNavigate for routing

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate(); // Hook for navigation

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/dashboard"); // Redirect to homepage after successful login
    } catch (err) {
      setError(err.message); // Display error if login fails
    }
  };

  return (
    <div className="min-h-screen bg-white dark:bg-darkBackground text-gray-800 dark:text-darkText transition-colors duration-500">
      <div className="container mx-auto px-6 py-16">
        <h1 className="text-4xl font-bold mb-6">Login</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          {error && <p className="text-red-500">{error}</p>}
          <div>
            <label htmlFor="email" className="block text-lg">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-3 mt-2 border rounded-md dark:bg-gray-700 dark:border-gray-600 dark:text-darkText"
              required
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-lg">
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-3 mt-2 border rounded-md dark:bg-gray-700 dark:border-gray-600 dark:text-darkText"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full py-3 bg-primary text-white rounded-md hover:bg-blue-700"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
