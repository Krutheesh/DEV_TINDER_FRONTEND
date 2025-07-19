import axios from "axios";
import { BASE_URL } from "../constants/index";

export const fetchLoggedInUser = async () => {
  const response = await axios.get(`${BASE_URL}/profile/view`, {
    withCredentials: true,
  });
  return response.data;
};

export const loginUser = async (credentials) => {
  const response = await axios.post(`${BASE_URL}/login`, credentials, {
    withCredentials: true,
  });
  return response.data;
};

export const signUpUser = async (formData) => {
  const response = await axios.post(`${BASE_URL}/signup`, formData, {
    withCredentials: true,
  });
  return response.data.data;
};

export const logoutUser = async () => {
  const response = await axios.post(
    `${BASE_URL}/logout`,
    {},
    { withCredentials: true }
  );
  return response.data;
};

export const editUserProfile = async (userData) => {
  const response = await axios.patch(`${BASE_URL}/profile/edit`, userData, {
    withCredentials: true,
  });
  return response.data.data;
};
