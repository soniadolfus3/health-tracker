import React, { useState, useEffect } from "react";

const MentalHealthTracking = () => {
  // States to manage mood tracking, notes, and progress
  const [mood, setMood] = useState("");
  const [moodNote, setMoodNote] = useState("");
  const [moodLogs, setMoodLogs] = useState([]);
  const [moodAnalysis, setMoodAnalysis] = useState("");

  // Load mood logs from localStorage
  useEffect(() => {
    const savedMoodLogs = JSON.parse(localStorage.getItem("moodLogs")) || [];
    setMoodLogs(savedMoodLogs);
    analyzeMood(savedMoodLogs);
  }, []);

  // Function to analyze mood based on the logs (e.g., average mood, trends)
  const analyzeMood = (moodLogs) => {
    const moods = moodLogs.map((log) => log.mood);
    const averageMood =
      moods.reduce((acc, curr) => acc + curr, 0) / moods.length || 0;
    let moodAnalysis = "";

    if (averageMood <= 2) {
      moodAnalysis =
        "It looks like you're feeling a bit low. Remember to take care of yourself and reach out if needed.";
    } else if (averageMood <= 4) {
      moodAnalysis =
        "You're feeling okay, but it might help to talk about how you're feeling.";
    } else {
      moodAnalysis =
        "You're in a good mental state! Keep it up and stay balanced.";
    }

    setMoodAnalysis(moodAnalysis);
  };

  // Handle mood log submission
  const handleMoodSubmit = (e) => {
    e.preventDefault();
    if (mood === "") {
      alert("Please select your mood.");
      return;
    }

    const newLog = {
      mood: parseInt(mood),
      note: moodNote,
      date: new Date().toLocaleString(),
    };

    const updatedLogs = [...moodLogs, newLog];
    setMoodLogs(updatedLogs);
    localStorage.setItem("moodLogs", JSON.stringify(updatedLogs));

    // Reset form fields
    setMood("");
    setMoodNote("");
    analyzeMood(updatedLogs);
  };

  return (
    <div className="container mx-auto">
      {/* Mood Tracking Form */}
      <section className="py-8 px-6">
        <h2 className="text-2xl font-semibold mb-6">Track Your Mood</h2>
        <form onSubmit={handleMoodSubmit} className="space-y-4">
          <div>
            <label htmlFor="mood" className="block">
              How do you feel today?
            </label>
            <select
              id="mood"
              value={mood}
              onChange={(e) => setMood(e.target.value)}
              className="w-full p-2 border rounded"
              required
            >
              <option value="">Select your mood</option>
              <option value="1">Very Low</option>
              <option value="2">Low</option>
              <option value="3">Neutral</option>
              <option value="4">Good</option>
              <option value="5">Very Good</option>
            </select>
          </div>

          <div>
            <label htmlFor="moodNote" className="block">
              Notes (Optional)
            </label>
            <textarea
              id="moodNote"
              value={moodNote}
              onChange={(e) => setMoodNote(e.target.value)}
              className="w-full p-2 border rounded"
              placeholder="Write down anything on your mind."
            />
          </div>

          <button
            type="submit"
            className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-400"
          >
            Log Mood
          </button>
        </form>
      </section>

      {/* Mood Logs */}
      <section className="py-8 px-6 bg-gray-100">
        <h2 className="text-2xl font-semibold mb-6">Your Mood Logs</h2>
        <div>
          {moodLogs.length > 0 ? (
            <ul>
              {moodLogs.map((log, index) => (
                <li key={index} className="mb-4">
                  <div>
                    <strong>Date:</strong> {log.date}
                  </div>
                  <div>
                    <strong>Mood:</strong> {log.mood}
                  </div>
                  <div>
                    <strong>Note:</strong> {log.note}
                  </div>
                </li>
              ))}
            </ul>
          ) : (
            <p>No mood logs yet.</p>
          )}
        </div>
      </section>

      {/* Mood Analysis */}
      <section className="py-8 px-6 bg-gray-200">
        <h2 className="text-2xl font-semibold mb-6">Mood Analysis</h2>
        <p>{moodAnalysis}</p>
      </section>
    </div>
  );
};

export default MentalHealthTracking;
