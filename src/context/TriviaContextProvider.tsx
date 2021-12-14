import { ReactNode, useEffect, useState } from "react";
import { User } from "firebase/auth";
import { auth } from "../firebaseConfig";
import TriviaContext from "./TriviaContext";
import Profile from "../models/Profile";
import { getProfile } from "../services/ProfileService";

function TriviaContextProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [profile, setProfile] = useState<Profile | null>(null);
  const [guestPopup, setGuestPopup] = useState<boolean>(false);
  const [score, setScore] = useState<number>(0);
  const [questionsAnswered, setQuestionsAnswered] = useState<number>(0);
  const [questionsCorrect, setQuestionsCorrect] = useState<number>(0);

  const shuffle = (array: number[]) => {
    let currentIndex = array.length,
      randomIndex;
    // While there remain elements to shuffle...
    while (currentIndex !== 0) {
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex],
        array[currentIndex],
      ];
    }
    return array;
  };

  useEffect(() => {
    return auth.onAuthStateChanged((newUser) => {
      setUser(newUser);
      if (newUser) {
        getProfile(newUser.uid).then((array) => {
          if (array.length) {
            setProfile(array[0]);
          }
        });
      } else {
        setProfile(null);
      }
    });
  }, []);

  return (
    <TriviaContext.Provider
      value={{
        user,
        profile,
        guestPopup,
        score,
        questionsAnswered,
        questionsCorrect,
        setProfile,
        setGuestPopup,
        setScore,
        setQuestionsAnswered,
        setQuestionsCorrect,
        shuffle,
      }}
    >
      {children}
    </TriviaContext.Provider>
  );
}

export default TriviaContextProvider;
