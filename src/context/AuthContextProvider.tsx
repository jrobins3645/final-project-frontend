import { ReactNode, useEffect, useState } from "react";
import { User } from "firebase/auth";
import { auth } from "../firebaseConfig";
import AuthContext from "./AuthContext";
import Profile from "../models/Profile";
import { getProfile } from "../services/ProfileService";

function AuthContextProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [profile, setProfile] = useState<Profile | null>(null);
  const [guestPopup, setGuestPopup] = useState<boolean>(false);

  // const [registeredUser, setRegisteredUser] = useState(false);

  useEffect(() => {
    // useEffect to only register once at start
    return auth.onAuthStateChanged((newUser) => {
      console.log(newUser);
      setUser(newUser);
      if (newUser) {
        getProfile(newUser.uid).then((array) => {
          if (array.length) {
            // setRegisteredUser(true);
            setProfile(array[0]);
            console.log(profile);
          }
        });
      } else {
        // setRegisteredUser(false);
        setProfile(null);
      }
    });
  }, []);
  return (
    <AuthContext.Provider
      value={{ user, profile, setProfile, guestPopup, setGuestPopup }}
    >
      {children}
    </AuthContext.Provider>
  );
}
export default AuthContextProvider;
