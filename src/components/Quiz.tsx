import { useContext, useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import TriviaContext from "../context/TriviaContext";
import Pokemon from "../models/Pokemon";
import { getPokemonById } from "../services/PokemonService";
import Popup from "./Popup";
import QuizForm from "./QuizForm";
import QuizScore from "./QuizScore";
import "./Quiz.css";
import QuizCorrect from "./QuizCorrect";

const Quiz = () => {
  const resetQuiz = useRef(false);
  const gotPokemon = useRef(false);
  const [quizSeconds, setQuizSeconds] = useState(60);
  const [correct, setCorrect] = useState(false);
  const [shuffledIds, setShuffledIds] = useState<number[]>([]);
  const [currentPokemon, setCurrentPokemon] = useState<Pokemon>();
  const [idCounter, setIdCounter] = useState(0);
  const [answer, setAnswer] = useState("");
  const [questionsAnswered, setQuestionsAnswered] = useState(0);
  const [questionsCorrect, setQuestionsCorrect] = useState(0);
  const [score, setScore] = useState(0);
  const [hintButton, setHintButton] = useState(true);
  const [hintPoints, setHintPoints] = useState(0);
  const [hintString, setHintString] = useState("");
  const { guestPopup, profile, shuffleIds } = useContext(TriviaContext);
  const stringSimilarity = require("string-similarity");
  const generations: string | null = new URLSearchParams(
    useLocation().search
  ).get("gen");
  const hintHandler = () => {
    setHintPoints((prev) => prev + 25);
    setHintButton(false);
    const nameArray: string[] = currentPokemon!.name.split("");
    setHintString(
      `First two letters: ${[nameArray[0], nameArray[1]]
        .join("")
        .toUpperCase()}`
    );
  };

  // QUIZ COUNTDOWN
  useEffect(() => {
    let interval: any = null;
    let countdown: number = 60;
    interval = setInterval(() => {
      countdown--;
      setQuizSeconds(countdown);
      if (!countdown) {
        clearInterval(interval);
      }
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (!resetQuiz.current) {
      setShuffledIds([]);
      setShuffledIds(shuffleIds(generations));
      setScore(0);
      setQuestionsAnswered(0);
      setQuestionsCorrect(0);
      resetQuiz.current = true;
    }
    if (shuffledIds.length) {
      getPokemonById(shuffledIds[idCounter]).then((response) =>
        setCurrentPokemon(response)
      );
    }

    if (currentPokemon) {
      const similarity = stringSimilarity.compareTwoStrings(
        currentPokemon!.name,
        answer
      );
      console.log(similarity);
      if (similarity >= 0.7) {
        setAnswer(currentPokemon.name);
      }
    }
    if (answer === currentPokemon?.name) {
      setAnswer("");
      setCorrect(true);
      gotPokemon.current = false;
    }
    if (questionsAnswered) {
      setScore(
        parseInt(
          (
            questionsCorrect * 100 * (questionsCorrect / questionsAnswered) -
            hintPoints
          ).toString()
        )
      );
    }
    console.log("use effect ran");
    console.log(idCounter, shuffledIds);
  }, [
    shuffledIds,
    answer,
    questionsAnswered,
    generations,
    hintPoints,
    idCounter,
    questionsCorrect,
    stringSimilarity,
    quizSeconds,
    shuffleIds,
  ]);

  useEffect(() => {
    setHintButton(true);
  }, [questionsAnswered]);

  return (
    <div className="Quiz">
      {quizSeconds ? (
        <>
          <div className="scoring">
            <p>Question: {questionsAnswered + 1}</p>
            <p>Correct: {questionsCorrect} </p>
            <p> Current Score: {score}</p>
          </div>
          <p>Time Remaining: {quizSeconds}</p>
          {!correct ? (
            <>
              <QuizForm
                answer={answer}
                currentPokemon={currentPokemon}
                setAnswer={setAnswer}
                setQuestionsAnswered={setQuestionsAnswered}
                setIdCounter={setIdCounter}
              />
              {hintButton ? (
                <button onClick={hintHandler}>Hint</button>
              ) : (
                <p>{hintString}</p>
              )}
            </>
          ) : (
            <QuizCorrect
              setCorrect={setCorrect}
              setQuestionsAnswered={setQuestionsAnswered}
              setQuestionsCorrect={setQuestionsCorrect}
              setIdCounter={setIdCounter}
            />
          )}
          <Link to="/">
            <button className="quit-button">Quit Quiz</button>
          </Link>
        </>
      ) : (
        <QuizScore
          questionsAnswered={questionsAnswered}
          questionsCorrect={questionsCorrect}
          score={score}
        />
      )}

      {!guestPopup && !quizSeconds && !profile && <Popup />}
    </div>
  );
};

export default Quiz;
