import { useEffect, useState } from "react";
import Score from "../models/Score";
import { getAllScores } from "../services/ScoreService";
import "./Leaderboard.css";

const Leaderboard = () => {
  const [scores, setScores] = useState<Score[]>([]);

  useEffect(() => {
    getAllScores().then((response) => {
      console.log(response);
      setScores(response);
    });
  }, []);

  return (
    <div className="Leaderboard">
      <p>huzzah</p>
      <ol>
        {scores.map((score) => {
          return (
            <li>
              {score.username} has {score.score} points
            </li>
          );
        })}
      </ol>
    </div>
  );
};

export default Leaderboard;
