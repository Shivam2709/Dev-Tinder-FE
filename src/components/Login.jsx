import axios from "axios";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { BASE_URL } from "../utils/Constant";

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [emailId, setEmailId] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
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
      navigate("/");
      toast.success("Login successfully..! 🚀");
    } catch (err) {
      toast.error("Login failed. Please check your credentials.");
      setError(err?.response?.data || "Something went wrong");
    }
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        BASE_URL + "/signup",
        {
          firstName,
          lastName,
          emailId,
          password,
        },
        { withCredentials: true }
      );
      dispatch(addUser(res.data.data));
      navigate("/profile");
      toast.success("Account created successfully..! 🚀");
    } catch (err) {
      toast.error("Signup failed. Please try again.");
      setError(err?.response?.data || "Something went wrong");
    }
  };

  return (
    <div className="flex justify-center my-20 mb-16 sm:mb-0">
      <div className="flex bg-base-300 text-neutral-content rounded-lg">
        <div className="w-[350px] h-[350px]">
          <img src="/src/assets/login.png" alt="Login" />
        </div>
        <div className="card-body">
          <div className="flex justify-between items-center mb-4">
            <h1 className="card-title">
              {isLogin ? (
                <>
                  Hi,
                  <br /> Welcome Back
                </>
              ) : (
                <span className="flex justify-center items-center">
                  Create New Account
                </span>
              )}
            </h1>
            <div className="flex items-center gap-2">
              <span
                className={`text-sm ${
                  isLogin ? "text-indigo-600" : "text-gray-500"
                }`}
              >
                Login
              </span>
              <input
                type="checkbox"
                checked={!isLogin}
                onChange={() => {
                  setIsLogin(!isLogin);
                  setError("");
                }}
                className="toggle border-indigo-600 bg-indigo-500 checked:border-orange-500 checked:bg-orange-400 checked:text-orange-800"
              />
              <span
                className={`text-sm ${
                  !isLogin ? "text-orange-500" : "text-gray-500"
                }`}
              >
                Signup
              </span>
            </div>
          </div>

          <form
            onSubmit={isLogin ? handleLogin : handleSignup}
            className="justify-center mt-3"
          >
            {!isLogin && (
              <>
                <label className="floating-label block mb-4">
                  <span>First Name</span>
                  <input
                    type="text"
                    placeholder="Enter your First Name"
                    className="input input-md w-full"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    required
                  />
                </label>
                <label className="floating-label block mb-4">
                  <span>Last Name</span>
                  <input
                    type="text"
                    placeholder="Enter your Last Name"
                    className="input input-md w-full"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    required
                  />
                </label>
              </>
            )}

            <label className="floating-label block mb-4">
              <span>Email</span>
              <input
                type="email"
                placeholder="Enter your Email"
                className="input input-md w-full"
                value={emailId}
                onChange={(e) => setEmailId(e.target.value)}
                required
              />
            </label>

            <label className="floating-label block mb-2">
              <span>Password</span>
              <input
                type="password"
                placeholder="Enter your Password"
                className="input input-md w-full"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </label>
            <p className="text-red-500 text-xs">{error}</p>
            <button
              type="submit"
              className="btn btn-primary w-80 rounded-3xl mt-4"
            >
              {isLogin ? "Sign In" : "Sign Up"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
