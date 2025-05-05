import React, { useEffect } from "react";
import { BASE_URL } from "../utils/Constant";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { addRequests, removeRequest } from "../utils/requestSlice";
import toast from "react-hot-toast";
const ConnectionRequest = () => {
  const requests = useSelector((store) => store.requests);
  const dispatch = useDispatch();

  const reviewRequest = async (status, _id) => {
    try {
      await axios.post(
        BASE_URL + "/request/review/" + status + "/" + _id,
        {},
        { withCredentials: true }
      );
      dispatch(removeRequest(_id));
      if (status === "accepted") {
        toast.success("Connection request accepted!");
      } else {
        toast.success("Connection request rejected!");
      }
    } catch (err) {
      console.log(err);
      toast.error("Failed to process request");
    }
  };

  const fetchConnection = async () => {
    try {
      const res = await axios.get(BASE_URL + "/user/requests/received", {
        withCredentials: true,
      });
      dispatch(addRequests(res.data.data));
      toast.success("All Friend Request!");
    } catch (err) {
      toast.error("Something went wrong", err.message);
    }
  };

  useEffect(() => {
    fetchConnection();
  }, []);

  if (requests === null || requests === undefined) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="flex justify-center my-10"
      >
        <h1>Loading feed...</h1>
      </motion.div>
    );
  }

  if (Array.isArray(requests) && requests.length === 0) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="flex justify-center my-10"
      >
        <h1>No Friend Request...</h1>
      </motion.div>
    );
  }

  return (
    <div className="text-center my-10">
      <motion.h1
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="text-bold text-white text-3xl"
      >
        Connection Requests
      </motion.h1>
      <div className="flex flex-wrap justify-center gap-6 mt-5">
        {requests.map((request, index) => {
          const { _id, firstName, lastName, profilePic, about } =
            request.fromUserId;

          return (
            <motion.div
              key={_id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="w-100 h-100"
            >
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="flex card bg-base-300 w-96 shadow-sm"
              >
                <figure className="px-10 pt-10">
                  <motion.img
                    whileHover={{ scale: 1.1 }}
                    src={profilePic}
                    alt="Profile"
                    className="rounded-xl"
                  />
                </figure>
                <div className="card-body items-center text-center">
                  <h2 className="card-title">{firstName + " " + lastName}</h2>
                  <p>{about}</p>
                </div>
                <div className="flex justify-center gap-10 m-2">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="btn btn-soft btn-error"
                    onClick={() => reviewRequest("rejected", request._id)}
                  >
                    Reject
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="btn btn-soft btn-primary"
                    onClick={() => reviewRequest("accepted", request._id)}
                  >
                    Accept
                  </motion.button>
                </div>
              </motion.div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default ConnectionRequest;
