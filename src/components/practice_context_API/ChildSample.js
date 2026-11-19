import React from "react";
import { useContext } from "react";
import { UserContext } from "./UserContext";

const ChildSample = () => {
  const name = useContext(UserContext);
  return (
    <div>
      <ul>
        {name.map((el, i) => (
          <li key={i}>{name[i]}</li>
        ))}
      </ul>

      <br />
      <ul>
        {name.map((el, i) => (
          <li key={i}>{el}</li>
        ))}
      </ul>
    </div>
  );
};

export default ChildSample;
