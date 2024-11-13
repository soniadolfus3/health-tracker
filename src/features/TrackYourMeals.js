import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const TrackMeals = () => {
  // State to manage the meals and total calories
  const [meals, setMeals] = useState([]);
  const [mealName, setMealName] = useState("");
  const [calories, setCalories] = useState("");
  const [timestamp, setTimestamp] = useState("");
  const [totalCalories, setTotalCalories] = useState(0);

  // Load meals from localStorage on component mount
  useEffect(() => {
    const savedMeals = JSON.parse(localStorage.getItem("meals")) || [];
    setMeals(savedMeals);
    // Recalculate the total calories from the saved meals
    const total = savedMeals.reduce((acc, meal) => acc + meal.calories, 0);
    setTotalCalories(total);
  }, []);

  // Handle form submission to add a meal
  const handleAddMeal = (e) => {
    e.preventDefault();

    if (!mealName || !calories) {
      alert("Please provide both meal name and calories!");
      return;
    }

    const newMeal = {
      name: mealName,
      calories: parseInt(calories),
      timestamp: timestamp || new Date().toLocaleString(), // Use provided timestamp or the current time
    };

    // Update the state with the new meal
    const updatedMeals = [...meals, newMeal];
    setMeals(updatedMeals);

    // Save the meals to localStorage
    localStorage.setItem("meals", JSON.stringify(updatedMeals));

    // Recalculate the total calories
    const total = updatedMeals.reduce((acc, meal) => acc + meal.calories, 0);
    setTotalCalories(total);

    // Reset form fields
    setMealName("");
    setCalories("");
    setTimestamp("");
  };

  return (
    <div>
      {/* Meal Tracking Form */}
      <section className="py-8 px-6">
        <h2 className="text-2xl font-semibold mb-6">Track Your Meals</h2>
        <form onSubmit={handleAddMeal} className="space-y-4">
          <div>
            <label htmlFor="mealName" className="block">
              Meal Name
            </label>
            <input
              type="text"
              id="mealName"
              value={mealName}
              onChange={(e) => setMealName(e.target.value)}
              className="w-full p-2 border rounded"
              placeholder="Enter meal name"
              required
            />
          </div>
          <div>
            <label htmlFor="calories" className="block">
              Calories
            </label>
            <input
              type="number"
              id="calories"
              value={calories}
              onChange={(e) => setCalories(e.target.value)}
              className="w-full p-2 border rounded"
              placeholder="Enter calories"
              required
            />
          </div>
          <div>
            <label htmlFor="timestamp" className="block">
              Time You Ate (Optional)
            </label>
            <input
              type="datetime-local"
              id="timestamp"
              value={timestamp}
              onChange={(e) => setTimestamp(e.target.value)}
              className="w-full p-2 border rounded"
            />
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-400"
          >
            Add Meal
          </button>
        </form>
      </section>

      {/* Display Meals */}
      <section className="py-8 px-6">
        <h2 className="text-2xl font-semibold mb-6">Your Meals</h2>
        <div className="space-y-4">
          {meals.map((meal, index) => (
            <div key={index} className="p-4 bg-gray-100 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold">{meal.name}</h3>
              <p>Calories: {meal.calories}</p>
              <p>Time: {meal.timestamp}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Total Calories Section */}
      <section className="py-8 px-6 bg-gray-200">
        <h2 className="text-2xl font-semibold mb-4">Total Calories Consumed</h2>
        <p className="text-xl">
          You have consumed {totalCalories} calories so far.
        </p>
      </section>

      <Link to="/" className="text-blue-500 hover:text-blue-700">
        Back to Home
      </Link>
    </div>
  );
};

export default TrackMeals;
