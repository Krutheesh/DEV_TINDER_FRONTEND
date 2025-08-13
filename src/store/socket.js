import io from "socket.io-client";
import { BASE_URL } from "../constants/index";

export const createSocketConnection = () => {
  if (location.hostname === "localhost") {
    // console.log("Creating socket connection for localhost", BASE_URL);
    return io("http://localhost:7777/");
  } else {
    return io("/", { path: "/api/socket.io" });
  }
};
