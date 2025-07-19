import { useDispatch, useSelector } from "react-redux";
import toast from "react-hot-toast";

import {
  requestStart,
  addRequests,
  requestFailure,
  removeRequest,
} from "../store/requestSlice";

import {
  sendUserRequest,
  fetchRequests,
  reviewRequest,
} from "../services/requestService";
import { removeUserFromFeed } from "../store/feedSlice";

const useUserRequest = () => {
  const dispatch = useDispatch();
  const {
    data: requests,
    loading,
    error,
  } = useSelector((state) => state.requests);

  // 👉 Send interested / ignored request
  const sendRequest = async (status, userId) => {
    try {
      await sendUserRequest(status, userId);
      dispatch(removeUserFromFeed(userId));
      toast.success(
        status === "interested" ? "Marked as Interested" : "Ignored"
      );
    } catch (err) {
      const msg = err?.response?.data || "Failed to send request";
      toast.error(msg);
    }
  };

  // 👉 Fetch all received requests
  const getRequests = async () => {
    dispatch(requestStart());
    try {
      const data = await fetchRequests();
      dispatch(addRequests(data));
    } catch (err) {
      const msg = err?.response?.data || "Failed to fetch requests";
      dispatch(requestFailure(msg));
      toast.error(msg);
    }
  };

  // 👉 Accept or reject request
  const handleReview = async (status, requestId) => {
    try {
      await reviewRequest(status, requestId);
      dispatch(removeRequest(requestId));
      toast.success(`Request ${status}`);
    } catch (err) {
      const msg = err?.response?.data || "Failed to review request";
      toast.error(msg);
    }
  };

  return {
    sendRequest,
    getRequests,
    handleReview,
    requests,
    loading,
    error,
  };
};

export default useUserRequest;
