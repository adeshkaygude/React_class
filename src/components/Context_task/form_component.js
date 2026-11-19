import React, { useContext, useState } from "react";
import { roleLogin } from "./Context_login";

const FormComponent = () => {
  // Get Role from Context
  const role = useContext(roleLogin);

  // Store Input Values
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    password: "",
  });

  // Handle Input Changes
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Submit Form
  const handleSubmit = () => {
    const data = {
      role,
      name: formData.name,
      mobile: formData.mobile,
      ...(role === "Admin" && {
        password: formData.password,
      }),
    };

    console.log(data);
  };

  return (
    <div
      style={{
        backgroundColor: "lightblue",
        padding: 20,
        marginTop: 10,
        borderRadius: 10,
      }}
    >
      <h2>Fill The Form</h2>

      {/* Name Input */}
      <input
        type="text"
        name="name"
        placeholder="Enter Name"
        value={formData.name}
        onChange={handleChange}
      />

      <br />
      <br />

      {/* Mobile Input */}
      <input
        type="tel"
        name="mobile"
        placeholder="Enter Mobile Number"
        value={formData.mobile}
        onChange={handleChange}
      />

      <br />
      <br />

      {/* Password Only for Admin */}
      {role === "Admin" && (
        <>
          <input
            type="password"
            name="password"
            placeholder="Enter Password"
            value={formData.password}
            onChange={handleChange}
          />

          <br />
          <br />
        </>
      )}

      {/* Submit Button */}
      <button onClick={handleSubmit}>Submit</button>

      {/* Display Form Data */}
      <h3>Form Data</h3>

      <p>Name: {formData.name}</p>

      <p>Mobile: {formData.mobile}</p>

      {role === "Admin" && <p>Password: {formData.password}</p>}
    </div>
  );
};

export default FormComponent;
