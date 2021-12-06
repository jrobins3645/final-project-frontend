import { useContext } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../context/AuthContext";
import { signOut } from "../firebaseConfig";
import pokeballLogo from "../images/pokeball.png";
import "./Header.css";

const Header = () => {
  const { profile } = useContext(AuthContext);

  return (
    <div className="Header">
      <Link to="/">
        <img src={pokeballLogo} alt="logo" className="logo" />
      </Link>
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
          <Link to="/leaderboard">Leaderboard</Link>
          <Link to="/about">About</Link>
          {profile ? (
            <>
              <Link to={`/profiles/${profile.uid}`}>My Account</Link>
              <button onClick={signOut}>Sign out</button>
            </>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default Header;

<button onClick={signOut}>Sign out</button>;
