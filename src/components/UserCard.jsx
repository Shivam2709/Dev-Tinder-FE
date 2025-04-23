import React from "react";
import { useDispatch } from "react-redux";

const UserCard = ({ user }) => {
  const { _id, firstName, lastName, profilePic, age, gender, about, skills } =
    user;
  const dispatch = useDispatch();

  return (
    <div>
      <div className="card bg-base-300 w-96 shadow-sm">
        <figure>
          <img src={user.profilePic} alt="photo" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{firstName + " " + lastName}</h2>
          {age && gender && <p>{age + ", " + gender}</p>}
          <p>{about}</p>
          <p>Skills: {skills}</p>
          <div className="card-actions justify-between my-4">
            <button className="btn btn-error">Ignore</button>
            <button className="btn btn-success">Interested</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
