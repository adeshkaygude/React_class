import React, { useState } from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import RightComponent from "./RightComponent";

export default function Main_Com() {
  // Store selected role
  const [role, setRole] = useState("");

  // Handle radio button change
  const handleChange = (event) => {
    setRole(event.target.value);
  };

  return (
    <div style={{ backgroundColor: "	#87CEEB" }}>
      <p>Main_Com</p>
      <h2>login as </h2>

      <FormControl>
        <RadioGroup name="role" value={role} onChange={handleChange}>
          <FormControlLabel value="Admin" control={<Radio />} label="Admin" />

          <FormControlLabel
            value="Customer"
            control={<Radio />}
            label="Customer"
          />
        </RadioGroup>
      </FormControl>

      <hr />

      <div style={{ display: "inline-flex" }}>
        <RightComponent role={role} />
      </div>

      {/* <h3>Selected Role: {role}</h3>

      {role === "Admin" && <h3>Welcome Admin!</h3>}

      {role === "Customer" && <h3>Welcome Customer!</h3>} */}
    </div>
  );
}
