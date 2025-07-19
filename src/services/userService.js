import axios from "axios";
import { BASE_URL } from "../utils/constants";

export const editUserProfile = async (updatedUserData) => {
  const response = await axios.patch(
    `${BASE_URL}/profile/edit`,
    updatedUserData,
    { withCredentials: true }
  );
  return response.data.data;
};
