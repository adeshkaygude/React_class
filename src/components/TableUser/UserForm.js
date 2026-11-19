import React, { useContext } from "react";
import { TransferData } from "./Data_Context";

const UserForm = () => {
  const { formData, setFormData, addUser } = useContext(TransferData);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addUser();
  };

  return (
    <div
      style={{
        backgroundColor: "lightgreen",
        padding: 20,
        width: "40%",
      }}
    >
      <h2>User Form</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Enter Name"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <br />
        <br />

        <input
          type="tel"
          name="mobile"
          placeholder="Enter Mobile"
          value={formData.mobile}
          onChange={handleChange}
          required
        />

        <br />
        <br />

        <input
          type="password"
          name="password"
          placeholder="Enter Password"
          value={formData.password}
          onChange={handleChange}
          required
        />

        <br />
        <br />

        <button type="submit">Add User</button>
      </form>
    </div>
  );
};

export default UserForm;
