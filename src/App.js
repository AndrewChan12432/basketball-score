import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import EnterName from "./component/EnterNamePage";
import Navbar from "./component/Navbar";
import Scoreboard from './component/Scoreboard'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Switch>
        <Route  exact path="/" component={EnterName} />
        <Route  path="/scoreboard" component={Scoreboard} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
