// src/features/sleeplogs/SleepLogsTable.jsx
import React, { useEffect, useState } from "react";

const SleepLogsTable = ({ userId }) => {
  const [sleepLogs, setSleepLogs] = useState([]);

  useEffect(() => {
    if (userId) {
      fetch(`http://localhost:8080/api/sleep-logs/user/${userId}`)
        .then((res) => res.json())
        .then((data) => setSleepLogs(data));
    }
  }, [userId]);

  const handleDelete = async (id) => {
    await fetch(`http://localhost:8080/api/sleep-logs/${id}`, {
      method: "DELETE",
    });
    setSleepLogs((prev) => prev.filter((log) => log.id !== id));
  };

  return (
    <div>
      <h3>😴 Sleep Logs</h3>
      <table>
        <thead>
          <tr>
            <th>Hours</th>
            <th>Quality</th>
            <th>Notes</th>
            <th>Date</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {sleepLogs.map((log) => (
            <tr key={log.id}>
              <td>{log.hoursSlept}</td>
              <td>{log.sleepQuality}</td>
              <td>{log.notes}</td>
              <td>{log.date}</td>
              <td>
                <button onClick={() => handleDelete(log.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SleepLogsTable;
