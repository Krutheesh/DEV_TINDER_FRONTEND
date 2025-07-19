import axios from "axios";
import { BASE_URL } from "../constants/index";

export const fetchUserConnections = async () => {
  const res = await axios.get(`${BASE_URL}/user/connections`, {
    withCredentials: true,
  });
  return res.data.data;
};
