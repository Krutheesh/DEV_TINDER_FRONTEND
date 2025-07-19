import axios from "axios";
import { BASE_URL } from "../constants/index";

export const fetchFeed = async () => {
  const res = await axios.get(`${BASE_URL}/feed`, {
    withCredentials: true,
  });
  return res.data.data;
};
