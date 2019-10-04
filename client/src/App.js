import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Saved from "./pages/saved";
import Search from "./pages/search";
import Nav from "./components/navbar";
import NoMatch from "./pages/404"

function App() {
  return (
    <Router>
      <div>
      <Nav />
        <Switch>
          <Route exact path="/" component={Search} />
          <Route exact path="/Search" component={Search} />
          <Route exact path="/Saved" component={Saved} />
        {/*  <Route exact path="/book/:id" component={Detail}/> */}
          <Route component={NoMatch} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
