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

  const submitHandler = (e: FormEvent) => {
    e.preventDefault();
  };

  useEffect(() => {
    console.log(idList[counter]);
    getPokemonById(idList[counter]).then((response) =>
      setCurrentPokemon(response)
    );
  }, [counter]);

  return (
    <div className="Quiz">
      <form onSubmit={submitHandler}>
        <Question currentPokemon={currentPokemon!} />
        <label htmlFor="answer">Answer Here:</label>
        <input type="text" name="answer" id="answer" />
        <button onClick={() => setCounter((prev) => prev + 1)}>
          Next Question
        </button>
      </form>
    </div>
  );
};

export default Quiz;
