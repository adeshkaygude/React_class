import React from "react";
import { UserContext } from "./UserContext";
import ChildSample from "./ChildSample";

const ParentSample = () => {
  const name = ["aaaa", "bbbb", "ccccc", "dddd"];
  return (
    <div>
      <UserContext.Provider value={name}>
        <ChildSample />
      </UserContext.Provider>
      <br/>
      <br/>
      <ChildSample />
    </div>
  );
};

export default ParentSample;
