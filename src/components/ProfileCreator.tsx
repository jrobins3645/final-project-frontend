import { FormEvent, useContext, useRef, useState } from "react";
import Profile from "../models/Profile";
import { addProfile } from "../services/ProfileService";
import "./ProfileCreator.css";
import { signOut, storage } from "../firebaseConfig";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import TriviaContext from "../context/TriviaContext";

const ProfileCreator = () => {
  const { user, setProfile, setGuestPopup } = useContext(TriviaContext);
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
          addProfile(profile).then(() => {
            setProfile(profile);
            setGuestPopup(false);
          });
        });
      });
    } else {
      addProfile(profile).then(() => {
        setProfile(profile);
        setGuestPopup(false);
      });
    }
  };

  return (
    <div>
      <form className="ProfileCreator" onSubmit={submitHandler}>
        <div className="top-of-profile-creator">
          <p className="close-popup" onClick={signOut}>
            X
          </p>
          <h2 className="element">Create Account</h2>
        </div>
        <label htmlFor="username" className="username element">
          Username
          <input
            type="text"
            name="username"
            id="username"
            value={username}
            onChange={(e) => {
              setUsername(e.target.value);
            }}
            autoFocus={true}
            autoComplete="off"
          />
        </label>
        <label htmlFor="">
          Upload Avatar
          <input ref={fileInputRef} type="file" className="file-element" />
        </label>

        <button className="submit-button">Submit</button>
      </form>
    </div>
  );
};

export default ProfileCreator;
