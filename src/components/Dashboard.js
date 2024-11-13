import React, { useState, useEffect } from "react";

const Dashboard = () => {
  const [userInfo, setUserInfo] = useState({
    name: "",
    gender: "",
    age: "",
    height: "",
    weight: "",
    sickness: "",
    goals: "",
  });

  // To check if the user info is already saved
  useEffect(() => {
    const storedUserInfo = JSON.parse(localStorage.getItem("userInfo"));
    if (storedUserInfo) {
      setUserInfo(storedUserInfo);
    }
  }, []);

  // Handle form input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserInfo((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  // Save user info to localStorage
  const handleSave = () => {
    localStorage.setItem("userInfo", JSON.stringify(userInfo));
    alert("Information saved successfully!");
  };

  return (
    <div className="container mx-auto py-12">
      <h2 className="text-3xl font-bold mb-4">User Dashboard</h2>

      {/* Personal Info Form */}
      <div className="bg-gray-100 p-6 rounded-lg shadow-md mb-12">
        <h3 className="text-2xl font-semibold mb-4">Personal Information</h3>
        <form>
          <div className="mb-4">
            <label className="block text-lg">Name</label>
            <input
              type="text"
              name="name"
              value={userInfo.name}
              onChange={handleChange}
              className="w-full p-3 border rounded-lg"
              placeholder="Enter your name"
            />
          </div>

          <div className="mb-4">
            <label className="block text-lg">Gender</label>
            <select
              name="gender"
              value={userInfo.gender}
              onChange={handleChange}
              className="w-full p-3 border rounded-lg"
            >
              <option value="">Select Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
          </div>

          <div className="mb-4">
            <label className="block text-lg">Age</label>
            <input
              type="number"
              name="age"
              value={userInfo.age}
              onChange={handleChange}
              className="w-full p-3 border rounded-lg"
              placeholder="Enter your age"
            />
          </div>

          <div className="mb-4">
            <label className="block text-lg">Height (cm)</label>
            <input
              type="number"
              name="height"
              value={userInfo.height}
              onChange={handleChange}
              className="w-full p-3 border rounded-lg"
              placeholder="Enter your height"
            />
          </div>

          <div className="mb-4">
            <label className="block text-lg">Weight (kg)</label>
            <input
              type="number"
              name="weight"
              value={userInfo.weight}
              onChange={handleChange}
              className="w-full p-3 border rounded-lg"
              placeholder="Enter your weight"
            />
          </div>

          <div className="mb-4">
            <label className="block text-lg">Ongoing Sickness</label>
            <input
              type="text"
              name="sickness"
              value={userInfo.sickness}
              onChange={handleChange}
              className="w-full p-3 border rounded-lg"
              placeholder="Enter any ongoing sickness (if any)"
            />
          </div>

          <div className="mb-4">
            <label className="block text-lg">Fitness Goals</label>
            <textarea
              name="goals"
              value={userInfo.goals}
              onChange={handleChange}
              className="w-full p-3 border rounded-lg"
              rows="3"
              placeholder="Enter your fitness goals"
            />
          </div>

          <button
            type="button"
            onClick={handleSave}
            className="bg-blue-500 text-white px-8 py-3 rounded-lg text-lg hover:bg-blue-400 transition-all duration-300"
          >
            Save Information
          </button>
        </form>
      </div>

      {/* Display saved user information */}
      <div className="bg-gray-100 p-6 rounded-lg shadow-md">
        <h3 className="text-2xl font-semibold mb-4">Your Information</h3>
        <p>
          <strong>Name:</strong> {userInfo.name || "Not provided"}
        </p>
        <p>
          <strong>Gender:</strong> {userInfo.gender || "Not provided"}
        </p>
        <p>
          <strong>Age:</strong> {userInfo.age || "Not provided"}
        </p>
        <p>
          <strong>Height:</strong> {userInfo.height || "Not provided"} cm
        </p>
        <p>
          <strong>Weight:</strong> {userInfo.weight || "Not provided"} kg
        </p>
        <p>
          <strong>Ongoing Sickness:</strong> {userInfo.sickness || "None"}
        </p>
        <p>
          <strong>Fitness Goals:</strong> {userInfo.goals || "Not set"}
        </p>
      </div>
    </div>
  );
};

export default Dashboard;
