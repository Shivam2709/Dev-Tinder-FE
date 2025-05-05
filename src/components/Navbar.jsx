import axios from "axios";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { BASE_URL } from "../utils/Constant";
import { removeUser } from "../utils/userSlice";
import toast from "react-hot-toast";
import { IoIosLogOut } from "react-icons/io";

const Navbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);

  const handleLogout = async () => {
    try {
      await axios.post(BASE_URL + "/logout", {}, { withCredentials: true });
      dispatch(removeUser());
      navigate("/login");
      toast.success("Logout successfully..!");
    } catch (err) {
      toast.error("Login failed. Please check your credentials.");
      console.log(err);
    }
  };

  return (
    <div className="navbar fixed top-0 left-0 w-full z-50 bg-base-300 shadow-sm h-[50px]">
      <div className="flex-1">
        <Link to="/" className="btn btn-ghost text-xl">
          <span className="w-8 h-7">
            <img className="rounded-b-md" src="/public/logo.png" alt="Logo" />
          </span>
          DevTinder
        </Link>
      </div>
      {user && (
        <div className="flex">
          <div className="form-control mt-2">Welcome, {user.firstName}</div>
          <div className="dropdown dropdown-end mx-5 flex">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full">
                <img alt="user photo" src={user.profilePic} />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-300 rounded-box z-1 mt-14 mr-[-20px] w-52 p-2 shadow"
            >
              <li>
                <Link to="/profile" className="justify-between">
                  Profile
                </Link>
              </li>
              <li>
                <Link to="/connections">Connections</Link>
              </li>
              <li>
                <Link to="/requests">All Requests</Link>
              </li>
              <li>
                <a onClick={handleLogout}>
                  Logout
                  <span className="ml-25">
                    <IoIosLogOut size={24} />
                  </span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
