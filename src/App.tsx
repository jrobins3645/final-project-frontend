import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "./App.css";
import Homepage from "./components/Homepage";
import Header from "./components/Header";
import Profile from "./components/Profile";
import Leaderboard from "./components/Leaderboard";
import About from "./components/About";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact>
            <Homepage />
          </Route>
          <Route path="/profiles/:uid">
            <Profile />
          </Route>
          <Route path="/leaderboard">
            <Leaderboard />
          </Route>
          <Route path="/about">
            <About />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
