import Pokemon from "../models/Pokemon";
import "./Question.css";

interface Props {
  currentPokemon: Pokemon;
}

const Question = ({ currentPokemon }: Props) => {
  return (
    <div className="Question">
      <p>Who's that pokemon?!?</p>
      <img
        src={currentPokemon?.sprites.other["official-artwork"].front_default}
        alt="Pokemon"
      />
      <p>(It's {currentPokemon?.name}!)</p>
    </div>
  );
};

export default Question;
