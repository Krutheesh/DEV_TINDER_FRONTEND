import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { userStart, userFailure, addUser } from "../store/authSlice";
import { loginUser, signUpUser } from "../services/authService";
import toast from "react-hot-toast";

const useAuth = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = async (credentials) => {
    dispatch(userStart());
    try {
      const userData = await loginUser(credentials);
      console.log("User data:", userData);
      dispatch(addUser(userData.user));
      navigate("/");
    } catch (err) {
      console.log(err?.response?.data?.error)
      dispatch(userFailure(err?.response?.data?.error || "Login failed"));
      // toast.error(err?.response?.data || "Login failed");
    }
  };

  const handleSignUp = async (formData) => {
    dispatch(userStart());
    try {
      const userData = await signUpUser(formData);
      console.log("User data:", userData);
      dispatch(addUser(userData));
      navigate("/profile");
    } catch (err) {
      console.log(err?.response?.data?.error)
      dispatch(userFailure(err?.response?.data?.error || "Signup failed"));
      // toast.error(err?.response?.data?.error || "Signup failed");
    }
  };

  return { handleLogin, handleSignUp };
};

export default useAuth;
