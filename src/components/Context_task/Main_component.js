import React, { useState } from "react";
import { roleLogin } from "./Context_login";

import LeftComponent from "./left_component";
import RightComponent from "./right_component";

const Main_component = () => {
  const [role, setRole] = useState("User");

  return (
    <div style={{ backgroundColor: "yellow", padding: 20 }}>
      <roleLogin.Provider value={role}>
        <h1>React Context API</h1>

        <h2>Select Role</h2>

        {/* Admin Radio Button */}
        <input
          type="radio"
          name="role"
          value="Admin"
          checked={role === "Admin"}
          onChange={(e) => setRole(e.target.value)}
        />
        <label>Admin</label>

        {/* User Radio Button */}
        <input
          type="radio"
          name="role"
          value="User"
          checked={role === "User"}
          onChange={(e) => setRole(e.target.value)}
        />
        <label>User</label>

        <h3>Selected Role: {role}</h3>

        {/* Child Components */}
        <div style={{ display: "flex", gap: 20 }}>
          <LeftComponent />

          <RightComponent />
        </div>
      </roleLogin.Provider>
    </div>
  );
};

export default Main_component;
