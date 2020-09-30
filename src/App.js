import React from "react";
import Header from "./components/Header";
import Signup from "./components/Signup";
import Welcome from "./containers/Welcome";
import api from "./services/api";
import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import ServicesContainer from "./containers/ServicesContainer";
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
    let searchResults = event.target.value
    this.setState({ search: searchResults })
  }

  handleNewService = (event) => {
    event.preventDefault()
    console.log(event, " an event for new Service")
  }

  handleOnChangeNewService = (event) => {
    console.log(event.target.name, event.target.value)
    let name = event.target.name
    let value = event.target.value
    this.setState(prevState => ({
      newService: {...prevState.newService, [name]: value}
    }))
  }


  render() {

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
        <Route exact path="/newservice" render={(routerProps) => {
          return( <ServiceNew {...routerProps} newService={this.state.newService}  handleNewService={this.handleNewService}
            handleOnChangeNewService={this.handleOnChangeNewService}/>)} 
        }/>

      </div>
    );
  }
}

export default App;
