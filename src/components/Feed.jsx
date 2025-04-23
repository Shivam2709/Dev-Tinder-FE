import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { BASE_URL } from "../utils/Constant";
import { addFeed } from "../utils/feedSlice";
import toast from "react-hot-toast";
import { useEffect } from "react";
import UserCard from "./UserCard";

const Feed = () => {
  const feed = useSelector((store) => store.feed);
  const dispatch = useDispatch();

  const getFeed = async () => {
    if (feed) return;
    try {
      const res = await axios.get(BASE_URL + "/feed", {
        withCredentials: true,
      });
      dispatch(addFeed(res?.data?.data));
      toast.success("Got all feeds!");
    } catch (err) {
      toast.error("Something went wrong..!");
      console.error(err);
    }
  };

  useEffect(() => {
    getFeed();
  }, []);

  // Loading state
  if (feed === null || feed === undefined) {
    return <h1 className="flex justify-center my-10">Loading feed...</h1>;
  }

  // Empty feed state
  if (Array.isArray(feed) && feed.length === 0) {
    return <h1 className="flex justify-center my-10">No new users found!</h1>;
  }

  // Feed loaded
  return (
    <div className="flex justify-center my-10 mt-2">
      <UserCard user={feed[0]} />
    </div>
  );
};

export default Feed;
