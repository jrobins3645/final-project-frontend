import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { signInWithGoogle, signOut } from "../firebaseConfig";
import pokeballLogo from "../images/pokeball.png";
import pokemon_trivia from "../images/pokemon_trivia.png";
import defaultProfilePic from "../images/defaultProfilePic.jpg";
import "./Header.css";
import TriviaContext from "../context/TriviaContext";

const Header = () => {
  const { profile, user } = useContext(TriviaContext);
  const [showNav, setShowNav] = useState(false);

  const clickHandler = () => {
    if (showNav) {
      setShowNav(false);
    } else {
      setShowNav(true);
    }
  };

  return (
    <div className="Header">
      <div className="logo-title">
        <Link to="/">
          <img src={pokeballLogo} alt="logo" className="pokeball logo" />
          <img
            src={pokemon_trivia}
            alt="Pokemon trivia title"
            className="title"
          />
        </Link>
      </div>
      <div className="profile-menu">
        {profile ? (
          <div className="profile">
            <p>{profile.username}</p>
            <img src={profile.avatar} alt="profile avatar" className="avatar" />
          </div>
        ) : (
          <div className="profile">
            <p>Guest</p>
            <img src={defaultProfilePic} alt="Default" className="avatar" />
            <button onClick={signInWithGoogle}>Sign In</button>
          </div>
        )}
        <nav className="dropdown">
          <button onClick={clickHandler}>
            <i className="fas fa-bars"></i>
          </button>
          <div className={`${showNav ? "drop-content" : "hidden"}`}>
            <div className="menu-item">
              <Link to="/leaderboard">Leaderboard</Link>
            </div>
            <div className="menu-item">
              <Link to="/about">About</Link>
            </div>
            {user ? (
              <>
                <div className="menu-item">
                  <Link to={`/profiles/${profile?.uid}`}>My Account</Link>
                </div>
                <div className="menu-item">
                  <button onClick={signOut}>Sign out</button>
                </div>
              </>
            ) : null}
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Header;

<button onClick={signOut}>Sign out</button>;
