import "./Quiz.css";
import Pokemon from "../models/Pokemon";
import Question from "./Question";
import { FormEvent, useContext, useEffect, useState } from "react";
import PokemonContext from "../context/PokemonContext";
import { getPokemonById } from "../services/PokemonService";
import { addScore } from "../services/ScoreService";
import AuthContext from "../context/AuthContext";

const Quiz = () => {
  const {
    idList,
    questionsCorrect,
    setQuestionsCorrect,
    questionsAnswered,
    setQuestionsAnswered,
  } = useContext(PokemonContext);

  const { profile } = useContext(AuthContext);

  const [counter, setCounter] = useState(0);
  const [currentPokemon, setCurrentPokemon] = useState<Pokemon | undefined>();
  const [answer, setAnswer] = useState("");
  const [timer, setTimer] = useState(100);
  const [score, setScore] = useState(0);

  useEffect(() => {
    if (timer > 0) {
      setTimeout(() => {
        setTimer((prev) => prev - 1);
      }, 1000);
    } else {
      setScore(questionsCorrect * 100 * (questionsCorrect / questionsAnswered));
    }
  }, [timer]);

  const submitHandler = (e: FormEvent) => {
    e.preventDefault();
    setQuestionsAnswered((prev) => prev + 1);
    console.log(questionsAnswered, "answered");
    if (answer === currentPokemon?.name) {
      setQuestionsCorrect((prev) => prev + 1);
    }
    console.log(questionsCorrect, "correct");

    setAnswer("");
  };

  useEffect(() => {
    getPokemonById(idList[counter]).then((response) =>
      setCurrentPokemon(response)
    );
  }, [counter]);

  return (
    <div className="Quiz">
      {timer ? (
        <>
          <div>
            <p>answered</p>
            {questionsAnswered}
            <p>correct</p>
            {questionsCorrect}
          </div>
          <div>{timer}</div>
          <form onSubmit={submitHandler}>
            <Question currentPokemon={currentPokemon!} />
            <label htmlFor="answer">Answer Here:</label>
            <input
              type="text"
              name="answer"
              id="answer"
              value={answer}
              onChange={(e) => setAnswer(e.target.value)}
            />
            <button onClick={() => setCounter((prev) => prev + 1)}>
              Next Question
            </button>
          </form>
          <input
            type="button"
            value="Quit Quiz"
            onClick={() => (window.location.href = window.location.href)}
          />
        </>
      ) : (
        <div>
          <p>answered</p>
          {questionsAnswered}
          <p>correct</p>
          {questionsCorrect}
        </div>
      )}
    </div>
  );
};

export default Quiz;
