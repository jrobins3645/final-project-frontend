import "./Homepage.css";
import { useContext } from "react";
import ProfilePopup from "./ProfilePopup";
import AuthContext from "../context/AuthContext";

const Homepage = () => {
  const { profile, user } = useContext(AuthContext);

  return <div className="Homepage">{!user ? <ProfilePopup /> : null}</div>;
};

export default Homepage;
