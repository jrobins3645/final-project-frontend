import { ReactNode, useEffect, useState } from "react";
import PokemonContext from "./PokemonContext";

interface Props {
  children: ReactNode;
}

const PokemonContextProvider = ({ children }: Props) => {
  const [idList, setIdList] = useState<number[]>([]);

  const idListGenerator = (): void => {
    const numberArray = [];
    for (let i = 1; i <= 898; i++) {
      numberArray.push(i);
    }
    setIdList(numberArray);
  };

  useEffect(() => {
    idListGenerator();
    let shuffle = (idList: number[]) => {
      let m = idList.length,
        t,
        i;
      // While there remain elements to shuffle…
      while (m) {
        // Pick a remaining element…
        i = Math.floor(Math.random() * m--);
        // And swap it with the current element.
        t = idList[m];
        idList[m] = idList[i];
        idList[i] = t;
      }
      console.log("shuffled list", idList);
      return idList;
    };
    shuffle(idList);
  }, []);

  return (
    <PokemonContext.Provider value={{ idList }}>
      {children}
    </PokemonContext.Provider>
  );
};

export default PokemonContextProvider;
