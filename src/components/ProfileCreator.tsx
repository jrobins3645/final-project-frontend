import { FormEvent, useContext, useRef, useState } from "react";
import AuthContext from "../context/AuthContext";
import Profile from "../models/Profile";
import { addProfile } from "../services/ProfileService";
import "./ProfileCreator.css";
import { storage } from "../firebaseConfig";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";

const ProfileCreator = () => {
  // const [username, setUsername]
  const { user } = useContext(AuthContext);
  const [username, setUsername] = useState("");
  const fileInputRef = useRef<HTMLInputElement>(null);

  const submitHandler = (e: FormEvent) => {
    e.preventDefault();
    const profile: Profile = {
      uid: user!.uid,
      avatar: fileInputRef,
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
        });
      });
    }
  };

  return (
    <form className="ProfileCreator" onSubmit={submitHandler}>
      <label htmlFor="username">
        Create a Username
        <input type="text" name="username" id="username" />
      </label>
      <label htmlFor=""></label>
      <input ref={fileInputRef} type="file" />
    </form>
  );
};

export default ProfileCreator;
function ref(storage: any, name: string) {
  throw new Error("Function not implemented.");
}

function uploadBytes(storageRef: void, file: File) {
  throw new Error("Function not implemented.");
}

function getDownloadURL(ref: any) {
  throw new Error("Function not implemented.");
}
