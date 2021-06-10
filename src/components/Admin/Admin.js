import React, { useState } from "react";
import { Link } from "react-router-dom";
import AddUsers from "../AddUsers/AddUsers";
import AllUsers from "../AllUsers/AllUsers";
import "./Admin.css";

const Admin = () => {
  const [show, setShow] = useState(true);

  return (
    <div>
      <div className="mt-5 mb-5">
        <Link to="/login">
          <button className="btn btn-info mr-5">Home</button>
        </Link>
        <button
          onClick={() => setShow(true)}
          className="btn btn-secondary mr-5 admin-btn addUser-btn admin-AllUser-btn"
        >
          Add User
        </button>
        <button
          onClick={() => setShow(false)}
          className="btn btn-secondary ml-5 admin-btn admin-AddUser-btn"
        >
          All-Users
        </button>
      </div>
      {show ? (
        <div className="addUser">
          <AddUsers></AddUsers>
        </div>
      ) : (
        <div className="DeleteUser">
          <AllUsers></AllUsers>
        </div>
      )}
    </div>
  );
};

export default Admin;
