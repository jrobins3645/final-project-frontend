import axios from "axios";
import Score from "../models/Score";

const baseURL: string = process.env.REACT_APP_API_URL || "";

export const addScore = (score: Score): Promise<Score> =>
  axios.post(`${baseURL}/scores`, score).then((response) => response.data);

export const getAllScores = (): Promise<Score[]> =>
  axios.get(`${baseURL}/scores`).then((response) => {
    console.log(response);
    return response.data;
  });
