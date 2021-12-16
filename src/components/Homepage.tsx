import "./Homepage.css";
import { useContext } from "react";
import Popup from "./Popup";
import TriviaContext from "../context/TriviaContext";
import cardImage from "../images/cardImage.png";
import GenerationPicker from "./Generationpicker";

const Homepage = () => {
  const { profile, user } = useContext(TriviaContext);

  return (
    <div className="Homepage">
      <div className="flip-card">
        <div className="flip-card-inner">
          <div className="flip-card-front">
            <img className="card" src={cardImage} alt="card-pic" />
          </div>
          <div className="flip-card-back">
            <h1>Pick your generation Pokemon Quiz</h1>
            <div className="rules-text">
              <p>Type the name of the pokemon that is shown.</p>
              <p>
                You will have 60 seconds to answer as many questions as you can.
              </p>
            </div>
            <GenerationPicker />
          </div>
        </div>
      </div>
      {user && !profile ? <Popup /> : null}
    </div>
  );
};

export default Homepage;
