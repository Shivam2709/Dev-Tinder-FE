import axios from "axios";
import React from "react";
import { useDispatch } from "react-redux";
import { BASE_URL } from "../utils/Constant";
import { removeUserFromFeed } from "../utils/feedSlice";
import { motion } from "framer-motion";
import toast from "react-hot-toast";

const UserCard = ({ user, showButtons = true }) => {
  const { _id, firstName, lastName, profilePic, age, gender, about, skills } =
    user;

  const handleSendRequest = async (status, userId) => {
    try {
      await axios.post(
        BASE_URL + "/request/send/" + status + "/" + userId,
        {},
        { withCredentials: true }
      );
      dispatch(removeUserFromFeed(userId));
      if (status === "interested") {
        toast.success("Interest sent successfully! 🎉");
      } else {
        toast.success("User ignored");
      }
    } catch (error) {
      toast.error("Failed to process request");
    }
  };

  const dispatch = useDispatch();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        className="card bg-base-300 w-96 shadow-sm mt-5"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        <figure>
          <motion.img
            src={user.profilePic}
            alt="photo"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3 }}
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{firstName + " " + lastName}</h2>
          {age && gender && <p>{age + ", " + gender}</p>}
          <p>{about}</p>
          <p>Skills: {skills}</p>
          {showButtons && (
            <div className="card-actions justify-between my-4">
              <motion.button
                className="btn btn-error"
                onClick={() => handleSendRequest("ignored", _id)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Ignore
              </motion.button>
              <motion.button
                className="btn btn-success"
                onClick={() => handleSendRequest("interested", _id)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Interested
              </motion.button>
            </div>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default UserCard;
