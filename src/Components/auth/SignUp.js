import React, { useEffect, useState } from "react";
import "./master.css";
import axios from "./../axios/Axios";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  let navigate = useNavigate();

  useEffect(() => {
    // if (localStorage.getItem("authToken")) {
    //   navigate("/");
    // }

  }, []);
  const [FirstName, SetFirstName] = useState("");
  const [LastName, SetLastNAme] = useState("");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [confirmPass, SetconfirmPass] = useState("");

  const FirstNameChangeHandler = (e) => {
    SetFirstName(e.target.value);
  }; const LastNameChangeHandler = (e) => {
    SetLastNAme(e.target.value);
  };
  const emailChangeHandler = (e) => {
    setEmail(e.target.value);
  };
  const passChangeHandler = (e) => {
    setPass(e.target.value);
  };
  const ConfirmpassChangeHandler = (e) => {
    SetconfirmPass(e.target.value);
  };
  const submitHandler = (e) => {
    e.preventDefault();

    axios
      .post("/auth/register", {
        // firstname:FirstName,
        // lastname:LastName,
        email: email,
        password: pass,
      })
      .then((response) => {
        window.localStorage.setItem("adminName", response.data.data.name);
        window.localStorage.setItem("authToken", response.data.data.token);
        // navigate("/");
      })
      .catch((err) => {
        console.log(err);
      });
      console.log(FirstName);
      console.log(LastName);
      console.log(email);
      console.log(pass);
const item={FirstName,LastName,email,pass};




      navigate("/");
      console.log(item);

  };

  return (
    <div className="Auth-form-container">
      <form className="Auth-form" onSubmit={submitHandler}>
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">Sign Up</h3>
          <div className="form-group mt-3">
          <label>First NAme</label>
            <input
              type="text"
              className="form-control mt-1"
              placeholder="Enter First Name"
              required
              onChange={FirstNameChangeHandler}
            />
              <label>Last Name</label>
            <input
              type="text"
              className="form-control mt-1"
              placeholder="Enter Last Name"
              required
              onChange={LastNameChangeHandler}
            />
            <label>Email address</label>
            <input
              type="email"
              className="form-control mt-1"
              placeholder="Enter email"
              required
              onChange={emailChangeHandler}
            />
          </div>
          <div className="form-group mt-3">
            <label>Password</label>
            <input
              type="password"
              className="form-control mt-1"
              placeholder="Enter password"
              required
              onChange={passChangeHandler}
            />
          </div>
          <label>Confirm Password</label>
            <input
              type="password"
              className="form-control mt-1"
              placeholder="Confirm Password"
              required
              onChange={ConfirmpassChangeHandler}
            />
          <div className="d-grid gap-2 mt-3">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
          
        </div>
      </form>
    </div>
  );
};

export default SignUp;
