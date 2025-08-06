import React, { useState } from "react";

function CreateUserForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    age: ""
  });

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("http://localhost:8080/api/users", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData)
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("User created:", data);
        setFormData({ name: "", email: "", age: "" });
      })
      .catch(console.error);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-2">
      <input name="name" value={formData.name} onChange={handleChange} placeholder="Name" required />
      <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email" required />
      <input type="number" name="age" value={formData.age} onChange={handleChange} placeholder="Age" required />
      <button type="submit">Add User</button>
    </form>
  );
}

export default CreateUserForm;
