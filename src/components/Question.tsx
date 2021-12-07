import Pokemon from "../models/Pokemon";
import "./Question.css";

interface Props {
  currentPokemon: Pokemon;
}

const Question = ({ currentPokemon }: Props) => {
  return (
    <div className="Question">
      <p>Name this Pokemon.</p>
      <p>({currentPokemon?.name})</p>
      <img
        src={currentPokemon?.sprites.other["official-artwork"].front_default}
        alt="Pokemon"
      />
    </div>
  );
};

export default Question;
