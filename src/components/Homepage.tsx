import "./Homepage.css";
import { signInWithGoogle, signOut } from "../firebaseConfig";

const Homepage = () => {
  return (
    <div className="Homepage">
      <button onClick={signInWithGoogle}>Sign in with Google</button>
      <button onClick={signOut}>Sign out</button>
    </div>
  );
};

export default Homepage;
