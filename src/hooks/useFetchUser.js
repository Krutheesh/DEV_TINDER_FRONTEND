import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { userStart, userFailure, addUser } from "../store/authSlice";
import { fetchLoggedInUser } from "../services/authService";
import toast from "react-hot-toast";

const useFetchUser = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user, loading, error } = useSelector((store) => store.auth);

  const fetchData = async () => {
    if (user) return;

    // dispatch(userStart());
    try {
      const userData = await fetchLoggedInUser();
      dispatch(addUser(userData));
    } catch (err) {
      dispatch(userFailure(null));
      if (err?.response?.status === 401) {
        navigate("/login");
      } else {
        // toast.error("Failed to load user");
      }
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return { user, loading, error };
};

export default useFetchUser;
