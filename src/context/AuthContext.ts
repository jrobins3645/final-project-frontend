import { User } from "firebase/auth";
import { createContext } from "react";
import Profile from "../models/Profile";
export interface AuthContextModel {
  user: User | null;
  profile: Profile | null;
  guestPopup: boolean;
  score: number;
  setScore: (score: number) => void;
  setProfile: (profile: Profile) => void;
  setGuestPopup: (boolean: boolean) => void;
}
const defaultValue: AuthContextModel = {
  user: null,
  profile: null,
  guestPopup: false,
  score: 0,
  setScore: () => {},
  setGuestPopup: () => {},
  setProfile: () => {},
};
const AuthContext = createContext(defaultValue);
export default AuthContext;
