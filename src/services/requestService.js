import axios from "axios";
import { BASE_URL } from "../constants/index";

// Used in Feed/UserCard (via useUserRequest) for marking interested/ignored
export const sendUserRequest = async (status, userId) => {
  const res = await axios.post(
    `${BASE_URL}/request/send/${status}/${userId}`,
    {},
    { withCredentials: true }
  );
  return res.data;
};

// Used in Requests page to accept/reject connection requests
export const reviewRequest = async (status, requestId) => {
  const res = await axios.post(
    `${BASE_URL}/request/review/${status}/${requestId}`,
    {},
    { withCredentials: true }
  );
  return res.data;
};

// Used to fetch all received requests
export const fetchRequests = async () => {
  const res = await axios.get(`${BASE_URL}/user/requests/received`, {
    withCredentials: true,
  });
  return res.data.data;
};
