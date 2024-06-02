import axios from "axios";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import styles from "../styles.module.css";
const SignUp = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const registerHandler = async () => {
    try {
      const response = await axios.post("https://reqres.in/api/register", user);
      const id = response.data.id;
      localStorage.setItem("id", id);
      toast.success("Signup successfully");
      navigate("/auth/signin");
    } catch (error) {
      toast.error("Error occured while signup");
    }
  };
  return (
    <div className={`${styles.register} w-25 mx-auto mt-5`}>
      <h4 className="text-center">Sign up</h4>
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
      <button onClick={registerHandler} className="btn btn-primary w-100 mb-3">
        Create an account
      </button>
      <Link to="/auth/signin">Have an account? Go to sign in</Link>
    </div>
  );
};

export default SignUp;
