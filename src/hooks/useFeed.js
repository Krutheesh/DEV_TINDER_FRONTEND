import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { feedStart, addFeed, feedFailure } from "../store/feedSlice";
import { fetchFeed } from "../services/feedService";

const useFeed = () => {
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector((state) => state.feed);
  const getFeed = async () => {
    if (data) return;
    try {
      dispatch(feedStart());
      const feedData = await fetchFeed();
      dispatch(addFeed(feedData));
    } catch (err) {
      dispatch(feedFailure(err?.response?.data || "Failed to load feed"));
    }
  };
  useEffect(() => {
    getFeed();
  }, [data, dispatch]);

  return { data, loading, error };
};

export default useFeed;
