import React from "react";
import {render} from "react-dom";
import {Router, Route, IndexRoute, browserHistory} from "react-router";
import App from "./components/App";
import WorkoutCreator from "./components/WorkoutCreator";
import TestCreator from "./components/TestCreator";
import Home from "./components/Home";


render(
    <Router onUpdate={() => window.scrollTo(0, 0)} history={browserHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={Home}/>
        <Route path="/workout" component={WorkoutCreator}/>
        <Route path="/test" component={TestCreator}/>
      </Route>
    </Router>,
    document.getElementById('app')
);