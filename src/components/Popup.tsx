import { useContext } from "react";
import TriviaContext from "../context/TriviaContext";
import { signInWithGoogle } from "../firebaseConfig";
import "./Popup.css";
import ProfileCreator from "./ProfileCreator";

const Popup = () => {
  const { user, profile, setGuestPopup } = useContext(TriviaContext);

  return (
    <div className="Popup-container">
      <div className="Popup">
        {user && !profile && <ProfileCreator />}
        {!user ? (
          <div className="sign-in">
            <button onClick={signInWithGoogle}>Sign in with Google</button>
            <p>or</p>
            <button onClick={() => setGuestPopup(false)}>
              Continue as Guest
            </button>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default Popup;
