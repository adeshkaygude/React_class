import React, { useState } from "react";
import LeftComponent from "./LeftComponent";

export default function Form({ role }) {
  // Single state for all input fields
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    password: "",
  });

  // Handle input changes
  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <div style={{ backgroundColor: "red" }}>
      <p>Form</p>
      <label>Name:</label>
      <input
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
        placeholder="Enter Name"
      />

      <br />
      <br />

      <label>Mobile:</label>
      <input
        type="tel"
        name="mobile"
        value={formData.mobile}
        onChange={handleChange}
        placeholder="Enter Mobile"
      />

      <br />
      <br />

      {role === "Admin" ? (
        <>
          <label>Password:</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Enter Password"
          />
        </>
      ) : null}

      <br />
      <br />

      {/* <h3>Form Data:</h3> */}
      <LeftComponent formData={formData} />
    </div>
  );
}
