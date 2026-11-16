import React from "react";

const ListUsers = ({ users }) => {
  return (
    <>
      <h3>User List</h3>
      <table>
        <tr>
          <th>Name</th>
          <th>Mobile</th>
          <th>City</th>
        </tr>
        {users?.map((u, i) => (
          <tr key={i}>
            <td>{u?.name}</td>
            <td>{u?.mobile}</td>
            <td>{u?.city}</td>
          </tr>
        ))}
      </table>
    </>
  );
};

export default ListUsers;
