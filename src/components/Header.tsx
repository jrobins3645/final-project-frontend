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
      <i className="far fa-bars"></i>
      <button onClick={signOut}>Sign out</button>
      {profile ? (
        <div className="profile">
          <button onClick={signOut}>Sign out</button>
          {profile ? <p>{profile.username}</p> : <p>Guest</p>}
        </div>
      ) : null}
      {user && !profile && <ProfileCreator />}
    </div>
  );
};

export default Header;
