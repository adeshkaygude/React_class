import React from "react";
import Form from "./Form";

export default function RightComponent({ role }) {
  return (
    <div style={{backgroundColor:"orange"}}>
      <p>RightComponent</p>
      <h2>Profile Edit Form </h2>
      <h2>you are login as :{role}</h2>

      <hr />

      <Form role={role} />
    </div>
  );
}
