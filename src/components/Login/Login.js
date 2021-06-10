import React, { useContext, useEffect, useState } from "react";
import "./Login.css";
import { useForm } from "react-hook-form";
import loginImage from "../../images/login.png";
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from "./firebase.config";
import PopUpError from "./PopUpError/PopUpError";
import { UserContext } from "../../App";
import { useHistory, location } from "react-router-dom";

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

const Login = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);

  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  const [modal, setModal] = useState(null);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const userInfo = { ...loggedInUser };
    userInfo.email = data.email;
    userInfo.password = data.password;
    setLoggedInUser(userInfo);
    //handleLogin();

    const email = data.email;
    const password = data.password;
    fetch("https://quiet-ridge-52118.herokuapp.com/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        if (result) {
          console.log(result.message);
          handleOnClick();
        } else {
          const userInfo = { ...loggedInUser };
          userInfo.error = "Email or Password is incorrect";
          setLoggedInUser(userInfo);
        }
      });
  };
  let history = useHistory();
  const handleOnClick = () => history.push("/admin");

  return (
    <div>
      <div className="row d-flex justify-content-center align-items-center">
        <div className="col-md-6 col-lg-6 col-sm-12">
          <p style={{ color: "red" }}>{loggedInUser.error}</p>
          <form onSubmit={handleSubmit(onSubmit)}>
            <input
              className="input-field"
              {...register("email")}
              placeholder="Email"
              type="email"
              name="email"
              required
            />
            <br />
            <input
              className="mt-3 input-field"
              {...register("password")}
              placeholder="Password"
              name="password"
              required
            />
            <br />
            <input
              // onClick={openModal}
              className="mt-3 login-button"
              type="submit"
              value="Login"
            />
            {/* <button
              onClick={openModal}
              className="mt-3 login-button btn btn-info"
            >Submit</button> */}
          </form>
        </div>
        <div className="col-md-6 col-lg-6 col-sm-12">
          <div>
            <img className="w-100" src={loginImage} alt="" />
          </div>
        </div>
      </div>
      <PopUpError
        modalIsOpen={modalIsOpen}
        closeModal={closeModal}
      ></PopUpError>
    </div>
  );
};

export default Login;
