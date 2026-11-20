import React from "react";

const RightChild = ({ name, setname }) => {
  return (
    <div>
      <h2>RightChild</h2>

      <input
        type="text"
        placeholder="Enter your name "
        value={name}
        onChange={(event) => setname(event.target.value)}
      />
    </div>
  );
};

export default RightChild;
