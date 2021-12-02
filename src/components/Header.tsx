import { useContext } from "react";
import AuthContext from "../context/AuthContext";
import "./Header.css";

const Header = () => {
  const { user } = useContext(AuthContext);

  return (
    <div className="Header">
      <img src="pokeballpng.png" alt="logo" />
      <h1>Hangman</h1>
      <i className="far fa-bars"></i>

      {user ? (
        <div>
          <p>{user.displayName}</p>
        </div>
      ) : (
        <p>Guest</p>
      )}
    </div>
  );
};

export default Header;
