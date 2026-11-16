import React from "react";

function StudentCard({ name, age, role }) {
  return (
    <div>
      <h3>Student Name:{name}</h3>
      <p>Age: {age}</p>
      <p>Role: {role}</p>
    </div>
  );
}
function Student() {
  return <StudentCard name="Omkar" age={21} role="Fullsatck Developer" />;
}

export default Student;
