import { FormEvent, useContext, useRef, useState } from "react";
import AuthContext from "../context/AuthContext";
import Profile from "../models/Profile";
import { addProfile } from "../services/ProfileService";
import "./ProfileCreator.css";
import { storage } from "../firebaseConfig";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import Score from "../models/Score";
import { addScore } from "../services/ScoreService";

interface Props {
  score: number;
}

const ProfileCreator = ({ score }: Props) => {
  const { user, guestPopup } = useContext(AuthContext);
  const [username, setUsername] = useState("");
  const fileInputRef = useRef<HTMLInputElement>(null);

  const submitHandler = (e: FormEvent) => {
    e.preventDefault();

    const profile: Profile = {
      uid: user!.uid,
      avatar:
        "https://firebasestorage.googleapis.com/v0/b/pokemon-trivia-project.appspot.com/o/defaultProfilePic.jpg?alt=media&token=d20caf9d-8519-4300-a7fb-03c69844b481",
      username,
    };
    const files = fileInputRef.current?.files;
    if (files && files[0]) {
      const file = files[0]; // Here is the file we need
      const storageRef = ref(storage, file.name);
      uploadBytes(storageRef, file).then((snapshot) => {
        getDownloadURL(snapshot.ref).then((response) => {
          console.log(response);
          profile.avatar = response;
          addProfile(profile);
          if (guestPopup) {
            const newScore: Score = {
              score,
              username,
              avatar: response,
              uid: user!.uid,
            };
            addScore(newScore);
          }
        });
      });
    }
  };

  return (
    <form className="ProfileCreator" onSubmit={submitHandler}>
      <label htmlFor="username">
        Create a Username
        <input
          type="text"
          name="username"
          id="username"
          value={username}
          onChange={(e) => {
            setUsername(e.target.value);
          }}
        />
      </label>
      <label htmlFor=""></label>
      <input ref={fileInputRef} type="file" />
      <button>Submit</button>
    </form>
  );
};

export default ProfileCreator;
