import React, { useEffect } from "react";
import { BASE_URL } from "../utils/Constant";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { addRequests } from "../utils/requestSlice";
import toast from "react-hot-toast";

const ConnectionRequest = () => {
  const requests = useSelector((store) => store.requests);
  const dispatch = useDispatch();
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
    return <h1 className="flex justify-center my-10">Loading feed...</h1>;
  }

  if (Array.isArray(requests) && requests.length === 0) {
    return <h1 className="flex justify-center my-10">No Friend Request...</h1>;
  }
  return (
    <div className="text-center my-10">
      <h1 className="text-bold text-white text-3xl">All Requests</h1>
      <div className="flex flex-wrap justify-center gap-6 mt-5">
        {requests.map((connection) => {
          const { firstName, lastName, profilePic, about } = connection;

          return (
            <div className="w-100 h-100">
              <div className="flex card bg-base-300 w-96 shadow-sm">
                <figure className="px-10 pt-10">
                  <img src={profilePic} alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                  <h2 className="card-title">{firstName + " " + lastName}</h2>
                  <p>{about}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ConnectionRequest;
