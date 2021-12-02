import { User } from "firebase/auth";
import { createContext } from "react";
import Profile from "../models/Profile";
export interface AuthContextModel {
  user: User | null;
  profile: Profile | null;
  registeredUser: boolean;
  setProfile: (profile: Profile) => void;
  setRegisteredUser: (boolean: boolean) => void;
}
const defaultValue: AuthContextModel = {
  user: null,
  profile: null,
  registeredUser: false,
  setProfile: () => {},
  setRegisteredUser: () => {},
};
const AuthContext = createContext(defaultValue);
export default AuthContext;
