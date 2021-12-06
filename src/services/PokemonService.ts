import axios from "axios";
import Pokemon from "../models/Pokemon";

const baseURL: string = process.env.REACT_APP_API_URL || "";

export const getPokemonById = (id: number): Promise<Pokemon> => {
  console.log(id);
  return axios
    .get(`https://pokeapi.co/api/v2/pokemon/${encodeURIComponent(id)}`)
    .then((response) => {
      return response.data;
    });
};
