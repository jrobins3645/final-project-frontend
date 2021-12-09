import React, { createContext } from "react";

interface PokemonContextModel {
  idList: number[];
  questionsAnswered: number;
  questionsCorrect: number;
  setQuestionsAnswered: React.Dispatch<React.SetStateAction<number>>;
  setQuestionsCorrect: React.Dispatch<React.SetStateAction<number>>;
  shuffledPokemon: () => void;
}

const defaultValues: PokemonContextModel = {
  idList: [],
  questionsAnswered: 0,
  questionsCorrect: 0,
  setQuestionsAnswered: () => {},
  setQuestionsCorrect: () => {},
  shuffledPokemon: () => {},
};

const PokemonContext = createContext(defaultValues);
export default PokemonContext;
