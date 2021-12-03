import { signInWithGoogle } from "../firebaseConfig";
import "./LoggedOut.css";

const LoggedOut = () => {
  return (
    <div className="LoggedOut">
      <button onClick={signInWithGoogle}>Sign in with Google</button>
      <p>or</p>
      <button>Continue as Guest</button>
    </div>
  );
};

export default LoggedOut;
