import useFeed from "../hooks/useFeed";
import UserCard from "./UserCard";

const Feed = () => {
  const { data: feed, loading, error } = useFeed();

  if (loading) return <div className="text-center my-10">Loading...</div>;
  if (error) return <div className="text-red-500 text-center my-10">{error}</div>;

  if (!feed || feed.length <= 0) {
    return <h1 className="flex justify-center my-10">No new users found!</h1>;
  }

  return (
    <div className="flex justify-center my-10">
      <UserCard user={feed[0]} />
    </div>
  );
};

export default Feed;
