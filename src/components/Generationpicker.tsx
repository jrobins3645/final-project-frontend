import { useState, FormEvent } from "react";
import { useHistory } from "react-router-dom";
import pokeball from "../images/faviconball.png";
import "./GenerationPicker.css";

const GenerationPicker = () => {
  const [gen1, setGen1] = useState(false);
  const [gen2, setGen2] = useState(false);
  const [gen3, setGen3] = useState(false);
  const [gen4, setGen4] = useState(false);
  const [gen5, setGen5] = useState(false);
  const [gen6, setGen6] = useState(false);
  const [gen7, setGen7] = useState(false);
  const [gen8, setGen8] = useState(false);
  const history = useHistory();
  const submitHandler = (e: FormEvent) => {
    e.preventDefault();
    if (gen1 || gen2 || gen3 || gen4 || gen5 || gen6 || gen7 || gen8) {
      history.push(
        `/quiz?${gen1 ? "gen=1" : ""}${gen2 ? "gen=2" : ""}${
          gen3 ? "gen=3" : ""
        }${gen4 ? "gen=4" : ""}${gen5 ? "gen=5" : ""}${gen6 ? "gen=6" : ""}${
          gen7 ? "gen=7" : ""
        }${gen8 ? "gen=8" : ""}`
      );
    } else {
      alert("You must pick at least one generation!");
    }
  };

  return (
    <form className="GenerationPicker" onSubmit={submitHandler}>
      <ul className="generation-list">
        <li>
          <label className="gen-box-container" htmlFor="gen1">
            <input
              type="checkbox"
              name="gen1"
              id="gen1"
              className="gen-box"
              checked={gen1}
              onChange={(e) => setGen1(e.target.checked)}
            />
            <div className="new-checkbox">{gen1 && <img src={pokeball} />}</div>
            Generation 1
          </label>
        </li>
        <li>
          <label className="gen-box-container" htmlFor="gen2">
            <input
              type="checkbox"
              name="gen2"
              id="gen2"
              className="gen-box"
              checked={gen2}
              onChange={(e) => setGen2(e.target.checked)}
            />
            <div className="new-checkbox">{gen2 && <img src={pokeball} />}</div>
            Generation 2
          </label>
        </li>
        <li>
          <label className="gen-box-container" htmlFor="gen3">
            <input
              type="checkbox"
              name="gen3"
              id="gen3"
              className="gen-box"
              checked={gen3}
              onChange={(e) => setGen3(e.target.checked)}
            />
            <div className="new-checkbox">{gen3 && <img src={pokeball} />}</div>
            Generation 3
          </label>
        </li>
        <li>
          <label className="gen-box-container" htmlFor="gen4">
            <input
              type="checkbox"
              name="gen4"
              id="gen4"
              className="gen-box"
              checked={gen4}
              onChange={(e) => setGen4(e.target.checked)}
            />
            <div className="new-checkbox">{gen4 && <img src={pokeball} />}</div>
            Generation 4
          </label>
        </li>
        <li>
          <label className="gen-box-container" htmlFor="gen5">
            <input
              type="checkbox"
              name="gen5"
              id="gen5"
              className="gen-box"
              checked={gen5}
              onChange={(e) => setGen5(e.target.checked)}
            />
            <div className="new-checkbox">{gen5 && <img src={pokeball} />}</div>
            Generation 5
          </label>
        </li>
        <li>
          <label className="gen-box-container" htmlFor="gen6">
            <input
              type="checkbox"
              name="gen6"
              id="gen6"
              className="gen-box"
              checked={gen6}
              onChange={(e) => setGen6(e.target.checked)}
            />
            <div className="new-checkbox">{gen6 && <img src={pokeball} />}</div>
            Generation 6
          </label>
        </li>
        <li>
          <label className="gen-box-container" htmlFor="gen7">
            <input
              type="checkbox"
              name="gen7"
              id="gen7"
              className="gen-box"
              checked={gen7}
              onChange={(e) => setGen7(e.target.checked)}
            />
            <div className="new-checkbox">{gen7 && <img src={pokeball} />}</div>
            Generation 7
          </label>
        </li>
        <li>
          <label className="gen-box-container" htmlFor="gen8">
            <input
              type="checkbox"
              name="gen8"
              id="gen8"
              className="gen-box"
              checked={gen8}
              onChange={(e) => setGen8(e.target.checked)}
            />
            <div className="new-checkbox">{gen8 && <img src={pokeball} />}</div>
            Generation 8
          </label>
        </li>
      </ul>
      <button className="start-button">Start Quiz!</button>
    </form>
  );
};

export default GenerationPicker;
