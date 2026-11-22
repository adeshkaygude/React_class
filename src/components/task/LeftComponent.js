import React from "react";

export default function LeftComponent({ formData }) {
  return (
    <div style={{ backgroundColor: "orange" }}>
      <h3>LeftComponent</h3>{/** <h3>LeftComponent</h3> add new feacher */}

      <h3>Form Data:</h3>

      <p>Name: {formData.name}</p>

      <p>Mobile: {formData.mobile}</p>

      {formData?.password ? <p>Password: {formData.password}</p> : null}
    </div>
  );
}
