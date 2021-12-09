import "./Homepage.css";
import { useContext, useState } from "react";
import AuthContext from "../context/AuthContext";
import Popup from "./Popup";
import { Link } from "react-router-dom";
import Score from "../models/Score";
import ProfileCreator from "./ProfileCreator";

const Homepage = () => {
  // const [start, setStart] = useState(false);
  const { profile, user } = useContext(AuthContext);

  return (
    <div className="Homepage">
      <div className="quiz-container">
        <h3>Original 151 Pokemon Quiz</h3>
        <p>Type the name of the pokemon that is shown.</p>
        <p>You will have x time to answer as many questions as you can.</p>
        <Link to="/quiz">
          <button>Start Quiz!</button>
        </Link>
      </div>
      {user && !profile ? <Popup /> : null}
    </div>
  );
};

export default Homepage;
