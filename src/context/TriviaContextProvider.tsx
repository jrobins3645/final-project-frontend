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
  const [idList, setIdList] = useState<number[]>([]);

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

  const shuffleIds = (generations: string | null) => {
    setIdList([]);
    if (generations?.includes("1")) {
      for (let i = 1; i < 151; i++) {
        idList.push(i);
      }
    }
    if (generations?.includes("2")) {
      for (let i = 152; i < 251; i++) {
        idList.push(i);
      }
    }
    if (generations?.includes("3")) {
      for (let i = 252; i < 386; i++) {
        idList.push(i);
      }
    }
    if (generations?.includes("4")) {
      for (let i = 387; i < 493; i++) {
        idList.push(i);
      }
    }
    if (generations?.includes("5")) {
      for (let i = 494; i < 649; i++) {
        idList.push(i);
      }
    }
    if (generations?.includes("6")) {
      for (let i = 650; i < 721; i++) {
        idList.push(i);
      }
    }
    if (generations?.includes("7")) {
      for (let i = 722; i < 809; i++) {
        idList.push(i);
      }
    }
    if (generations?.includes("8")) {
      for (let i = 810; i < 898; i++) {
        idList.push(i);
      }
    }
    return shuffle(idList);
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
        shuffleIds,
      }}
    >
      {children}
    </TriviaContext.Provider>
  );
}

export default TriviaContextProvider;
