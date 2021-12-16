import { useContext } from "react";
import { Link } from "react-router-dom";
import TriviaContext from "../context/TriviaContext";
import Score from "../models/Score";
import { addScore } from "../services/ScoreService";
import "./QuizScore.css";

interface Props {
  questionsAnswered: number;
  questionsCorrect: number;
  score: number;
}

const QuizScore = ({ questionsAnswered, questionsCorrect, score }: Props) => {
  const { profile } = useContext(TriviaContext);
  const clickHandler = () => {
    const newScore: Score = {
      uid: profile!.uid,
      avatar: profile!.avatar,
      username: profile!.username,
      score: score,
    };
    addScore(newScore);
  };

  return (
    <div className="QuizScore">
      <div className="quiz-results">
        <p>Questions Answered: {questionsAnswered}</p>
        <p> Questions Correct: {questionsCorrect}</p>
        <p> Final Score: {score}</p>
      </div>
      <Link to="/">
        <button
          className="submit-button"
          onClick={clickHandler}
          autoFocus={true}
        >
          Submit Score
        </button>
      </Link>
    </div>
  );
};

export default QuizScore;
