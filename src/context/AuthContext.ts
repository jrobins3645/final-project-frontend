import { User } from "firebase/auth";
import { createContext } from "react";
import Profile from "../models/Profile";
export interface AuthContextModel {
  user: User | null;
  profile: Profile | null;
  setProfile: (profile: Profile) => void;
  guestPopup: boolean;
  setGuestPopup: (boolean: boolean) => void;
}
const defaultValue: AuthContextModel = {
  user: null,
  profile: null,
  guestPopup: false,
  setGuestPopup: () => {},
  setProfile: () => {},
};
const AuthContext = createContext(defaultValue);
export default AuthContext;
