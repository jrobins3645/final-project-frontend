import "./Homepage.css";
import { useContext } from "react";
import ProfilePopup from "./ProfilePopup";
import AuthContext from "../context/AuthContext";

const Homepage = () => {
  const { registeredUser } = useContext(AuthContext);

  return (
    <div className="Homepage">{!registeredUser ? <ProfilePopup /> : null}</div>
  );
};

export default Homepage;
