import { useDispatch } from "react-redux";
import { addUser, userFailure } from "../store/authSlice";
import { editUserProfile } from "../services/authService";
import toast from "react-hot-toast";

const useEditProfile = () => {
  const dispatch = useDispatch();

  const updateProfile = async (userData) => {
    try {
      const updatedUser = await editUserProfile(userData);
      dispatch(addUser(updatedUser));
      console.log("Updated user data:", updatedUser);
      toast.success("Profile saved successfully.");
    } catch (err) {
      const message = err?.response?.data || "Failed to update profile";
      dispatch(userFailure(message));
      toast.error(message);
    }
  };

  return updateProfile;
};

export default useEditProfile;
