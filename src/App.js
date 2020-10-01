import React from "react";
import Header from "./components/Header";
import Signup from "./components/Signup";
import Welcome from "./containers/Welcome";
// import UserContainer from './containers/UserContainer'
import EditUserForm from "./components/EditUserForm";

import api from "./services/api";
import "./App.css";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
// import ServicesContainer from "./containers/ServicesContainer";
import RequestsContainer from "./containers/RequestsContainer";
import AddRequest from "./components/AddRequest";
import ProfilePage from "./components/ProfilePage";
import ServiceNew from "./components/ServiceNew"


class App extends React.Component {
  state = {
    auth: { currentUser: {} },
    search: "",
    newService: {
      name: "",
      value: "",
      offeringDescription: "",
      exchangeDescription: "",
      img_url: "",
      isService: false,
      user_id: "",
      // categories: {
      //   // need to add categories later
      // }
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

  // search bar
  handleSearch = (e) => {
    let searchResults = e.target.value;
    this.setState({ search: searchResults });
  };
// service component stuff here 
  handleSubmitNewServiceForm = (e) => {
    e.preventDefault()
    let newService = this.state.newService

    api.posts.postNewServiceOffering(newService).then(data => {console.log( "back in handleSumbit")})
    

  }

  handleOnChangeNewServiceForm = (e) => {
      let name = e.target.name
      let value = e.target.value

      this.setState(prevState => ({
        newService: { 
          ...prevState.newService, 
          [name]: value,
          user_id: prevState.auth.currentUser.id }
      }))
  } //service stuff ends here

//handle user profile edit here

  // handleEditButton = (user) =>{
  //   this.setState({
  //     user: user
  //   })
  //   console.log(user)
  // }

  // handleFormChange = (e) =>{
  //   this.setState({
  //     user: {
  //       ...this.state.user,
  //       [e.target.name]: e.target.value
  //     }
  //   })

  // }


  render() {
console.log(this.state.auth.currentUser)
// debugger
    return (
      <div>
        <Header
          handleLogout={this.handleLogout}
          handleSearch={this.handleSearch}
        />
        <Route
          exact={true}
          path="/requests"
          render={(routerProps) => {
            return (
              <RequestsContainer {...routerProps} search={this.state.search} />
            );
          }}
        />
       { /*<Route
          exact={true}
          path="/"
          render={(routerProps) => {
            return (
              <ServicesContainer {...routerProps} search={this.state.search} />
            );
          }}
        />*/}
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

        <Route exact path="/signup" render={(routerProps) => {
          return (<Signup {...routerProps} handleLogin={this.handleLogin} />)
        }} />

        <Route exact path="/profile" render={(routerProps) => {
          return (<ProfilePage {...routerProps} currentUser={this.state.auth.currentUser.user}  
            // this.handleEditButton
            // this.handleFormChange 
             />)
        }} />


        <Route exact path="/newservice" render={(routerProps) => {
          return (
            <ServiceNew {...routerProps}
              newService={this.state.newService} handleSubmitNewServiceForm={this.handleSubmitNewServiceForm}
              handleOnChangeNewServiceForm={this.handleOnChangeNewServiceForm} />)
        }
        } />
      </div>
    );
  }
}

export default App;
