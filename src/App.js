import React from "react";
import Header from "./components/Header";
import Signup from "./components/Signup";
import Welcome from "./containers/Welcome";
// import UserContainer from './containers/UserContainer'
import EditUserForm from "./components/EditUserForm";

import api from "./services/api";
import "./App.css";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import ServicesContainer from "./containers/ServicesContainer";
import ProfilePage from "./components/ProfilePage";
import ServiceNew from "./components/ServiceNew"




class App extends React.Component {


  state = {
    auth: { currentUser: {} },
    search: "",
    newService: { 
      name: "",
      value:"",
      offeringDescription: "",
      exchangeDescription: "",
      img_url: "",  
      isService: false,
      cagatories: { 
        // need to add cagatories later
      }
    }
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
    // console.log(response)
    // console.log(response.user)
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

  handleSubmitNewServiceForm = (event) => {
    event.preventDefault()
    let newService = this.state.newService
    let currentUserId = this.state.auth.currentUser.id
    console.log(newService, currentUserId )
  }

  handleOnChangeNewServiceForm = (event) => {
  console.log(event.target.name, event.target.value)
    
    if (event.target.name === 'isService'){
      this.setState(prevState => ({
        newService: {...prevState.newService, isService: !prevState.newService.isService}}))
    } else {
      let name = event.target.name
      let value = event.target.value
      this.setState(prevState => ({
        newService: {...prevState.newService, [name]: value}
    }))
  }
  }


  render() {
    // debugger
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
          return (<ProfilePage {...routerProps} currentUser={this.state.auth.currentUser}  />)
        }} />


        <Route exact path="/newservice" render={(routerProps) => {
          return( 
            <ServiceNew {...routerProps} 
            newService={this.state.newService}  handleSubmitNewServiceForm={this.handleSubmitNewServiceForm}
            handleOnChangeNewServiceForm={this.handleOnChangeNewServiceForm}/>)} 
        }/>

      </div>
    );
  }
}

export default App;
