// src/pages/Home.js
import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-indigo-500 via-purple-600 to-pink-600 text-white py-20 px-6 dark:bg-gradient-to-r dark:from-gray-800 dark:via-gray-700 dark:to-gray-600">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-bold leading-tight mb-4">
            Track Your Health, Stay Healthy
          </h1>
          <p className="text-xl mb-8">
            Our health tracker helps you monitor your fitness goals, nutrition,
            and mental well-being. Start your journey to a healthier lifestyle
            today!
          </p>
          <Link
            to="/signup"
            className="bg-yellow-500 text-white py-3 px-8 rounded-lg text-lg font-semibold hover:bg-yellow-400 dark:bg-yellow-300 dark:hover:bg-yellow-400 transition-all duration-300"
          >
            Get Started
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-12 text-gray-800 dark:text-white">
            Features
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12">
            <Link
              to="/track-your-meals"
              className="feature-card p-6 bg-gray-100 rounded-lg shadow-md hover:shadow-lg dark:bg-gray-700 dark:text-white transition-all duration-300"
            >
              <h3 className="text-2xl font-semibold mb-4">Track Your Meals</h3>
              <p>
                Record and monitor your meals, track calories, and improve your
                diet.
              </p>
            </Link>
            
            <Link
              to="/fitness-goals"
              className="feature-card p-6 bg-gray-100 rounded-lg shadow-md hover:shadow-lg dark:bg-gray-700 dark:text-white transition-all duration-300"
            >
              <h3 className="text-2xl font-semibold mb-4">Fitness Goals</h3>
              <p>
                Set personal fitness goals, track workouts, and progress over
                time.
              </p>
            </Link>
            <Link
              to="/mental-health-tracking"
              className="feature-card p-6 bg-gray-100 rounded-lg shadow-md hover:shadow-lg dark:bg-gray-700 dark:text-white transition-all duration-300"
            >
              <h3 className="text-2xl font-semibold mb-4">
                Mental Health Tracking
              </h3>
              <p>
                Track your mood and mental health, and learn how to stay
                balanced.
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="bg-gradient-to-r from-indigo-500 via-purple-600 to-pink-600 text-white py-20 px-6 dark:bg-gradient-to-r dark:from-gray-800 dark:via-gray-700 dark:to-gray-600">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Start Your Health Journey?
          </h2>
          <p className="text-xl mb-8">
            Sign up now and take the first step toward a healthier you.
          </p>
          <Link
            to="/signup"
            className="bg-yellow-500 text-white py-3 px-8 rounded-lg text-lg font-semibold hover:bg-yellow-400 dark:bg-yellow-300 dark:hover:bg-yellow-400 transition-all duration-300"
          >
            Join Now
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
