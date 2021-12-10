import "./Homepage.css";
import { useContext } from "react";
import Popup from "./Popup";
import { Link } from "react-router-dom";
import TriviaContext from "../context/TriviaContext";

const Homepage = () => {
  const {
    profile,
    user,
    setScore,
    shuffledPokemon,
    setQuestionsAnswered,
    setQuestionsCorrect,
  } = useContext(TriviaContext);

  const newQuiz = () => {
    shuffledPokemon();
    setScore(0);
    setQuestionsAnswered(0);
    setQuestionsCorrect(0);
  };

  return (
    <div className="Homepage">
      <div className="quiz-container">
        <h3>Original 151 Pokemon Quiz</h3>
        <p>Type the name of the pokemon that is shown.</p>
        <p>You will have x time to answer as many questions as you can.</p>
        <Link to="/quiz">
          <button onClick={() => newQuiz()}>Start Quiz!</button>
        </Link>
      </div>
      {user && !profile ? <Popup /> : null}
    </div>
  );
};

export default Homepage;
