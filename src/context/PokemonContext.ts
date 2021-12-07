import { createContext } from "react";

interface PokemonContextModel {
  idList: number[];
  questionsAnswered: number;
  questionsCorrect: number;
  setQuestionsAnswered: React.Dispatch<React.SetStateAction<number>>;
  setQuestionsCorrect: React.Dispatch<React.SetStateAction<number>>;
}

const defaultValues: PokemonContextModel = {
  idList: [],
  questionsAnswered: 0,
  questionsCorrect: 0,
  setQuestionsAnswered: () => {},
  setQuestionsCorrect: () => {},
};

const PokemonContext = createContext(defaultValues);
export default PokemonContext;
