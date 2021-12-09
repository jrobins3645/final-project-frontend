import "./Homepage.css";
import { useContext } from "react";
import AuthContext from "../context/AuthContext";
import Popup from "./Popup";
import { Link } from "react-router-dom";
import PokemonContext from "../context/PokemonContext";

const Homepage = () => {
  const { profile, user, setScore } = useContext(AuthContext);
  const { shuffledPokemon, setQuestionsAnswered, setQuestionsCorrect } =
    useContext(PokemonContext);

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
