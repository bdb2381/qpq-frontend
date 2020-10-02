import React from "react";
import Header from "./components/Header";
import Signup from "./components/Signup";
import Welcome from "./containers/Welcome";
import UserContainer from "./containers/UserContainer";

// import EditUserForm from "./components/EditUserForm";
import ProfilePage from "./components/ProfilePage";

import api from "./services/api";
import "./App.css";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import ServicesContainer from "./containers/ServicesContainer";
import RequestsContainer from "./containers/RequestsContainer";
import AddRequest from "./components/AddRequest";

import ServiceNew from "./components/ServiceNew";

class App extends React.Component {
  state = {
    auth: { currentUser: {} },
    user: {
      first_name: "",
      last_name: "",
      img_url: "",
      street: "",
      city: "",
      state: "",
      zipcode: "",
    },
    search: "",
    newService: {
      name: "",
      value: "",
      offeringDescription: "",
      exchangeDescription: "",
      img_url: "",
      isService: false,
    },
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
    const currentUser = { currentUser: response.user };
    localStorage.setItem("token", response.jwt);
    this.setState({
      auth: currentUser,
    });
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

  handleSubmitNewServiceForm = (e) => {
    e.preventDefault();
    let newService = this.state.newService;

    api.posts.postNewServiceOffering(newService).then((data) => {
      console.log(data, "back in handle Sumbit");
    });

  };

  handleOnChangeNewServiceForm = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    this.setState((prevState) => ({
      newService: {
        ...prevState.newService,
        [name]: value,
        user_id: this.state.auth.currentUser.id,
      },
    }));
  };
  //service stuff ends here

  //handle user profile edit here
  handleEditButton = (user) => {
    console.log(user);
    this.setState({
      user: user,
    });

    //fetch patch request with the body of user
  };

  //handle user submit
  handleEditUserSubmit = (event, userState, id) => {
    event.preventDefault();

    //fetch patch request with event.value

    api.users.patchUserProfile(userState, id);
  };

  handleFormChange = (event) => {
    // console.log(e.target.value)
    this.setState({
      user: {
        ...this.state.user,
        [event.target.name]: event.target.value,
      },
    });
  };

  // handleUpdate = () =>{

  //   fetch(`http://localhost:3000/api/v1/users/${this.state.user.id}`)
  // }



  render() {

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
              <RequestsContainer
                {...routerProps}
                currentUser={this.state.auth.currentUser.user}
                search={this.state.search}
              />
            );
          }}
        />
        <Route
          exact={true}
          path="/"
          render={(routerProps) => {
            return (
              <ServicesContainer
                {...routerProps}
                search={this.state.search}
                currentUser={this.state.auth.currentUser.user}
              />
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
        <Route
          exact
          path="/profile"
          render={(routerProps) => {
            return (
              <ProfilePage
                {...routerProps}
                handleEditButton={this.handleEditButton}
                handleFormChange={this.handleFormChange}
                currentUser={this.state.auth.currentUser}
                handleEditUserSubmit={this.handleEditUserSubmit}
              />
            );
          }}
        />

        <Route
          exact
          path="/newservice"
          render={(routerProps) => {
            return (
              <ServiceNew
                {...routerProps}
                newService={this.state.newService}
                handleSubmitNewServiceForm={this.handleSubmitNewServiceForm}
                handleOnChangeNewServiceForm={this.handleOnChangeNewServiceForm}
              />
            );
          }}
        />
      </div>
    );
  }
}

export default App;
