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
      <p className="quiz-results">
        Questions Answered: {questionsAnswered}
        <br />
        Questions Correct: {questionsCorrect}
        <br />
        Final Score: {score}
      </p>
      <Link to="/">
        <button onClick={clickHandler} autoFocus={true}>
          Submit Score
        </button>
      </Link>
    </div>
  );
};

export default QuizScore;
