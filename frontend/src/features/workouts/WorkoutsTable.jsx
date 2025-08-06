// src/components/WorkoutsTable.jsx
import React, { useEffect, useState } from "react";

function WorkoutsTable({ userId }) {
  const [workouts, setWorkouts] = useState([]);
  const [newWorkout, setNewWorkout] = useState({
    type: "",
    durationMinutes: 0,
    caloriesBurned: 0,
    date: ""
  });

  useEffect(() => {
    fetch("http://localhost:8080/api/workouts")
      .then((res) => res.json())
      .then((data) => setWorkouts(data.filter((w) => w.userId === userId)))
      .catch((err) => console.error("Error fetching workouts:", err));
  }, [userId]);

  const handleCreate = () => {
    fetch("http://localhost:8080/api/workouts", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...newWorkout, userId })
    })
      .then((res) => res.json())
      .then((created) => setWorkouts([...workouts, created]));
  };

  const handleDelete = (id) => {
    fetch(`http://localhost:8080/api/workouts/${id}`, {
      method: "DELETE"
    }).then(() => setWorkouts(workouts.filter((w) => w.workoutId !== id)));
  };

  const handleChange = (e) => {
    setNewWorkout({ ...newWorkout, [e.target.name]: e.target.value });
  };

  return (
    <div className="mt-2">
      <table className="w-full text-sm">
        <thead>
          <tr>
            <th>Type</th>
            <th>Duration</th>
            <th>Calories</th>
            <th>Date</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {workouts.map((workout) => (
            <tr key={workout.workoutId}>
              <td>{workout.type}</td>
              <td>{workout.durationMinutes} min</td>
              <td>{workout.caloriesBurned}</td>
              <td>{workout.date}</td>
              <td>
                <button
                  onClick={() => handleDelete(workout.workoutId)}
                  className="text-red-500"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
          <tr>
            <td>
              <input
                type="text"
                name="type"
                value={newWorkout.type}
                onChange={handleChange}
                className="border px-1"
              />
            </td>
            <td>
              <input
                type="number"
                name="durationMinutes"
                value={newWorkout.durationMinutes}
                onChange={handleChange}
                className="border px-1"
              />
            </td>
            <td>
              <input
                type="number"
                name="caloriesBurned"
                value={newWorkout.caloriesBurned}
                onChange={handleChange}
                className="border px-1"
              />
            </td>
            <td>
              <input
                type="date"
                name="date"
                value={newWorkout.date}
                onChange={handleChange}
                className="border px-1"
              />
            </td>
            <td>
              <button onClick={handleCreate} className="text-green-600">
                Create
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default WorkoutsTable;