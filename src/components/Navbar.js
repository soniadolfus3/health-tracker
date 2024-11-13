// src/components/Navbar.js
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaSun, FaMoon } from "react-icons/fa"; // Import icons
import { auth } from "../utils/firebase";
import { signOut, onAuthStateChanged } from "firebase/auth";

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [email, setEmail] = useState(null); // To track user state

  // Check localStorage for dark mode preference (if any)
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setDarkMode(savedTheme === "dark");
    }
  }, []);

  // Track authentication state changes
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setEmail(currentUser); // Set the user if authenticated
    });

    // Cleanup subscription when component unmounts
    return () => unsubscribe();
  }, []);

  // Toggle dark mode and save preference in localStorage
  const toggleDarkMode = () => {
    setDarkMode((prevMode) => {
      const newMode = !prevMode;
      localStorage.setItem("theme", newMode ? "dark" : "light");
      return newMode;
    });
  };

  // Apply the dark theme class to the body element
  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [darkMode]);

  // Logout handler
  const handleLogout = async () => {
    try {
      await signOut(auth);
      alert("Logged out successfully!");
    } catch (error) {
      console.error("Logout Error:", error);
    }
  };

  return (
    <nav className="bg-white dark:bg-darkBackground shadow-md">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo Section */}
        <Link
          to="/"
          className="text-2xl font-bold text-gray-800 dark:text-darkText"
        >
          Health Tracker
        </Link>

        {/* Navbar Links and Auth State */}
        <div className="flex items-center space-x-6">
          <Link
            to="/"
            className="text-lg text-gray-800 dark:text-darkText hover:text-primary"
          >
            Home
          </Link>

          {/* Conditional rendering based on authentication state */}
          {email ? (
            <>
              {/* Display username when logged in */}
              <span className="text-lg text-gray-800 dark:text-darkText">
                Hello, {email.displayName || "User"}
              </span>
              {/* Health Data link */}
              <Link
                to="/health-data"
                className="text-lg text-gray-800 dark:text-darkText hover:text-primary"
              >
                Health Data
              </Link>
              <button
                onClick={handleLogout}
                className="text-lg text-gray-800 dark:text-darkText hover:text-red-600"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link
                to="/signup"
                className="text-lg text-gray-800 dark:text-darkText hover:text-primary"
              >
                Signup
              </Link>
              <Link
                to="/login"
                className="text-lg text-gray-800 dark:text-darkText hover:text-primary"
              >
                Login
              </Link>
            </>
          )}

          {/* Dark Mode Toggle */}
          <button
            onClick={toggleDarkMode}
            className="text-xl text-gray-800 dark:text-darkText hover:text-primary"
          >
            {darkMode ? <FaSun /> : <FaMoon />}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
