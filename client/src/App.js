import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Saved from "./pages/saved";
import Search from "./pages/search";
import Detail from "./pages/detail";
import NoMatch from "./pages/404"

function App() {
  return (
    <Router>
      <div>
      
        <Switch>
          <Route exact path="/" component={Search} />
          <Route exact path="/Search" component={Search} />
          <Route exact path="/Saved" component={Saved} />
          <Route exact path="/Book/:id" component={Detail}/> 
          <Route component={NoMatch} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
