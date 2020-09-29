import React from "react";
import Header from "./components/Header";
import Signup from "./components/Signup";
import Welcome from "./containers/Welcome";
import api from "./services/api";
import ServicesContainer from "./containers/ServicesContainer";
import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import ServicesContainer from "./containers/ServicesContainer";

class App extends React.Component {


  state = {
    auth: { currentUser: {} }
  };

  componentDidMount() {
    const token = localStorage.getItem("token");
    if (token) {
      api.auth.getCurrentUser().then((user) => {
        const currentUser = { currentUser: user };
        this.setState({ auth: currentUser });
      });
    }
  }
  handleLogin = (user) => {
    const currentUser = { currentUser: user };
    localStorage.setItem("token", user.token);
    this.setState({ auth: currentUser });
  };



  render() {
    console.log(this.state.auth.currentUser.empty ? true : false)
    return (
      <div>
        <Header />


        <Route exact={true} path="/" render={(routerProps) => {
          return (<ServicesContainer {...routerProps} />);
        }} />

        <Route exact path="/login"
          render={(routerProps) => {
            return (<Welcome {...routerProps} handleLogin={this.handleLogin} />);
          }}
        />
        <Route exact path="/signup" component={Signup} />
      </div>
    );
  }

export default App;
