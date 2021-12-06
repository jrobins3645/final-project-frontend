import { useContext } from "react";
import AuthContext from "../context/AuthContext";
import { signInWithGoogle } from "../firebaseConfig";
import "./Popup.css";
import ProfileCreator from "./ProfileCreator";

const Popup = () => {
  const { user, profile } = useContext(AuthContext);
  return (
    <div className="Log-In">
      {user && !profile && <ProfileCreator />}
      {!user ? (
        <div className="sign-in">
          <button onClick={signInWithGoogle}>Sign in with Google</button>
          <p>or</p>
          <button>Continue as Guest</button>
        </div>
      ) : null}
    </div>
  );
};

export default Popup;
