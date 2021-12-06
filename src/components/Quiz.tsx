import "./Quiz.css";
import Pokemon from "../models/Pokemon";
import Question from "./Question";
import { FormEvent, useContext, useEffect, useState } from "react";
import PokemonContext from "../context/PokemonContext";
import { getPokemonById } from "../services/PokemonService";

const Quiz = () => {
  const { idList } = useContext(PokemonContext);
  const [counter, setCounter] = useState(0);
  const [currentPokemon, setCurrentPokemon] = useState<Pokemon | undefined>();
  const [answer, setAnswer] = useState("");

  const submitHandler = (e: FormEvent) => {
    e.preventDefault();
    setAnswer("");
  };

  useEffect(() => {
    getPokemonById(idList[counter]).then((response) =>
      setCurrentPokemon(response)
    );
  }, [counter]);

  return (
    <div className="Quiz">
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
    </div>
  );
};

export default Quiz;
