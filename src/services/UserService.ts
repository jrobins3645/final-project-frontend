import axios from "axios";
import User from "../models/User";

const baseURL: string = process.env.REACT_APP_API_URL || "";

export const addUser = (user: User): Promise<User> =>
  axios.post(baseURL, user).then((response) => response.data);
