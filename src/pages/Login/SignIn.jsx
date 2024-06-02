import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import axios from "axios";
import styles from "../styles.module.css"
const SignIn = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const loginHandler = async () => {
    try {
     const response =  await axios.post("https://reqres.in/api/login", user);
     const token = response.data.token;
     localStorage.setItem("token", token);
     toast.success("Login successfully");
      navigate("/");
      window.location.reload()
    } catch (error) {
      toast.error("Error occured while login");
    }
  };
  return (
    <div className={`${styles.register} w-25 mx-auto mt-5`}>
      <h4 className="text-center">Sign in</h4>
      <input
        onChange={(e) => setUser({ ...user, email: e.target.value })}
        type="email"
        placeholder="Email..."
        className="form-control mb-4"
      />
      <input
        onChange={(e) => setUser({ ...user, password: e.target.value })}
        type="password"
        placeholder="Password..."
        className="form-control mb-4"
      />
      <button onClick={loginHandler} className="btn btn-primary w-100 mb-3">
        Login
      </button>
      <Link to="/auth/signup">Need an account? Sign up!</Link>
    </div>
  );
};

export default SignIn;
