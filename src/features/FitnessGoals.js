import React, { useState, useEffect } from "react";

const FitnessGoals = () => {
  // States to manage fitness goals, workouts, and progress
  const [goal, setGoal] = useState("");
  const [goalType, setGoalType] = useState(""); // Weight, Distance, or Time
  const [targetValue, setTargetValue] = useState(""); // The target value for goal
  const [workouts, setWorkouts] = useState([]);
  const [workoutType, setWorkoutType] = useState("");
  const [workoutDuration, setWorkoutDuration] = useState("");
  const [workoutCalories, setWorkoutCalories] = useState("");
  const [totalProgress, setTotalProgress] = useState(0); // Track total progress

  // Load goals and workouts from localStorage
  useEffect(() => {
    const savedGoals = JSON.parse(localStorage.getItem("fitnessGoals")) || [];
    const savedWorkouts = JSON.parse(localStorage.getItem("workouts")) || [];
    setWorkouts(savedWorkouts);
    // Initialize goal if any saved goal exists
    if (savedGoals.length > 0) {
      setGoal(savedGoals[0].goal);
      setGoalType(savedGoals[0].goalType);
      setTargetValue(savedGoals[0].targetValue);
    }

    // Calculate the progress based on the workouts
    calculateProgress(savedWorkouts);
  }, []);

  // Function to calculate progress
  const calculateProgress = (workouts) => {
    let progress = 0;
    workouts.forEach((workout) => {
      if (goalType === "Weight") {
        progress += workout.weightLoss || 0; // Calculate weight loss progress
      } else if (goalType === "Distance") {
        progress += workout.distance || 0; // Calculate distance progress
      } else if (goalType === "Time") {
        progress += workout.duration || 0; // Calculate time progress
      }
    });
    setTotalProgress(progress);
  };

  // Handle goal submission
  const handleGoalSubmit = (e) => {
    e.preventDefault();
    const fitnessGoal = {
      goal,
      goalType,
      targetValue,
    };
    // Save the goal to localStorage
    localStorage.setItem("fitnessGoals", JSON.stringify([fitnessGoal]));
    alert("Goal set successfully!");
  };

  // Handle workout submission
  const handleWorkoutSubmit = (e) => {
    e.preventDefault();
    if (!workoutType || !workoutDuration || !workoutCalories) {
      alert("Please fill all fields!");
      return;
    }

    const newWorkout = {
      workoutType,
      duration: parseInt(workoutDuration),
      calories: parseInt(workoutCalories),
      weightLoss: goalType === "Weight" ? parseInt(workoutCalories) / 1000 : 0, // Example for weight loss
      distance: goalType === "Distance" ? parseInt(workoutDuration) : 0, // Example for distance
    };

    const updatedWorkouts = [...workouts, newWorkout];
    setWorkouts(updatedWorkouts);
    localStorage.setItem("workouts", JSON.stringify(updatedWorkouts));
    calculateProgress(updatedWorkouts);

    // Reset form fields
    setWorkoutType("");
    setWorkoutDuration("");
    setWorkoutCalories("");
  };

  return (
    <div>
      {/* Fitness Goal Form */}
      <section className="py-8 px-6">
        <h2 className="text-2xl font-semibold mb-6">Set Your Fitness Goal</h2>
        <form onSubmit={handleGoalSubmit} className="space-y-4">
          <div>
            <label htmlFor="goal" className="block">
              Goal
            </label>
            <input
              type="text"
              id="goal"
              value={goal}
              onChange={(e) => setGoal(e.target.value)}
              className="w-full p-2 border rounded"
              placeholder="Enter your fitness goal"
              required
            />
          </div>
          <div>
            <label htmlFor="goalType" className="block">
              Goal Type
            </label>
            <select
              id="goalType"
              value={goalType}
              onChange={(e) => setGoalType(e.target.value)}
              className="w-full p-2 border rounded"
              required
            >
              <option value="">Select Goal Type</option>
              <option value="Weight">Weight Loss</option>
              <option value="Distance">Distance</option>
              <option value="Time">Duration</option>
            </select>
          </div>
          <div>
            <label htmlFor="targetValue" className="block">
              Target Value
            </label>
            <input
              type="number"
              id="targetValue"
              value={targetValue}
              onChange={(e) => setTargetValue(e.target.value)}
              className="w-full p-2 border rounded"
              placeholder="Enter your target value"
              required
            />
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-400"
          >
            Set Goal
          </button>
        </form>
      </section>

      {/* Workout Log Form */}
      <section className="py-8 px-6">
        <h2 className="text-2xl font-semibold mb-6">Log Your Workouts</h2>
        <form onSubmit={handleWorkoutSubmit} className="space-y-4">
          <div>
            <label htmlFor="workoutType" className="block">
              Workout Type
            </label>
            <input
              type="text"
              id="workoutType"
              value={workoutType}
              onChange={(e) => setWorkoutType(e.target.value)}
              className="w-full p-2 border rounded"
              placeholder="Enter workout type"
              required
            />
          </div>
          <div>
            <label htmlFor="workoutDuration" className="block">
              Duration (minutes)
            </label>
            <input
              type="number"
              id="workoutDuration"
              value={workoutDuration}
              onChange={(e) => setWorkoutDuration(e.target.value)}
              className="w-full p-2 border rounded"
              placeholder="Enter workout duration"
              required
            />
          </div>
          <div>
            <label htmlFor="workoutCalories" className="block">
              Calories Burned
            </label>
            <input
              type="number"
              id="workoutCalories"
              value={workoutCalories}
              onChange={(e) => setWorkoutCalories(e.target.value)}
              className="w-full p-2 border rounded"
              placeholder="Enter calories burned"
              required
            />
          </div>
          <button
            type="submit"
            className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-400"
          >
            Log Workout
          </button>
        </form>
      </section>

      {/* Progress & Goal Display */}
      <section className="py-8 px-6 bg-gray-100">
        <h2 className="text-2xl font-semibold mb-6">Your Progress</h2>
        <p>
          Goal: {goal} ({goalType}): {targetValue}
        </p>
        <p>
          Progress: {totalProgress}{" "}
          {goalType === "Weight"
            ? "kg"
            : goalType === "Distance"
            ? "miles"
            : "minutes"}
        </p>
        <p>
          Remaining: {targetValue - totalProgress}{" "}
          {goalType === "Weight"
            ? "kg"
            : goalType === "Distance"
            ? "miles"
            : "minutes"}
        </p>
      </section>
    </div>
  );
};

export default FitnessGoals;
