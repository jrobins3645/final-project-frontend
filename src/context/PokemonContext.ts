import { createContext } from "react";

interface PokemonContextModel {
  idList: number[];
}

const defaultValues: PokemonContextModel = {
  idList: [],
};

const PokemonContext = createContext(defaultValues);
export default PokemonContext;
