import React from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./header/Header";
import Main from "./main/Main";
import Movie from "./movie/Movie";
import NotFound from "./NotFound";

const App = () => {
  return (
    <Router>
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={Main} />
          <Route path="/movie/:movieId" component={Movie} />
          <Route component={NotFound} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
