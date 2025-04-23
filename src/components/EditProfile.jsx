import React, { useState } from "react";
import UserCard from "./UserCard";
import axios from "axios";
import { BASE_URL } from "../utils/Constant";
import { addUser } from "../utils/userSlice";
import { useDispatch } from "react-redux";
import toast from "react-hot-toast";

const EditProfile = ({ user }) => {
  const [firstName, setFirstName] = useState(user.firstName);
  const [lastName, setLastName] = useState(user.lastName);
  const [profilePic, setProfilePic] = useState(user.profilePic);
  const [age, setAge] = useState(user.age || "");
  const [gender, setGender] = useState(user.gender || "");
  const [about, setAbout] = useState(user.about || "");
  const [skills, setSkills] = useState(user.skills);
  const [error, setError] = useState("");
  const dispatch = useDispatch();

  const saveProfile = async () => {
    setError("");
    try {
      const res = await axios.patch(
        BASE_URL + "/profile/edit",
        {
          firstName,
          lastName,
          profilePic,
          age,
          gender,
          about,
          skills,
        },
        { withCredentials: true }
      );
      dispatch(addUser(res?.data?.data));

      toast.success("Profile Updated Succesfully!");
    } catch (err) {
      toast.error("Somthing went Wrong!", err.message);
      setError(err.response.data);
    }
  };

  return (
    <>
      <div className="flex justify-center my-10 overflow-hidden">
        <div className="flex justify-center mx-10">
          <div className="card bg-base-300 w-200 shadow-xl">
            <div className="card-body">
              <h2 className="card-title justify-center">Edit Profile</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* First Name */}
                <label className="form-control w-full max-w-xs my-2">
                  <div className="label">
                    <span className="label-text">First Name:</span>
                  </div>
                  <input
                    type="text"
                    value={firstName}
                    className="input input-bordered w-full max-w-xs"
                    onChange={(e) => setFirstName(e.target.value)}
                  />
                </label>

                {/* Last Name */}
                <label className="form-control w-full max-w-xs my-2">
                  <div className="label">
                    <span className="label-text">Last Name:</span>
                  </div>
                  <input
                    type="text"
                    value={lastName}
                    className="input input-bordered w-full max-w-xs"
                    onChange={(e) => setLastName(e.target.value)}
                  />
                </label>

                {/* Photo URL */}
                <label className="form-control w-full max-w-xs my-2">
                  <div className="label">
                    <span className="label-text">Photo URL:</span>
                  </div>
                  <input
                    type="text"
                    value={profilePic}
                    className="input input-bordered w-full max-w-xs"
                    onChange={(e) => setProfilePic(e.target.value)}
                  />
                </label>

                {/* Age */}
                <label className="form-control w-full max-w-xs my-2">
                  <div className="label">
                    <span className="label-text">Age:</span>
                  </div>
                  <input
                    type="text"
                    value={age}
                    className="input input-bordered w-full max-w-xs"
                    onChange={(e) => setAge(e.target.value)}
                  />
                </label>

                {/* Gender */}
                <div className="form-control w-full max-w-xs my-2">
                  <div className="label">
                    <span className="label-text">Gender:</span>
                  </div>
                  <div className="flex gap-4">
                    <label className="label cursor-pointer">
                      <input
                        type="radio"
                        name="gender"
                        value="male"
                        checked={gender === "male"}
                        onChange={(e) => setGender(e.target.value)}
                        className="radio checked:bg-blue-500"
                      />
                      <span className="label-text ml-2">Male</span>
                    </label>
                    <label className="label cursor-pointer">
                      <input
                        type="radio"
                        name="gender"
                        value="female"
                        checked={gender === "female"}
                        onChange={(e) => setGender(e.target.value)}
                        className="radio checked:bg-pink-500"
                      />
                      <span className="label-text ml-2">Female</span>
                    </label>
                    <label className="label cursor-pointer">
                      <input
                        type="radio"
                        name="gender"
                        value="other"
                        checked={gender === "other"}
                        onChange={(e) => setGender(e.target.value)}
                        className="radio checked:bg-purple-500"
                      />
                      <span className="label-text ml-2">Other</span>
                    </label>
                  </div>
                </div>

                <label className="form-control w-full max-w-xs my-2">
                  <div className="label">
                    <span className="label-text">Skills:</span>
                  </div>
                  <input
                    type="text"
                    value={skills.join(",")}
                    placeholder="Enter with , separated."
                    className="input input-bordered w-full max-w-xs"
                    onChange={(e) =>
                      setSkills(e.target.value.split(",").map((s) => s.trim()))
                    }
                  />
                </label>
              </div>
              <label className="form-control w-full max-w-xs my-2">
                <div className="label">
                  <span className="label-text">About:</span>
                </div>
                <textarea
                  className="textarea w-176"
                  value={about}
                  onChange={(e) => setAbout(e.target.value)}
                ></textarea>
              </label>

              <p className="text-red-500">{error}</p>
              <div className="card-actions justify-center m-2">
                <button className="btn btn-primary" onClick={saveProfile}>
                  Save Profile
                </button>
              </div>
            </div>
          </div>
        </div>
        <UserCard
          user={{ firstName, lastName, profilePic, age, gender, about, skills }}
        />
      </div>
    </>
  );
};

export default EditProfile;
