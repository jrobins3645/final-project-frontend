import { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../context/AuthContext";
import { signInWithGoogle } from "../firebaseConfig";
import { addScore } from "../services/ScoreService";
import "./Popup.css";
import ProfileCreator from "./ProfileCreator";

interface Props {
  score: number;
}

const Popup = ({ score }: Props) => {
  const { user, profile, guestPopup, setGuestPopup } = useContext(AuthContext);
  const sendUserScore = () => {
    if (user && profile) {
      addScore({
        score,
        uid: user.uid,
        avatar: profile.avatar,
        username: profile.username,
      }).then((response) => {
        console.log(response);
      });
    }
  };

  useEffect(() => {
    sendUserScore();
  }, [user, profile]);

  return (
    <div className="popup">
      {user && !profile && <ProfileCreator score={score} />}
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
  );
};

export default Popup;
