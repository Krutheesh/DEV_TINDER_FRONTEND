import { useSelector } from "react-redux";
import EditProfile from "./EditProfile";

const Profile = () => {
  const { user, loading } = useSelector((store) => store.auth);

  if (loading) return <div>Loading profile...</div>;
  if (!user) return <div>User not found or not logged in.</div>;

  return <EditProfile user={user} />;
};

export default Profile;
