import "./Quiz.css";
import Pokemon from "../models/Pokemon";
import Question from "./Question";
import { FormEvent, useContext, useEffect, useState } from "react";
import { getPokemonById } from "../services/PokemonService";
import { addScore } from "../services/ScoreService";
import Score from "../models/Score";
import { Link, useLocation } from "react-router-dom";
import Popup from "./Popup";
import TriviaContext from "../context/TriviaContext";

const Quiz = () => {
  const stringSimilarity = require("string-similarity");
  const {
    questionsCorrect,
    setQuestionsCorrect,
    questionsAnswered,
    setQuestionsAnswered,
    profile,
    guestPopup,
    score,
    setScore,
    shuffle,
  } = useContext(TriviaContext);
  const [counter, setCounter] = useState(0);
  const [currentPokemon, setCurrentPokemon] = useState<Pokemon | undefined>();
  const [answer, setAnswer] = useState("");
  const [seconds, setSeconds] = useState(0);
  const [shuffledIds, setShuffledIds] = useState<number[]>([]);
  const [hintPoints, setHintPoints] = useState<number>(0);
  const [hintButton, setHintButton] = useState<boolean>(true);
  const [firstHintString, setFirstHintString] = useState("");
  let idList: number[] = [];
  const generations: string | null = new URLSearchParams(
    useLocation().search
  ).get("gen");
  const getFirstHint = () => {
    let nameArray = currentPokemon!.name.split("");
    let firstTwo = [];
    firstTwo.push(nameArray[0], nameArray[1]);
    setFirstHintString(`First two letters: ${firstTwo.join("").toUpperCase()}`);
  };
  const hintHandler = () => {
    setHintPoints((prev) => prev + 25);
    setHintButton(false);
    getFirstHint();
  };
  const newQuiz = () => {
    setScore(0);
    setQuestionsAnswered(0);
    setQuestionsCorrect(0);
  };
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
    newQuiz();
  };

  useEffect(() => {
    let interval: any = null;
    let countdown: number = 5;
    interval = setInterval(() => {
      countdown--;
      setSeconds(countdown);
      if (countdown === 0) {
        clearInterval(interval);
      }
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    // adds the IDs of the checked generations to the idList
    if (generations?.includes("1")) {
      for (let i = 1; i < 151; i++) {
        idList.push(i);
      }
    }
    if (generations?.includes("2")) {
      for (let i = 152; i < 251; i++) {
        idList.push(i);
      }
    }
    if (generations?.includes("3")) {
      for (let i = 252; i < 386; i++) {
        idList.push(i);
      }
    }
    if (generations?.includes("4")) {
      for (let i = 387; i < 493; i++) {
        idList.push(i);
      }
    }
    if (generations?.includes("5")) {
      for (let i = 494; i < 649; i++) {
        idList.push(i);
      }
    }
    if (generations?.includes("6")) {
      for (let i = 650; i < 721; i++) {
        idList.push(i);
      }
    }
    if (generations?.includes("7")) {
      for (let i = 722; i < 809; i++) {
        idList.push(i);
      }
    }
    if (generations?.includes("8")) {
      for (let i = 810; i < 898; i++) {
        idList.push(i);
      }
    }
    setShuffledIds(shuffle(idList));
  }, []);

  useEffect(() => {
    if (answer === currentPokemon?.name) {
      setQuestionsAnswered((prev) => prev + 1);
      setQuestionsCorrect((prev) => prev + 1);
      setAnswer("");
      setCounter((prev) => prev + 1);
    }
    getPokemonById(shuffledIds[counter]).then((response) =>
      setCurrentPokemon(response)
    );
    if (questionsAnswered) {
      setHintButton(true);  
      setScore(
        parseInt(
          (
            questionsCorrect * 100 * (questionsCorrect / questionsAnswered) -
            hintPoints
          ).toString()
        )
      );
    }
  }, [shuffledIds, questionsAnswered, questionsCorrect, answer, counter]);

  useEffect(() => {
    if (currentPokemon) {
      const similarity = stringSimilarity.compareTwoStrings(
        currentPokemon!.name,
        answer
      );
      console.log(similarity);
      if (similarity >= 0.7) {
        setAnswer(currentPokemon!.name);
      }
    }
  }, [currentPokemon]);

  return (
    <div className="Quiz">
      {seconds ? (
        <>
          <div className="top-left">
            <div className="scoring">
              <p>Question: {questionsAnswered + 1}</p>
              <p>Correct: {questionsCorrect} </p>
              <p> Current Score: {score}</p>
            </div>
          </div>
          <div className="top-right">
            <div></div>
            <div>Time Remaining: {seconds}</div>

            <form onSubmit={submitHandler}>
              <Question currentPokemon={currentPokemon!} />
              <p className={`${hintButton ? "hide" : "hint"}`}>
                {firstHintString}
              </p>
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
                    onClick={() => setCounter((prev) => prev + 1)}
                  >
                    I don't know
                  </button>
                </div>
              </div>
            </form>
            <p className="hint"></p>
            <button
              onClick={hintHandler}
              className={`${hintButton ? "hint-button" : "hide"}`}
            >
              Hint
            </button>
            <Link to="/">
              <button className="quit-button" onClick={newQuiz}>
                Quit Quiz
              </button>
            </Link>
          </div>
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
