import React from "react";
import Header from "./components/Header";
import Signup from "./components/Signup";
import Welcome from "./containers/Welcome";
import api from "./services/api";
import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import ServicesContainer from "./containers/ServicesContainer";
import RequestsContainer from "./containers/RequestsContainer";

class App extends React.Component {
  state = {
    auth: { currentUser: {} },
    search: "",
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

  handleLogout = () => {
    localStorage.removeItem("token");
    this.setState({ auth: { currentUser: {} } });
  };

  handleSearch = (event) => {
    let searchResults = event.target.value;
    this.setState({ search: searchResults });
  };

  render() {
    return (
      <div>
        <Header
          handleLogout={this.handleLogout}
          handleSearch={this.handleSearch}
        />

        <Route
          exact={true}
          path="/"
          render={(routerProps) => {
            return (
              <RequestsContainer {...routerProps} search={this.state.search} />
            );
          }}
        />
        <Route
          exact={true}
          path="/"
          render={(routerProps) => {
            return (
              <ServicesContainer {...routerProps} search={this.state.search} />
            );
          }}
        />
        <Route
          exact
          path="/login"
          render={(routerProps) => {
            return <Welcome {...routerProps} handleLogin={this.handleLogin} />;
          }}
        />
        <Route
          exact
          path="/signup"
          render={(routerProps) => {
            return <Signup {...routerProps} handleLogin={this.handleLogin} />;
          }}
        />
      </div>
    );
  }
}

export default App;
