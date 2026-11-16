import React, { useState } from "react";

import AddUser from "./AddUser";
import ListUsers from "./ListUser";

const LiftStateUp = () => {
  const [users, setUser] = useState([]);

  const getUser = (user) => {
    if (user) setUser([...users, user]);
  };

  return (
    <>
      <h2>Lifting State Up</h2>
      <hr />
      <AddUser getUser={getUser} />
      <ListUsers users={users} />
    </>
  );
};
export default LiftStateUp;
