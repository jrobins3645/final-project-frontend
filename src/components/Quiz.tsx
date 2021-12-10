import "./Quiz.css";
import Pokemon from "../models/Pokemon";
import Question from "./Question";
import { FormEvent, useContext, useEffect, useState } from "react";
import { getPokemonById } from "../services/PokemonService";
import { addScore } from "../services/ScoreService";
import Score from "../models/Score";
import { Link } from "react-router-dom";
import Popup from "./Popup";
import TriviaContext from "../context/TriviaContext";

const Quiz = () => {
  const {
    idList,
    questionsCorrect,
    setQuestionsCorrect,
    questionsAnswered,
    setQuestionsAnswered,
    profile,
    guestPopup,
    score,
    setScore,
  } = useContext(TriviaContext);
  const [counter, setCounter] = useState(0);
  const [currentPokemon, setCurrentPokemon] = useState<Pokemon | undefined>();
  const [answer, setAnswer] = useState("");
  const [seconds, setSeconds] = useState(0);

  const submitHandler = (e: FormEvent) => {
    e.preventDefault();
    setQuestionsAnswered((prev) => prev + 1);
    setAnswer("");
  };

  const clickHandler = () => {
    const newScore: Score = {
      uid: profile!.uid,
      avatar: profile!.avatar,
      username: profile!.username,
      score: score,
    };
    addScore(newScore);
  };

  // const newQuiz = () => {
  //   shuffledPokemon();
  //   setScore(0);
  //   setQuestionsAnswered(0);
  //   setQuestionsCorrect(0);
  // };

  useEffect(() => {
    let interval: any = null;
    let counter: number = 30;
    interval = setInterval(() => {
      counter--;
      setSeconds(counter);
      // console.log(counter);
      if (counter === 0) {
        clearInterval(interval);
      }
    }, 1000);
    return () => clearInterval(interval);
  }, []);

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
  }, [counter, idList, questionsAnswered, questionsCorrect, seconds, setScore]);

  useEffect(() => {
    if (answer === currentPokemon?.name) {
      setQuestionsAnswered((prev) => prev + 1);
      setQuestionsCorrect((prev) => prev + 1);
      setAnswer("");
      setCounter((prev) => prev + 1);
    }
  }, [answer, currentPokemon, setQuestionsAnswered, setQuestionsCorrect]);

  return (
    <div className="Quiz">
      {seconds ? (
        <>
          <div className="scoring">
            <p>
              Question: {questionsAnswered + 1} Correct: {questionsCorrect}{" "}
              Current Score: {score}
            </p>
          </div>
          <div>{seconds}</div>
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
      ) : (
        <div className="scoring">
          <p>
            Questions Answered: {questionsAnswered} Questions Correct:{" "}
            {questionsCorrect} Current Score: {score}
          </p>
          <Link to="/">
            <button onClick={clickHandler} autoFocus={true}>
              Submit Score
            </button>
          </Link>
        </div>
      )}

      {!guestPopup && !seconds && !profile ? <Popup /> : <></>}
    </div>
  );
};

export default Quiz;
