import React, { useState, useEffect } from "react";

function CreateWorkoutForm() {
  const [formData, setFormData] = useState({
    userId: "",
    type: "",
    durationMinutes: "",
    caloriesBurned: "",
    date: ""
  });
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/api/users")
      .then((res) => res.json())
      .then(setUsers)
      .catch(console.error);
  }, []);

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("http://localhost:8080/api/workouts", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData)
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("Workout created:", data);
        setFormData({
          userId: "",
          type: "",
          durationMinutes: "",
          caloriesBurned: "",
          date: ""
        });
      })
      .catch(console.error);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-2">
      <select name="userId" value={formData.userId} onChange={handleChange} required>
        <option value="">Select User</option>
        {users.map((u) => (
          <option key={u.userId} value={u.userId}>
            {u.name}
          </option>
        ))}
      </select>
      <input name="type" value={formData.type} onChange={handleChange} placeholder="Workout Type" required />
      <input type="number" name="durationMinutes" value={formData.durationMinutes} onChange={handleChange} placeholder="Duration (min)" required />
      <input type="number" name="caloriesBurned" value={formData.caloriesBurned} onChange={handleChange} placeholder="Calories Burned" required />
      <input type="date" name="date" value={formData.date} onChange={handleChange} required />
      <button type="submit">Add Workout</button>
    </form>
  );
}

export default CreateWorkoutForm;
