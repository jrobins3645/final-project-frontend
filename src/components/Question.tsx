import Pokemon from "../models/Pokemon";
import "./Question.css";

interface Props {
  currentPokemon: Pokemon;
}

const Question = ({ currentPokemon }: Props) => {
  return (
    <div className="Question">
      <p>Name this Pokemon.</p>
      <img
        src={currentPokemon?.sprites.front_default}
        alt="Picture of Pokemon."
      />
    </div>
  );
};

export default Question;
