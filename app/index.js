import React from "react";
import {render} from "react-dom";
import {Router, Route, IndexRoute, browserHistory} from "react-router";
import App from "./components/App";
import ViewWorksheets from "./components/ViewWorksheets";
import WorksheetCreator from "./components/WorksheetCreator";
import Worksheet from "./components/Worksheet";
import TaskCreator from "./components/TaskCreator";
import Home from "./components/Home";


render(
    <Router onUpdate={() => window.scrollTo(0, 0)} history={browserHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={Home}/>
        <Route path="/worksheets" component={ViewWorksheets}/>
        <Route path="/worksheet/new" component={WorksheetCreator}/>
        <Route path="/worksheet/:id" component={Worksheet}/>
        <Route path="/worksheet/:worksheetId/section/:sectionID/task/new" component={TaskCreator}/>
      </Route>
    </Router>,
    document.getElementById('app')
);