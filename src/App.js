import React from "react";
import { HashRouter, Switch, Route } from "react-router-dom";
import EnterName from "./component/EnterNamePage";
import Navbar from "./component/Navbar";
import Scoreboard from './component/Scoreboard'
import Result from "./component/Result";

function App() {
  return (
    <HashRouter basename={process.env.PUBLIC_URL}>
      <div className="App">
        <Navbar />
        <Switch>
        <Route exact path="/" component={EnterName} />
        <Route path="/scoreboard" component={Scoreboard} />
        <Route component={Result} />
        </Switch>
      </div>
    </HashRouter>
  );
}

export default App;
