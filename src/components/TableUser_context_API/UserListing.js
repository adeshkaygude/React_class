import React, { useContext } from "react";
import { TransferData } from "./Data_Context";

const UserListing = () => {
  const { users } = useContext(TransferData);

  return (
    <div
      style={{
        backgroundColor: "brown",
        padding: 20,
        width: "60%",
      }}
    >
      <h2>User Listing</h2>

      <table border="1" cellPadding="10">
        <thead>
          <tr>
            <th>Name</th>
            <th>Mobile</th>
            <th>Password</th>
          </tr>
        </thead>

        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.mobile}</td>
              <td>{user.password}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserListing;
