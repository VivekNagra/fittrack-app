// src/UserDashboard.jsx
import React, { useEffect, useState } from "react";
import WorkoutsTable from "../workouts/WorkoutsTable";
import MealsTable from "../meals/MealsTable";
import UserForm from "./UserForm";

function UserDashboard() {
  const [users, setUsers] = useState([]);
  const [selectedUserId, setSelectedUserId] = useState(null);
  const [showWorkouts, setShowWorkouts] = useState(false);
  const [showMeals, setShowMeals] = useState(false);

  useEffect(() => {
    fetch("http://localhost:8080/api/users")
      .then((res) => res.json())
      .then((data) => setUsers(data))
      .catch((err) => console.error("Error fetching users:", err));
  }, []);

  const handleShowWorkouts = (userId) => {
    setSelectedUserId(userId);
    setShowWorkouts(true);
    setShowMeals(false);
  };

  const handleShowMeals = (userId) => {
    setSelectedUserId(userId);
    setShowMeals(true);
    setShowWorkouts(false);
  };

  const handleEditUser = (user) => {
    console.log("Edit user:", user);
    // Implement user editing form logic
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">FitTrack Users</h1>

      <table className="min-w-full border">
        <thead className="bg-gray-100">
          <tr>
            <th className="p-2 border">Name</th>
            <th className="p-2 border">Email</th>
            <th className="p-2 border">Age</th>
            <th className="p-2 border">Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.userId} className="border">
              <td className="p-2 border">{user.name}</td>
              <td className="p-2 border">{user.email}</td>
              <td className="p-2 border">{user.age}</td>
              <td className="p-2 border space-x-2">
                <button
                  onClick={() => handleShowWorkouts(user.userId)}
                  className="bg-blue-500 text-white px-2 py-1 rounded"
                >
                  Show Workouts
                </button>
                <button
                  onClick={() => handleShowMeals(user.userId)}
                  className="bg-green-500 text-white px-2 py-1 rounded"
                >
                  Show Meals
                </button>
                <button
                  onClick={() => handleEditUser(user)}
                  className="bg-yellow-500 text-white px-2 py-1 rounded"
                >
                  Edit
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="mt-6">
        {showWorkouts && <WorkoutsTable userId={selectedUserId} />}
        {showMeals && <MealsTable userId={selectedUserId} />}
      </div>

      <div className="mt-6">
        <h2 className="text-xl font-bold mb-2">Add New User</h2>
        <UserForm onUserAdded={() => window.location.reload()} />
      </div>
    </div>
  );
}

export default UserDashboard;
