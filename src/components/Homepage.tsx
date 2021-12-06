import "./Homepage.css";
import { useContext } from "react";
import AuthContext from "../context/AuthContext";
import Popup from "./Popup";
import PokemonContext from "../context/PokemonContext";

const Homepage = () => {
  const { idList } = useContext(PokemonContext);
  const { profile } = useContext(AuthContext);

  return (
    <div className="Homepage">
      {!profile ? <Popup /> : null}
      {idList}
    </div>
  );
};

export default Homepage;
