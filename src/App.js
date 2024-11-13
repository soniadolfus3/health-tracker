// src/App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Signup from "./components/Signup";
import Login from "./components/Login";
import HealthData from "./components/HealthData";
import Dashboard from "./components/Dashboard";
import TrackYourMeals from "./features/TrackYourMeals";
import FitnessGoals from "./features/FitnessGoals";
import MentalHealthTracking from "./features/MentalHealthTracking";

const App = () => {
  return (
    <Router>
      <Navbar />
      <div className="container mx-auto mt-8">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/track-your-meals" element={<TrackYourMeals />} />
          <Route path="/fitness-goals" element={<FitnessGoals />} />
          <Route
            path="/mental-health-tracking"
            element={<MentalHealthTracking />}
          />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/health-data" element={<HealthData />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
