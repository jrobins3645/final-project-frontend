import { useContext, useState } from "react";
import AuthContext from "../context/AuthContext";
import "./Profile.css";

const Profile = () => {
  const { profile } = useContext(AuthContext);
  const [deleteAccount, setDeleteAccount] = useState(false);

  return (
    <div className="Profile">
      <h2>Username: {profile?.username}</h2>
      <button onClick={() => setDeleteAccount(true)}>Delete Account</button>
      {deleteAccount ? (
        <div className="verify-delete-container">
          <p>
            Are you absolutely sure you want to delete your account? All records
            will be erased.
          </p>
          <button>YES, delete my account!</button>
          <button onClick={() => setDeleteAccount(false)}>
            NO, I made a horrible mistake!
          </button>
        </div>
      ) : null}
    </div>
  );
};

export default Profile;
