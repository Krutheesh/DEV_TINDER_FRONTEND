import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { removeUser } from "../store/authSlice";
import { logoutUser } from "../services/authService";
import toast from "react-hot-toast";

const useLogout = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logoutUser();
      dispatch(removeUser());
      navigate("/login");
    } catch (err) {
      toast.error("Logout failed. Try again.");
      console.error(err);
    }
  };

  return handleLogout;
};

export default useLogout;
