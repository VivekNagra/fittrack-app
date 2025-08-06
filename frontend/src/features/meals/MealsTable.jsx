// src/components/MealsTable.jsx
import React, { useEffect, useState } from "react";

function MealsTable({ userId }) {
  const [meals, setMeals] = useState([]);
  const [newMeal, setNewMeal] = useState({
    mealType: "",
    calories: 0,
    protein: 0,
    carbs: 0,
    fat: 0,
    date: ""
  });

  useEffect(() => {
    fetch("http://localhost:8080/api/meals")
      .then((res) => res.json())
      .then((data) => setMeals(data.filter((m) => m.userId === userId)))
      .catch((err) => console.error("Error fetching meals:", err));
  }, [userId]);

  const handleCreate = () => {
    fetch("http://localhost:8080/api/meals", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...newMeal, userId })
    })
      .then((res) => res.json())
      .then((created) => setMeals([...meals, created]));
  };

  const handleDelete = (id) => {
    fetch(`http://localhost:8080/api/meals/${id}`, {
      method: "DELETE"
    }).then(() => setMeals(meals.filter((m) => m.mealId !== id)));
  };

  const handleChange = (e) => {
    setNewMeal({ ...newMeal, [e.target.name]: e.target.value });
  };

  return (
    <div className="mt-4">
      <table className="w-full text-sm">
        <thead>
          <tr>
            <th>Type</th>
            <th>Calories</th>
            <th>Protein</th>
            <th>Carbs</th>
            <th>Fat</th>
            <th>Date</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {meals.map((meal) => (
            <tr key={meal.mealId}>
              <td>{meal.mealType}</td>
              <td>{meal.calories}</td>
              <td>{meal.protein}g</td>
              <td>{meal.carbs}g</td>
              <td>{meal.fat}g</td>
              <td>{meal.date}</td>
              <td>
                <button
                  onClick={() => handleDelete(meal.mealId)}
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
                name="mealType"
                value={newMeal.mealType}
                onChange={handleChange}
                className="border px-1"
              />
            </td>
            <td>
              <input
                type="number"
                name="calories"
                value={newMeal.calories}
                onChange={handleChange}
                className="border px-1"
              />
            </td>
            <td>
              <input
                type="number"
                name="protein"
                value={newMeal.protein}
                onChange={handleChange}
                className="border px-1"
              />
            </td>
            <td>
              <input
                type="number"
                name="carbs"
                value={newMeal.carbs}
                onChange={handleChange}
                className="border px-1"
              />
            </td>
            <td>
              <input
                type="number"
                name="fat"
                value={newMeal.fat}
                onChange={handleChange}
                className="border px-1"
              />
            </td>
            <td>
              <input
                type="date"
                name="date"
                value={newMeal.date}
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

export default MealsTable;
