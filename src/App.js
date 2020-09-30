import React from "react";
import Header from "./components/Header";
import Signup from "./components/Signup";
import Welcome from "./containers/Welcome";
import UserContainer from './containers/UserContainer'
import EditUserForm from "./components/EditUserForm";

import api from "./services/api";
import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import ServicesContainer from "./containers/ServicesContainer";
import ProfilePage from "./components/ProfilePage";

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
  handleLogin = (response) => {
    console.log(response)
    console.log(response.user)
    const currentUser = { currentUser: response.user };
    localStorage.setItem("token", response.jwt);
    this.setState({ auth: currentUser });
  };

  handleLogout = () => {
    localStorage.removeItem("token");
    this.setState({ auth: { currentUser: {} } });
  };

  handleSearch = (event) => {
    let searchResults = event.target.value
    this.setState({ search: searchResults })
  } 

 



  render() {
console.log(this.state.auth.currentUser)


// debugger
    return (
      <div>
        <Header handleLogout={this.handleLogout}
          handleSearch={this.handleSearch}
        />

        <Route exact={true} path="/" render={(routerProps) => {
          return (<ServicesContainer {...routerProps} search={this.state.search} />);
        }} />
        <Route exact path="/login"
          render={(routerProps) => {
            return (<Welcome {...routerProps} handleLogin={this.handleLogin} />);
          }}
        />
        <Route exact path="/signup" render={(routerProps) => {
          return (<Signup {...routerProps} handleLogin={this.handleLogin} />)
        }} />
        <Route exact path="/profile" render={(routerProps) => {
          return (<UserContainer {...routerProps} currentUser={this.state.auth.current_user}  />)
        }} />
      { /*<Route exact path='/' render={(routerProps) =>{
      return (<EditUserForm {...routerProps}  handleEditButton={this.handleEditButton} handleFormChange={this.handleFormChange} />)}} />*/}
      </div>
    );
  }
}

export default App;
