import { Dispatch, FormEvent, SetStateAction } from "react";
import Pokemon from "../models/Pokemon";
import Question from "./Question";
import "./QuizForm.css";

interface Props {
  setQuestionsAnswered: Dispatch<SetStateAction<number>>;
  setAnswer: Dispatch<SetStateAction<string>>;
  setIdCounter: Dispatch<SetStateAction<number>>;
  answer: string;
  currentPokemon: Pokemon | undefined;
}

const QuizForm = ({
  setQuestionsAnswered,
  setAnswer,
  setIdCounter,
  answer,
  currentPokemon,
}: Props) => {
  // THE SUBMITHANDLER ONLY TRIGGERS WHEN YOU PRESS 'I DON'T KNOW'
  const submitHandler = (e: FormEvent) => {
    e.preventDefault();
    setQuestionsAnswered((prev) => prev + 1);
    setAnswer("");
  };
  return (
    <form onSubmit={submitHandler}>
      <Question currentPokemon={currentPokemon!} />
      <label htmlFor="answer">Answer Here:</label>
      <div className="conjoined">
        <div className="answer-button">
          <input
            className="idk"
            autoComplete="off"
            type="text"
            name="answer"
            id="answer"
            value={answer}
            onChange={(value) => setAnswer(value.target.value)}
            autoFocus
          />
          <button
            className="I-dont-know-button"
            onClick={() => setIdCounter((prev) => prev + 1)}
          >
            I don't know
          </button>
        </div>
      </div>
    </form>
  );
};

export default QuizForm;
