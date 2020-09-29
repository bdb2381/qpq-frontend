
import React from "react";
import Header from "./components/Header";
import Signup from "./components/Signup";
import Welcome from "./containers/Welcome";
import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom'

// console.log(process.env.REACT_APP_GOOGLE_API_KEY)

function App() {

  return (
    <div>
      <Router>
        <Header />
        <Route exact={true} path="/" component={Welcome} />
        <Route exact path="/signup" component={Signup} />

      </Router>

    </div>
  );
}
export default App;
