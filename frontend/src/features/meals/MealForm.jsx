import React, { useState, useEffect } from "react";

function CreateMealForm() {
  const [formData, setFormData] = useState({
    userId: "",
    mealType: "",
    calories: "",
    protein: "",
    carbs: "",
    fat: "",
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
    fetch("http://localhost:8080/api/meals", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData)
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("Meal created:", data);
        setFormData({
          userId: "",
          mealType: "",
          calories: "",
          protein: "",
          carbs: "",
          fat: "",
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
      <input name="mealType" value={formData.mealType} onChange={handleChange} placeholder="Meal Type" required />
      <input type="number" name="calories" value={formData.calories} onChange={handleChange} placeholder="Calories" required />
      <input type="number" name="protein" value={formData.protein} onChange={handleChange} placeholder="Protein (g)" step="any" required />
      <input type="number" name="carbs" value={formData.carbs} onChange={handleChange} placeholder="Carbs (g)" step="any" required />
      <input type="number" name="fat" value={formData.fat} onChange={handleChange} placeholder="Fat (g)" step="any" required />
      <input type="date" name="date" value={formData.date} onChange={handleChange} required />
      <button type="submit">Add Meal</button>
    </form>
  );
}

export default CreateMealForm;
