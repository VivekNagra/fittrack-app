import React from "react";
import UsersTable from "./features/users/UsersTable";
import UserDashboard from './features/users/UserDashboard';

function App() {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">FitTrack Dashboard</h1>
      <UsersTable />
    </div>
  );
}

export default App;
