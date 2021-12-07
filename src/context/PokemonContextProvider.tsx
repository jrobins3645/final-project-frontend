import { ReactNode, useEffect, useState } from "react";
import PokemonContext from "./PokemonContext";

interface Props {
  children: ReactNode;
}

const PokemonContextProvider = ({ children }: Props) => {
  const [idList, setIdList] = useState<number[]>([]);
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
    const numberArray = [];
    for (let i = 1; i <= 898; i++) {
      numberArray.push(i);
    }
    const shuffledArray = shuffle(numberArray);
    console.log(shuffledArray);

    setIdList(shuffledArray);
  }, []);

  return (
    <PokemonContext.Provider
      value={{
        idList,
        questionsAnswered,
        setQuestionsAnswered,
        questionsCorrect,
        setQuestionsCorrect,
      }}
    >
      {children}
    </PokemonContext.Provider>
  );
};

export default PokemonContextProvider;
