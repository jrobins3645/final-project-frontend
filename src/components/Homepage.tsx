import "./Homepage.css";
import { useContext, useState } from "react";
import AuthContext from "../context/AuthContext";
import Popup from "./Popup";
import Quiz from "./Quiz";

const Homepage = () => {
  const [start, setStart] = useState(false);
  const { profile } = useContext(AuthContext);

  return (
    <div className="Homepage">
      {!profile ? <Popup /> : null}
      {profile && !start ? (
        <button onClick={() => setStart(true)}>Start Quiz!</button>
      ) : null}
      {start ? <Quiz /> : null}
    </div>
  );
};

export default Homepage;
