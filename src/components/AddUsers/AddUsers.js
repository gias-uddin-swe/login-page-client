import React, { useContext, useState } from "react";
import "./AddUsers.css";
import { useForm } from "react-hook-form";
import { UserContext } from "../../App";

const AddUsers = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const [user, setUser] = useState({});
  console.log(user);

  const [validationError, setValidationError] = useState({
    userName: false,
    phone: false,
    email: false,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if ((user.name, user.phone, user.email, user.address)) {
      fetch("https://quiet-ridge-52118.herokuapp.com/addUser", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(user),
      })
        .then((res) => res.json())
        .then((result) => {
          if (result) {
            const userInfo = { ...user };
            userInfo.error = "";
            userInfo.loggedIn = true;
            setUser(userInfo);
            alert("user Added Successfully");
          } else {
            alert("user addition faild!!!");
          }
        });
    } else {
      const userInfo = { ...user };
      userInfo.error = "please type valid input!!!";
      userInfo.loggedIn = false;
      setUser(userInfo);
    }
  };

  const handleBlur = (e) => {
    let isValid = true;
    if (e.target.name === "name") {
      isValid = /^[a-zA-Z0-9\-_]{0,40}$/.test(e.target.value);
      if (!isValid) {
        const userInfo = { ...validationError };
        userInfo.username = true;
        userInfo.phone = false;
        userInfo.email = false;
        setValidationError(userInfo);
      } else {
        const userInfo = { ...validationError };
        userInfo.username = false;
        setValidationError(userInfo);
      }
    }
    if (e.target.name === "phone") {
      isValid = /^\d{10}$/.test(e.target.value);
      if (!isValid) {
        const userInfo = { ...validationError };
        userInfo.username = false;
        userInfo.phone = true;
        userInfo.email = false;
        setValidationError(userInfo);
      } else {
        const userInfo = { ...validationError };
        userInfo.phone = false;
        setValidationError(userInfo);
      }
    }
    if (e.target.name === "email") {
      isValid = /\S+@\S+\.\S+/.test(e.target.value);
      if (!isValid) {
        const userInfo = { ...validationError };
        userInfo.username = false;
        userInfo.phone = false;
        userInfo.email = true;
        setValidationError(userInfo);
      } else {
        const userInfo = { ...validationError };
        userInfo.email = false;
        setValidationError(userInfo);
      }
    }
    if (e.target.name === "address") {
      isValid = true;
    }
    if (isValid) {
      const userInfo = { ...user };
      userInfo[e.target.name] = [e.target.value];
      setUser(userInfo);
    }
  };

  return (
    <div>
      <h1>Add Users</h1>
      <p style={{ color: "red" }}>{user.error}</p>
      <form className="w-75 m-auto" onSubmit={handleSubmit}>
        <input
          onBlur={handleBlur}
          className="input-field"
          type="text"
          placeholder="username"
          name="name"
          required
        />
        <br />
        {validationError.username && (
          <p style={{ color: "red" }}>username not valid!!</p>
        )}

        <input
          onBlur={handleBlur}
          className="input-field"
          type="number"
          placeholder="phone"
          name="phone"
          required
        />
        <br />
        {validationError.phone && (
          <p style={{ color: "red" }}>phone number not valid!!</p>
        )}

        <input
          onBlur={handleBlur}
          className="input-field"
          type="email"
          placeholder="email"
          name="email"
          required
        />
        <br />
        {validationError.email && (
          <p style={{ color: "red" }}> Email not valid!!</p>
        )}

        <input
          onBlur={handleBlur}
          className="input-field"
          type="text"
          placeholder="address"
          name="address"
          required
        />
        <br />
        <input className="mt-3 addUser-button" type="submit" value="Add-User" />
      </form>
    </div>
  );
};

export default AddUsers;
