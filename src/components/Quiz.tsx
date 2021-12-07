import "./Quiz.css";
import Pokemon from "../models/Pokemon";
import Question from "./Question";
import { FormEvent, useContext, useEffect, useState } from "react";
import PokemonContext from "../context/PokemonContext";
import { getPokemonById } from "../services/PokemonService";
import { addScore } from "../services/ScoreService";
import Score from "../models/Score";
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
  const [timer, setTimer] = useState(20);
  const [score, setScore] = useState(0);

  const submitHandler = (e: FormEvent) => {
    e.preventDefault();
    setQuestionsAnswered((prev) => prev + 1);
    console.log(questionsAnswered, "answered");
    if (answer === currentPokemon?.name) {
      setQuestionsCorrect((prev) => prev + 1);
      console.log(questionsCorrect, "correct");
    }
    setAnswer("");
  };

  useEffect(() => {
    if (timer) {
      setTimeout(() => {
        setTimer((prev) => prev - 1);
      }, 1000);
    } else {
      if (questionsAnswered) {
        let userScore: Score = {
          uid: profile!.uid,
          username: profile!.username,
          avatar: profile!.avatar,
          score: score,
        };
        addScore(userScore);
      }
    }
  }, [timer]);

  useEffect(() => {
    getPokemonById(idList[counter]).then((response) =>
      setCurrentPokemon(response)
    );
    if (questionsAnswered) {
      setScore(questionsCorrect * 100 * (questionsCorrect / questionsAnswered));
    }
  }, [counter, idList, questionsAnswered, timer]);

  return (
    <div className="Quiz">
      {timer ? (
        <>
          <div>
            <p>answered</p>
            {questionsAnswered}
            <p>correct</p>
            {questionsCorrect}
            <p>score</p>
            {score}
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
            onClick={() => window.location.reload()}
          />
        </>
      ) : (
        <div>
          <p>answered</p>
          {questionsAnswered}
          <p>correct</p>
          {questionsCorrect}
          <p>score</p>
          {score}
          <p></p>
          <input
            type="button"
            value="Restart"
            onClick={() => window.location.reload()}
          />
        </div>
      )}
    </div>
  );
};

export default Quiz;
