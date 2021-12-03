import { useContext } from "react";
import AuthContext from "../context/AuthContext";
import { signOut } from "../firebaseConfig";
import pokeballLogo from "../images/pokeball.png";
import "./Header.css";
import ProfileCreator from "./ProfileCreator";

const Header = () => {
  const { profile, user } = useContext(AuthContext);

  return (
    <div className="Header">
      <img src={pokeballLogo} alt="logo" className="logo" />
      <h1>Pokemon Trivia</h1>

      {profile ? (
        <div className="profile">
          {profile ? (
            <div className="profile">
              <p>{profile.username}</p>
              <img
                src={profile.avatar}
                alt="profile avatar"
                className="avatar"
              />
            </div>
          ) : (
            <p>Guest</p>
          )}
        </div>
      ) : null}
      <div className="dropdown">
        <button className="drop-button">
          <i className="fas fa-bars"></i>
        </button>
        <div className="drop-content">
          <a href="">My Account</a>
          <button onClick={signOut}>Sign out</button>
        </div>
      </div>
    </div>
  );
};

export default Header;

<button onClick={signOut}>Sign out</button>;
