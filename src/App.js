import React from "react";
import Header from "./components/Header";
import Signup from "./components/Signup";
import Login from "./components/Login";
import ProfilePage from "./components/ProfilePage";
import ServiceNew from "./components/ServiceNew";
import ServicesContainer from "./containers/ServicesContainer";
import RequestsContainer from "./containers/RequestsContainer";

import api from "./services/api";
import { Route, Switch, Link, NavLink, withRouter } from "react-router-dom";
import "./App.css";

class App extends React.Component {
  state = {
    user: {},
    search: "",
    newService: {
      name: "",
      value: "",
      offeringDescription: "",
      exchangeDescription: "",
      img_url: "",
      isService: false,
    },
    editDisable: false,
  };

  componentDidMount() {
    console.log(localStorage.token);
    if (localStorage.token) {
      fetch("http://localhost:3000/api/v1/persist", {
        headers: {
          Authorization: `Bearer ${localStorage.token}`,
        },
      })
        .then((res) => res.json())
        .then((json) => {
          // console.log(json);
          this.handleAuthResponse(json);
        });
    }
  }

  handleLoginSubmit = (event, user) => {
    event.preventDefault();
    fetch("http://localhost:3000/api/v1/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((json) => {
        // console.log(json);
        if (!json.error) {
          this.handleAuthResponse(json);
        } else {
          alert(json.error);
        }
      })
      .catch((err) => console.log(err));
  };
  handleSignUpSubmit = (event, user) => {
    event.preventDefault();
    // console.log(user);
    fetch("http://localhost:3000/api/v1/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((json) => {
        if (!json.error) {
          this.handleAuthResponse(json);
        } else {
          alert(json.error);
        }
      });
  };

  handleAuthResponse = (response) => {
    if (response.user) {
      localStorage.token = response.jwt;
      this.setState({ user: response.user }, () => {
        this.props.history.push("/services");
      });
    } else {
      alert(response.error);
    }
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
      alert(`${data.service.name} has been created`);
      this.props.history.push("/services");
    });
    e.target.reset();
  };

  handleOnChangeNewServiceForm = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    this.setState((prevState) => ({
      newService: {
        ...prevState.newService,
        [name]: value,
        user_id: this.state.user.id,
      },
    }));
  };
  //service stuff ends here

  //handle user profile edit here
  handleEditButton = (user) => {
    this.setState({
      user: user,

      editDisable: !this.state.editDisable,
    });

    //fetch patch request with the body of user
  };

  //handle user submit
  handleEditUserSubmit = (event, user, id) => {
    event.preventDefault();

    //fetch patch request with event.value
    api.users.patchUserProfile(user, id).then(
      this.setState({
        editDisable: !this.state.editDisable,
        auth: { currentUser: { ...this.state.currentUser, user } },
      })
    );
  };

  handleFormChange = (event) => {
    this.setState({
      user: {
        ...this.state.user,
        [event.target.name]: event.target.value,
      },
    });
  };

  handleUserDelete = (user) => {
    api.users.handleDeleteButton(user.id);

    localStorage.removeItem("token");
    this.setState({ auth: { currentUser: {} } });
  };

  renderLogin = () => (
    <Login
      handleLogin={this.handleLogin}
      handleLoginSubmit={this.handleLoginSubmit}
    />
  );
  renderSignup = () => (
    <Signup
      handleLogin={this.handleLogin}
      handleSignUpSubmit={this.handleSignUpSubmit}
    />
  );
  renderServicesContainer = () => (
    <ServicesContainer
      search={this.state.search}
      currentUser={this.state.user}
    />
  );
  renderProfilePage = () => (
    <ProfilePage
      handleUserDelete={this.handleUserDelete}
      handleEditButton={this.handleEditButton}
      handleFormChange={this.handleFormChange}
      user={this.state.user}
      handleEditUserSubmit={this.handleEditUserSubmit}
      editDisable={this.state.editDisable}
    />
  );

  renderRequestsContainer = () => (
    <RequestsContainer
      currentUser={this.state.user}
      search={this.state.search}
    />
  );

  renderNewService = () => (
    <ServiceNew
      newService={this.state.newService}
      handleSubmitNewServiceForm={this.handleSubmitNewServiceForm}
      handleOnChangeNewServiceForm={this.handleOnChangeNewServiceForm}
    />
  );

  render() {
    return (
      <div>
        <Header
          handleLogout={this.handleLogout}
          handleSearch={this.handleSearch}
        />
        <Switch>
          <Route
            exact
            path="/requests"
            component={this.renderRequestsContainer}
          />
          <Route
            exact
            path="/services"
            component={this.renderServicesContainer}
          />
          <Route path="/login" component={this.renderLogin} />
          <Route exact path="/signup" component={this.renderSignup} />
          <Route exact path="/profile" component={this.renderProfilePage} />
          <Route exact path="/newservice" component={this.renderNewService} />
        </Switch>
      </div>
    );
  }
}

export default withRouter(App);
