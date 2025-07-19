import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";
import Footer from "./Footer";
import useFetchUser from "../hooks/useFetchUser";
import { Toaster } from "react-hot-toast";

const Body = () => {
  const { user } = useFetchUser(); // future-proof and clear

  return (
    <div>
      <NavBar />
      <Outlet />
      <Footer />
      <Toaster/>
    </div>
  );
};

export default Body;
