import { useContext } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../context/AuthContext";
import PokemonContext from "../context/PokemonContext";
import "./ScoreScreen.css";

const ScoreScreen = () => {
  const { score, setScore } = useContext(AuthContext);
  const {
    questionsAnswered,
    questionsCorrect,
    shuffledPokemon,
    setQuestionsAnswered,
    setQuestionsCorrect,
  } = useContext(PokemonContext);

  const newQuiz = () => {
    shuffledPokemon();
    setScore(0);
    setQuestionsAnswered(0);
    setQuestionsCorrect(0);
  };

  {
  }
  return (
    <div className="ScoreScreen">
      <div>
        <p>answered</p>
        {questionsAnswered}
        <p>correct</p>
        {questionsCorrect}
        <p>score</p>
        {score}
        <p></p>
        <Link to="/quiz">
          <button onClick={() => newQuiz()}>Restart</button>
        </Link>
        <Link to="/">
          <button>Go Home</button>
        </Link>
      </div>
    </div>
  );
};

export default ScoreScreen;
