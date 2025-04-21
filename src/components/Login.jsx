import axios from "axios";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { BASE_URL } from "../utils/Constant";

const Login = () => {
  const [emailId, setEmailId] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const Navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault(); // Prevents page reload on form submission
    try {
      const res = await axios.post(
        BASE_URL + "/login",
        {
          emailId,
          password,
        },
        { withCredentials: true }
      );
      dispatch(addUser(res.data));
      Navigate("/");
      toast.success("Login successful! 🚀");
    } catch (err) {
      toast.error("Login failed. Please check your credentials.");
      console.log("ERROR " + err.message);
    }
  };

  return (
    <div className="flex justify-center my-20">
      <div className="flex bg-base-300 text-neutral-content rounded-lg">
        <div className="w-[350px] h-[350px]">
          <img src="/public/login.png" alt="Login" />
        </div>
        <div className="card-body">
          <h1 className="card-title mt-5">
            Hi,
            <br /> Welcome Back
          </h1>

          <form onSubmit={handleLogin} className="justify-center mt-3">
            <label className="floating-label block mb-4">
              <span>Email</span>
              <input
                type="text"
                placeholder="mail@site.com"
                className="input input-md w-full"
                value={emailId}
                onChange={(e) => setEmailId(e.target.value)}
              />
            </label>

            <label className="floating-label block mb-4">
              <span>Password</span>
              <input
                type="password"
                placeholder="password"
                className="input input-md w-full"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </label>

            <button type="submit" className="btn btn-primary w-80 rounded-3xl">
              Sign Up
            </button>
          </form>

          <p className="mt-2">
            Don't have an account?{" "}
            <a className="text-blue-400" href="/register">
              Register
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
