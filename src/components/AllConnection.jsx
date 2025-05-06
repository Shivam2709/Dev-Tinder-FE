import axios from "axios";
import React, { useEffect } from "react";
import { BASE_URL } from "../utils/Constant";
import { useDispatch, useSelector } from "react-redux";
import { addConnections } from "../utils/connectionSlice";
import toast from "react-hot-toast";

const AllConnection = () => {
  const connections = useSelector((store) => store.connection);
  const dispatch = useDispatch();
  const fetchConnection = async () => {
    try {
      const res = await axios.get(BASE_URL + "/user/connections", {
        withCredentials: true,
      });
      dispatch(addConnections(res.data.data));
      toast.success("See All Connections!");
    } catch (err) {
      toast.error("Something went wrong", err.message);
    }
  };

  useEffect(() => {
    fetchConnection();
  }, []);

  if (connections === null || connections === undefined) {
    return <h1 className="flex justify-center my-10">Loading feed...</h1>;
  }

  // Empty feed state
  if (Array.isArray(connections) && connections.length === 0) {
    return <h1 className="flex justify-center my-10">No Any Connection...</h1>;
  }

  return (
    <div className="text-center my-10">
      <h1 className="text-bold text-white text-3xl">Connections</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-y-20 mt-10">
        {connections.map((connection) => {
          const { _id, firstName, lastName, profilePic, about } = connection;

          return (
            <div key={_id} className="w-100 h-100">
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

export default AllConnection;
