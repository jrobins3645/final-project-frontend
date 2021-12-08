import "./Homepage.css";
import { useContext, useState } from "react";
import AuthContext from "../context/AuthContext";
import Popup from "./Popup";
import Quiz from "./Quiz";
import { Link } from "react-router-dom";

const Homepage = () => {
  // const [start, setStart] = useState(false);
  const { profile } = useContext(AuthContext);

  return (
    <div className="Homepage">
      <div className="quiz-container">
        <h3>Classic name that pokemon Quiz</h3>
        <p>Type the name of the pokemon that is shown.</p>
        <p>You will have x time to answer as many questions as you can.</p>
        <Link to="/quiz">
          <button>Start Quiz!</button>
        </Link>
      </div>
    </div>
  );
};

export default Homepage;
