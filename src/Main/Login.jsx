import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";

export const Login = (props) => {
  const [email, setEmail] = useState("");
  const [pass, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (email.length === 0 || pass.length === 0) {
      alert("Please enter valid credintial.");
    }
    if (email && pass) {
      console.log("Email: ", email, "\nPassword: ", pass);
    }
    if (email === "marthur@gmail.com" && pass === "abc123") {
      alert("Login Succussfully");
      navigate("/home");
    } else {
      alert("Error Login");
    }

    console.log(email);
  };

  return (
    <div className="container">
        <h2>Login</h2>
        <form className="loginForm" onSubmit={handleSubmit}>
            <label htmlFor="email">Email</label>
            <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" id="email" name="email" placeholder="abc@email.com" />
            <label htmlFor="password">Password</label>
            <input value={pass} onChange={(e) => setPassword(e.target.value)} type="password" id="password" name="password" placeholder="***************" />
            <button type="submit">Login</button>
        </form>
        <button className="linkBtn" onClick={() => props.onFormSwitch('register')} >Don't have an account? Register here.</button>
    </div>
  );
};
