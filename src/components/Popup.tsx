import { useContext } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../context/AuthContext";
import { signInWithGoogle } from "../firebaseConfig";
import "./Popup.css";
import ProfileCreator from "./ProfileCreator";

interface Props {
  score: number;
}

const Popup = ({score}: Props) => {
  const { user, profile, guestPopup, setGuestPopup } = useContext(AuthContext);

  return (
    <div className="popup">
      {user && !profile && <ProfileCreator score={score}/>}
      {!user ? (
        <div className="sign-in">
          <button onClick={signInWithGoogle}>Sign in with Google</button>
          <p>or</p>
          <button onClick={()=>setGuestPopup(false)}>Continue as Guest</button>
        </div>
      ) : null}
    </div>
  );
};

export default Popup;
