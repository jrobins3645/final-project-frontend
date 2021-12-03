import { FormEvent } from "react";
import Profile from "../models/Profile";
import { addProfile } from "../services/ProfileService";
import "./ProfileCreator.css";

const ProfileCreator = () => {
  // const [username, setUsername]

  const submitHandler = (e: FormEvent) => {
    e.preventDefault();
    const profile: Profile = {
      uid: "blah",
      avatar: "lkasjdfois",
      username: "asidjdf",
    };
    addProfile;
  };

  return (
    <form className="ProfileCreator" onSubmit={submitHandler}>
      <label htmlFor="username">
        Create a Username
        <input type="text" name="username" id="username" />
      </label>
      <label htmlFor=""></label>
    </form>
  );
};

export default ProfileCreator;
