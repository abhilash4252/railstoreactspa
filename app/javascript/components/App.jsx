import React from "react";
import Partners from "./Partner.jsx";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Audience from "./Audience.jsx";

class App extends React.Component {
  render() {
    return (
      <Router>
        <Route path="/" component={Partners} />
        <Route path="/audience" component={Audience} />
      </Router>
    );
  }
}

export default App;
