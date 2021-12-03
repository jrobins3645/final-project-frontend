import "./Homepage.css";
import { useContext } from "react";
import AuthContext from "../context/AuthContext";
import Popup from "./Popup";

const Homepage = () => {
  const { user } = useContext(AuthContext);

  return <div className="Homepage">{!user ? <Popup /> : null}</div>;
};

export default Homepage;
