import React, { useContext } from "react";
import { SubjectContext } from "./ContextData";

const Subject = () => {
  // Get Context Value
  const subject = useContext(SubjectContext);

  return (
    <div style={{ backgroundColor: "red", padding: 10, marginTop: 20 }}>
      <h2>Selected Subject: {subject}</h2>
    </div>
  );
};

export default Subject;
