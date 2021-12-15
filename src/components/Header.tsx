import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { signInWithGoogle, signOut } from "../firebaseConfig";
import pokeballLogo from "../images/pokeball.png";
import pokemon_trivia from "../images/pokemon_trivia.png";
import defaultProfilePic from "../images/defaultProfilePic.jpg";
import "./Header.css";
import TriviaContext from "../context/TriviaContext";

const Header = () => {
  const { profile, user, setScore, setQuestionsAnswered, setQuestionsCorrect } =
    useContext(TriviaContext);
  const [showNav, setShowNav] = useState(false);
  const newQuiz = () => {
    setScore(0);
    setQuestionsAnswered(0);
    setQuestionsCorrect(0);
  };
  const clickHandler = () => {
    if (showNav) {
      setShowNav(false);
    } else {
      setShowNav(true);
    }
  };

  return (
    <div className="Header">
      <Link to="/" onClick={newQuiz} className="logo-title">
        <img src={pokeballLogo} alt="pokeball" className="pokeball logo" />
        <img
          src={pokemon_trivia}
          alt="Pokemon trivia title"
          className="title"
        />
      </Link>
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
          <button className="burger" onClick={clickHandler}>
            <i className="fas fa-bars"></i>
          </button>
          <div className={`${showNav ? "mobile-content" : "desktop-content"}`}>
            <div className="menu-item">
              <Link to="/leaderboard" onClick={() => {}}>
                Leaderboard
              </Link>
            </div>
            <div className="menu-item">
              <Link to="/about" onClick={() => {}}>
                About
              </Link>
            </div>
            {user && (
              <>
                <div className="menu-item">
                  <Link to={`/profiles/${profile?.uid}`} onClick={() => {}}>
                    My Account
                  </Link>
                </div>
                <div className="menu-item">
                  <button className="sign-out" onClick={signOut}>
                    Sign out
                  </button>
                </div>
              </>
            )}
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Header;

<button onClick={signOut}>Sign out</button>;
