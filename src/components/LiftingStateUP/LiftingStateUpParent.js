import React, { useState } from "react";
import LeftChild from "./Left_child";
import RightChild from "./Right_child";

const LiftingStateUpParent = () => {
  const [name, setname] = useState("omkar");
  return (
    <div>
      <RightChild name={name} setname={setname} />
      <LeftChild name={name} />
    </div>
  );
};

export default LiftingStateUpParent;
