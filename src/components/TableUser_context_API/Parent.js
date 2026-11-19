import React, { useState } from "react";
import UserListing from "./UserListing";
import UserForm from "./UserForm";
import { TransferData } from "./Data_Context";

const Parent = () => {
  const [users, setUsers] = useState([]);

  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    password: "",
  });

  // Add User
  const addUser = () => {
    const newUser = {
      id: Date.now(),
      ...formData,
    };

    setUsers((prev) => [...prev, newUser]);

    setFormData({
      name: "",
      mobile: "",
      password: "",
    });
  };

  // Delete Particular User
  const deleteUser = (id) => {
    setUsers((prev) => prev.filter((user) => user.id !== id));
  };

  return (
    <div>
      <h2>Parent Component</h2>

      <TransferData.Provider
        value={{
          users,
          formData,
          setFormData,
          addUser,
          deleteUser,
        }}
      >
        {/* Delete Option In Parent */}
        <h3>Parent User List</h3>

        {users.map((user) => (
          <div
            key={user.id}
            style={{
              display: "flex",
              gap: 15,
              alignItems: "center",
              marginBottom: 10,
              backgroundColor: "lightgray",
              padding: 10,
            }}
          >
            <span>{user.name}</span>

            <span>{user.mobile}</span>

            <button
              onClick={() => deleteUser(user.id)}
              style={{
                backgroundColor: "red",
                color: "white",
                border: "none",
                padding: 8,
                cursor: "pointer",
              }}
            >
              Delete
            </button>
          </div>
        ))}

        <div style={{ display: "flex", gap: 20 }}>
          <UserListing />

          <UserForm />
        </div>
      </TransferData.Provider>
    </div>
  );
};

export default Parent;
