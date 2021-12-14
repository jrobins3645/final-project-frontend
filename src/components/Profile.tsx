import { signOut } from "@firebase/auth";
import { useContext, useEffect, useState } from "react";
import { deleteProfile } from "../services/ProfileService";
import { deleteScores, getHighscore } from "../services/ScoreService";
import "./Profile.css";
import { auth } from "../firebaseConfig";
import { useHistory } from "react-router-dom";
import TriviaContext from "../context/TriviaContext";

const Profile = () => {
  const { profile } = useContext(TriviaContext);
  const [requestDelete, setRequestDelete] = useState(false);
  const [highScore, setHighScore] = useState(0);
  let history = useHistory();

  useEffect(() => {
    if (profile) {
      getHighscore(profile?.uid!).then((response) => {
        response.length !== 0 && setHighScore(response[0].score);
      });
    }
  }, [profile]);

  const clickHandler = () => {
    console.log("clicked delete");
    deleteProfile(profile!.uid).then(() => {});
    deleteScores(profile!.uid).then(() => {});
    signOut(auth);
    history.push("/");
  };

  return (
    <div className="Profile">
      <div className="stats-container">
        <h2>Username: {profile?.username}</h2>
        <h3>Personal High Score: {highScore} </h3>
      </div>
      <button className="delete-button" onClick={() => setRequestDelete(true)}>
        Delete Account
      </button>
      {requestDelete ? (
        <>
          <div className="are-you-sure-popup-container"></div>
          <div className="are-you-sure-popup">
            <p>
              Are you absolutely sure you want to delete your account? All
              records will be erased.
            </p>
            <button className="yes-button" onClick={clickHandler}>
              YES, delete my account!
            </button>
            <button
              className="no-button"
              onClick={() => {
                setRequestDelete(false);
              }}
            >
              NO, I made a horrible mistake!
            </button>
          </div>
        </>
      ) : null}
    </div>
  );
};

export default Profile;
