import "./Homepage.css";
import { useContext } from "react";
import AuthContext from "../context/AuthContext";
import Popup from "./Popup";
import PokemonContext from "../context/PokemonContext";
import Quiz from "./Quiz";

const Homepage = () => {
  const { profile } = useContext(AuthContext);

  return (
    <div className="Homepage">
      {!profile ? <Popup /> : null}
      <Quiz />
    </div>
  );
};

export default Homepage;
