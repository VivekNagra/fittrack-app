// src/features/sleeplogs/SleepLogForm.jsx
import React, { useState } from "react";

const SleepLogForm = ({ userId, onSleepLogCreated }) => {
  const [form, setForm] = useState({
    hoursSlept: "",
    sleepQuality: "",
    notes: "",
    date: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const payload = { ...form, userId };
    await fetch("http://localhost:8080/api/sleep-logs", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
    setForm({
      hoursSlept: "",
      sleepQuality: "",
      notes: "",
      date: "",
    });
    onSleepLogCreated?.(); // Refresh table
  };

  return (
    <form onSubmit={handleSubmit}>
      <h4>Create Sleep Log</h4>
      <input
        name="hoursSlept"
        value={form.hoursSlept}
        onChange={handleChange}
        placeholder="Hours Slept"
        type="number"
        step="0.1"
        required
      />
      <input
        name="sleepQuality"
        value={form.sleepQuality}
        onChange={handleChange}
        placeholder="Sleep Quality"
        required
      />
      <input
        name="notes"
        value={form.notes}
        onChange={handleChange}
        placeholder="Notes"
      />
      <input
        name="date"
        value={form.date}
        onChange={handleChange}
        type="date"
        required
      />
      <button type="submit">Create</button>
    </form>
  );
};

export default SleepLogForm;
