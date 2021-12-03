import { signInWithGoogle } from "../firebaseConfig";
import "./Popup.css";

const Popup = () => {
  return (
    <div className="Log-In">
      <button onClick={signInWithGoogle}>Sign in with Google</button>
      <p>or</p>
      <button>Continue as Guest</button>
    </div>
  );
};

export default Popup;
