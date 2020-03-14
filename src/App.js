import React from "react";
import { HashRouter, Switch, Route } from "react-router-dom";
import Intro from "./component/Intro";
import EnterTime from './component/EnterTime'
import EnterNameA from "./component/EnterNameA";
import EnterNameB from "./component/EnterNameB";
import Scoreboard from './component/Scoreboard'
import PageNotFound from "./component/PageNotFound";

function App() {
  return (
    <HashRouter basename={process.env.PUBLIC_URL}>
      <div className="App">
        <Switch>
        <Route exact path="/" component={Intro} />
        <Route path="/enter-time" component={EnterTime} />
        <Route path="/enter-name-A" component={EnterNameA} />
        <Route path="/enter-name-B" component={EnterNameB} />
        <Route path="/scoreboard" component={Scoreboard} />
        <Route component={PageNotFound} />
        </Switch>
      </div>
    </HashRouter>
  );
}

export default App;
