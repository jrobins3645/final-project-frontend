import { useEffect, useState } from "react";
import "./QuizCorrect.css";

interface Props {
  setCorrect: React.Dispatch<React.SetStateAction<boolean>>;
  setQuestionsAnswered: React.Dispatch<React.SetStateAction<number>>;
  setQuestionsCorrect: React.Dispatch<React.SetStateAction<number>>;
  setIdCounter: React.Dispatch<React.SetStateAction<number>>;
}

const QuizCorrect = ({
  setCorrect,
  setQuestionsAnswered,
  setQuestionsCorrect,
  setIdCounter,
}: Props) => {
  const [correctSeconds, setCorrectSeconds] = useState(1);

  useEffect(() => {
    setQuestionsAnswered((prev) => prev + 1);
    setQuestionsCorrect((prev) => prev + 1);
    setIdCounter((prev) => prev + 1);
    let interval: any = null;
    let countdown: number = 1;
    interval = setInterval(() => {
      countdown--;
      setCorrectSeconds(countdown);
      if (!countdown) {
        clearInterval(interval);
      }
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (!correctSeconds) {
      setCorrect(false);
    }
  }, [correctSeconds]);

  return (
    <div className="QuizCorrect">
      <p>YOU ARE CORRECT</p>
      <p>{correctSeconds}</p>
    </div>
  );
};

export default QuizCorrect;
