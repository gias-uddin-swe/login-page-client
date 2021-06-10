import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";

const AllUsers = () => {
  const [control, setControl] = useState(null);
  const [allUsers, setAllUser] = useState([]);

  console.log(allUsers);
  useEffect(() => {
    fetch("https://quiet-ridge-52118.herokuapp.com/users")
      .then((res) => res.json())
      .then((data) => setAllUser(data));
  }, [control]);

  const handleDelete = (id) => {
    fetch("https://quiet-ridge-52118.herokuapp.com/deleteUser?id=" + id, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => res.json())
      .then((data) => {
        setControl(data);
      });
  };
  return (
    <div>
      <h1>All users {allUsers.length} </h1>
      <Table className="w-75 m-auto" striped bordered hover>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Address</th>
            <th>Action</th>
          </tr>
        </thead>
        {allUsers.map((user) => (
          <tbody>
            <tr>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.phone}</td>
              <td>{user.address}</td>
              <td>
                <button
                  onClick={() => handleDelete(user._id)}
                  className="btn btn-danger"
                >
                  Delete
                </button>
              </td>
            </tr>
          </tbody>
        ))}
      </Table>
    </div>
  );
};

export default AllUsers;
