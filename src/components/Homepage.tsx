import "./Homepage.css";
import { useContext, useState } from "react";
import Popup from "./Popup";
import { useHistory } from "react-router-dom";
import TriviaContext from "../context/TriviaContext";
import cardImage from "../images/cardImage.png";

const Homepage = () => {
  const [gen1, setGen1] = useState(false);
  const [gen2, setGen2] = useState(false);
  const [gen3, setGen3] = useState(false);
  const [gen4, setGen4] = useState(false);
  const [gen5, setGen5] = useState(false);
  const [gen6, setGen6] = useState(false);
  const [gen7, setGen7] = useState(false);
  const [gen8, setGen8] = useState(false);
  const { profile, user } = useContext(TriviaContext);
  const history = useHistory();

  const submitHandler = () => {
    history.push(
      `/quiz?${gen1 ? "gen=1" : ""}${gen2 ? "gen=2" : ""}${
        gen3 ? "gen=3" : ""
      }${gen4 ? "gen=4" : ""}${gen5 ? "gen=5" : ""}${gen6 ? "gen=6" : ""}${
        gen7 ? "gen=7" : ""
      }${gen8 ? "gen=8" : ""}`
    );
  };

  return (
    <div className="Homepage">
      <div className="flip-card">
        <div className="flip-card-inner">
          <div className="flip-card-front">
            <img className="card" src={cardImage} alt="card-pic" />
          </div>
          <div className="flip-card-back">
            <h3>Pick your generation Pokemon Quiz</h3>
            <p>Type the name of the pokemon that is shown.</p>
            <p>
              You will have __ seconds to answer as many questions as you can.
            </p>
            <form onSubmit={submitHandler}>
              <ul>
                <li>
                  <input
                    type="checkbox"
                    name="gen1"
                    id="gen1"
                    checked={gen1}
                    onChange={(e) => setGen1(e.target.checked)}
                  />
                  <label htmlFor="gen1">Generation 1</label>
                </li>
                <li>
                  <input
                    type="checkbox"
                    name="gen2"
                    id="gen2"
                    checked={gen2}
                    onChange={(e) => setGen2(e.target.checked)}
                  />
                  <label htmlFor="gen2">Generation 2</label>
                </li>
                <li>
                  <input
                    type="checkbox"
                    name="gen3"
                    id="gen3"
                    checked={gen3}
                    onChange={(e) => setGen3(e.target.checked)}
                  />
                  <label htmlFor="gen3">Generation 3</label>
                </li>
                <li>
                  <input
                    type="checkbox"
                    name="gen4"
                    id="gen4"
                    checked={gen4}
                    onChange={(e) => setGen4(e.target.checked)}
                  />
                  <label htmlFor="gen4">Generation 4</label>
                </li>
                <li>
                  <input
                    type="checkbox"
                    name="gen5"
                    id="gen5"
                    checked={gen5}
                    onChange={(e) => setGen5(e.target.checked)}
                  />
                  <label htmlFor="gen5">Generation 5</label>
                </li>
                <li>
                  <input
                    type="checkbox"
                    name="gen6"
                    id="gen6"
                    checked={gen6}
                    onChange={(e) => setGen6(e.target.checked)}
                  />
                  <label htmlFor="gen6">Generation 6</label>
                </li>
                <li>
                  <input
                    type="checkbox"
                    name="gen7"
                    id="gen7"
                    checked={gen7}
                    onChange={(e) => setGen7(e.target.checked)}
                  />
                  <label htmlFor="gen7">Generation 7</label>
                </li>
                <li>
                  <input
                    type="checkbox"
                    name="gen8"
                    id="gen8"
                    checked={gen8}
                    onChange={(e) => setGen8(e.target.checked)}
                  />
                  <label htmlFor="gen8">Generation 8</label>
                </li>
              </ul>
              <button onClick={submitHandler}>Start Quiz!</button>
            </form>
          </div>
        </div>
      </div>
      {user && !profile ? <Popup /> : null}
    </div>
  );
};

export default Homepage;
