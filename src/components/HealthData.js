// src/components/HealthData.js
import React, { useState } from "react";
import { db } from "../utils/firebase";
import { collection, addDoc } from "firebase/firestore";

const HealthData = () => {
  const [steps, setSteps] = useState("");
  const [calories, setCalories] = useState("");
  const [exercise, setExercise] = useState("");
  const [message, setMessage] = useState("");

  const handleAddData = async () => {
    try {
      await addDoc(collection(db, "healthData"), {
        steps,
        calories,
        exercise,
        timestamp: new Date(),
      });
      setMessage("Data added successfully!");
    } catch (error) {
      setMessage("Error adding data!");
    }
  };

  return (
    <div className="container mx-auto p-6 bg-white dark:bg-darkBackground">
      <h1 className="text-2xl font-bold text-gray-800 dark:text-darkText mb-4">
        Track Your Health
      </h1>
      <div>
        <label htmlFor="steps" className="block">
          Steps
        </label>
        <input
          type="number"
          id="steps"
          value={steps}
          onChange={(e) => setSteps(e.target.value)}
          className="w-full p-3 mt-2 border rounded-md dark:bg-gray-700 dark:border-gray-600 dark:text-darkText"
        />
      </div>
      <div>
        <label htmlFor="calories" className="block">
          Calories Burned
        </label>
        <input
          type="number"
          id="calories"
          value={calories}
          onChange={(e) => setCalories(e.target.value)}
          className="w-full p-3 mt-2 border rounded-md dark:bg-gray-700 dark:border-gray-600 dark:text-darkText"
        />
      </div>
      <div>
        <label htmlFor="exercise" className="block">
          Exercise Type
        </label>
        <input
          type="text"
          id="exercise"
          value={exercise}
          onChange={(e) => setExercise(e.target.value)}
          className="w-full p-3 mt-2 border rounded-md dark:bg-gray-700 dark:border-gray-600 dark:text-darkText"
        />
      </div>
      <button
        onClick={handleAddData}
        className="mt-4 py-3 px-6 bg-primary text-white rounded-md hover:bg-blue-700"
      >
        Add Data
      </button>
      {message && <p className="mt-4 text-lg text-green-500">{message}</p>}
    </div>
  );
};

export default HealthData;
