import React, { useEffect, useState } from "react";
import WorkoutsTable from "../workouts/WorkoutsTable";
import MealsTable from "../meals/MealsTable";

function UsersTable() {
  const [users, setUsers] = useState([]);
  const [formData, setFormData] = useState({ name: "", email: "", age: "" });
  const [editingUserId, setEditingUserId] = useState(null);
  const [visibleWorkouts, setVisibleWorkouts] = useState({});
  const [visibleMeals, setVisibleMeals] = useState({});

  const fetchUsers = () => {
    fetch("http://localhost:8080/api/users")
      .then((res) => res.json())
      .then((data) => setUsers(data))
      .catch((err) => console.error("Error fetching users:", err));
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const method = editingUserId ? "PUT" : "POST";
    const url = editingUserId
      ? `http://localhost:8080/api/users/${editingUserId}`
      : "http://localhost:8080/api/users";

    fetch(url, {
      method,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    })
      .then(() => {
        fetchUsers();
        setFormData({ name: "", email: "", age: "" });
        setEditingUserId(null);
      })
      .catch((err) => console.error("Error saving user:", err));
  };

  const handleEdit = (user) => {
    setEditingUserId(user.userId);
    setFormData({ name: user.name, email: user.email, age: user.age });
  };

  const handleDelete = (id) => {
    fetch(`http://localhost:8080/api/users/${id}`, {
      method: "DELETE",
    })
      .then(() => fetchUsers())
      .catch((err) => console.error("Error deleting user:", err));
  };

  const toggleWorkouts = (userId) => {
    setVisibleWorkouts((prev) => ({
      ...prev,
      [userId]: !prev[userId],
    }));
  };

  const toggleMeals = (userId) => {
    setVisibleMeals((prev) => ({
      ...prev,
      [userId]: !prev[userId],
    }));
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">👤 Users</h2>
      <table className="w-full border mb-4">
        <thead>
          <tr className="bg-gray-100">
            <th className="p-2 border">Name</th>
            <th className="p-2 border">Email</th>
            <th className="p-2 border">Age</th>
            <th className="p-2 border">Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <React.Fragment key={user.userId}>
              <tr>
                <td className="p-2 border">{user.name}</td>
                <td className="p-2 border">{user.email}</td>
                <td className="p-2 border">{user.age}</td>
                <td className="p-2 border space-x-2">
                  <button
                    className="px-2 py-1 bg-yellow-400 rounded"
                    onClick={() => handleEdit(user)}
                  >
                    Edit
                  </button>
                  <button
                    className="px-2 py-1 bg-red-500 text-white rounded"
                    onClick={() => handleDelete(user.userId)}
                  >
                    Delete
                  </button>
                  <button
                    className="px-2 py-1 bg-blue-400 rounded"
                    onClick={() => toggleWorkouts(user.userId)}
                  >
                    {visibleWorkouts[user.userId] ? "Hide" : "Show"} Workouts
                  </button>
                  <button
                    className="px-2 py-1 bg-purple-500 text-white rounded"
                    onClick={() => toggleMeals(user.userId)}
                  >
                    {visibleMeals[user.userId] ? "Hide" : "Show"} Meals
                  </button>
                </td>
              </tr>
              {visibleWorkouts[user.userId] && (
                <tr>
                  <td colSpan="4">
                    <WorkoutsTable userId={user.userId} />
                  </td>
                </tr>
              )}
              {visibleMeals[user.userId] && (
                <tr>
                  <td colSpan="4">
                    <MealsTable userId={user.userId} />
                  </td>
                </tr>
              )}
            </React.Fragment>
          ))}
        </tbody>
      </table>

      <h3 className="text-xl font-semibold mb-2">
        {editingUserId ? "Edit User" : "Create New User"}
      </h3>
      <form onSubmit={handleSubmit} className="space-y-2">
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Name"
          className="border p-2 w-full"
          required
        />
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email"
          className="border p-2 w-full"
          required
        />
        <input
          type="number"
          name="age"
          value={formData.age}
          onChange={handleChange}
          placeholder="Age"
          className="border p-2 w-full"
          required
        />
        <button
          type="submit"
          className="px-4 py-2 bg-green-500 text-white rounded"
        >
          {editingUserId ? "Update User" : "Add User"}
        </button>
      </form>
    </div>
  );
}

export default UsersTable;
