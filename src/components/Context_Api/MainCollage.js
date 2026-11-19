import React, { useState } from "react";
import { SubjectContext } from "./ContextData";
import College from "./College";

const MainCollage = () => {
  const [subject, setSubject] = useState("");

  return (
    <div style={{ backgroundColor: "pink" }}>
      {/* Context Provider */}
      <SubjectContext.Provider value={subject || "Maths"}>
        <h1>React Context API</h1>

        {/* Select Subject */}
        <select
          value={subject}
          onChange={(event) => setSubject(event.target.value)}
        >
          <option value="">Select Subject</option>
          <option value="Math">Math</option>
          <option value="History">History</option>
          <option value="English">English</option>
        </select>

        {/* Clear Button */}
        <button onClick={() => setSubject("")} style={{ marginLeft: 10 }}>
          Clear Subject
        </button>

        {/* Child Component */}
        <College />
      </SubjectContext.Provider>
    </div>
  );
};

export default MainCollage;
