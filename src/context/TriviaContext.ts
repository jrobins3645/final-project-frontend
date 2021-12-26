import { User } from "firebase/auth";
import { createContext } from "react";
import Profile from "../models/Profile";

export interface TriviaContextModel {
  user: User | null;
  profile: Profile | null;
  guestPopup: boolean;
  score: number;
  questionsAnswered: number;
  questionsCorrect: number;
  genCounter: number;
  setScore: (score: number) => void;
  setProfile: (profile: Profile) => void;
  setGuestPopup: (boolean: boolean) => void;
  setQuestionsAnswered: React.Dispatch<React.SetStateAction<number>>;
  setQuestionsCorrect: React.Dispatch<React.SetStateAction<number>>;
  shuffle: (idList: number[]) => number[];
  shuffleIds: (generations: string | null) => number[];
}
const defaultValue: TriviaContextModel = {
  user: null,
  profile: null,
  guestPopup: false,
  score: 0,
  questionsAnswered: 0,
  questionsCorrect: 0,
  genCounter: 0,
  setScore: () => {},
  setGuestPopup: () => {},
  setProfile: () => {},
  setQuestionsAnswered: () => {},
  setQuestionsCorrect: () => {},
  shuffle: () => [],
  shuffleIds: () => [],
};
const TriviaContext = createContext(defaultValue);
export default TriviaContext;
