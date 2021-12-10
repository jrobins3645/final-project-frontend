import "./Quiz.css";
import Pokemon from "../models/Pokemon";
import Question from "./Question";
import { FormEvent, useContext, useEffect, useState } from "react";
import PokemonContext from "../context/PokemonContext";
import { getPokemonById } from "../services/PokemonService";
import { addScore } from "../services/ScoreService";
import Score from "../models/Score";
import AuthContext from "../context/AuthContext";
import { Link, Redirect } from "react-router-dom";
import Popup from "./Popup";

const Quiz = () => {
  const {
    idList,
    questionsCorrect,
    setQuestionsCorrect,
    questionsAnswered,
    setQuestionsAnswered,
    shuffledPokemon,
  } = useContext(PokemonContext);

  const { profile, guestPopup, setGuestPopup, score, setScore } =
    useContext(AuthContext);

  const [counter, setCounter] = useState(0);
  const [currentPokemon, setCurrentPokemon] = useState<Pokemon | undefined>();
  const [answer, setAnswer] = useState("");
  const [timer, setTimer] = useState(29);

  const submitHandler = (e: FormEvent) => {
    e.preventDefault();
    setQuestionsAnswered((prev) => prev + 1);
    setAnswer("");
  };

  const newQuiz = () => {
    shuffledPokemon();
    setScore(0);
    setQuestionsAnswered(0);
    setQuestionsCorrect(0);
  };

  useEffect(() => {
    if (timer) {
      setTimeout(() => {
        setTimer((prev) => prev - 1);
      }, 1000);
    } else if (profile) {
      if (questionsAnswered) {
        let userScore: Score = {
          uid: profile!.uid,
          username: profile!.username,
          avatar: profile!.avatar,
          score: score,
        };
        addScore(userScore);
      }
    } else {
      setGuestPopup(true);
    }
  }, [timer, profile]);

  useEffect(() => {
    getPokemonById(idList[counter]).then((response) =>
      setCurrentPokemon(response)
    );
    if (questionsAnswered) {
      setScore(
        parseInt(
          (
            questionsCorrect *
            100 *
            (questionsCorrect / questionsAnswered)
          ).toString()
        )
      );
    }
  }, [counter, idList, questionsAnswered, timer]);

  useEffect(() => {
    if (answer === currentPokemon?.name) {
      setQuestionsAnswered((prev) => prev + 1);
      setQuestionsCorrect((prev) => prev + 1);
      setAnswer("");
      setCounter((prev) => prev + 1);
    }
  }, [answer]);

  return (
    <div className="Quiz">
      <>
        <div className="scoring">
          <p>
            Question: {questionsAnswered + 1} Correct: {questionsCorrect}{" "}
            Current Score: {score}
          </p>
        </div>
        <div>{timer}</div>
        <form onSubmit={submitHandler}>
          <Question currentPokemon={currentPokemon!} />
          <label htmlFor="answer">Answer Here:</label>
          <input
            autoComplete="off"
            type="text"
            name="answer"
            id="answer"
            value={answer}
            onChange={(value) => setAnswer(value.target.value)}
            autoFocus
          />
          <button onClick={() => setCounter((prev) => prev + 1)}>
            I don't know
          </button>
        </form>
        <Link to="/">
          <button>Quit Quiz</button>
        </Link>
      </>

      {guestPopup && <Popup />}
    </div>
  );
};

export default Quiz;
