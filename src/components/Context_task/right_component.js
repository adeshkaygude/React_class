import React, { useContext } from "react";
import { roleLogin } from "./Context_login";
import FormComponent from "./form_component";

const RightComponent = () => {
  // Get Role from Context API
  const role = useContext(roleLogin);

  return (
    <div
      style={{
        backgroundColor: "lightcoral",
        padding: 20,
        width: "60%",
      }}
    >
      <h2>Right Component</h2>

      <h3>Role is: {role}</h3>

      {/* Form Component */}
      <FormComponent />
    </div>
  );
};

export default RightComponent;
