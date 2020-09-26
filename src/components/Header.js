import React, { Component } from 'react';
import Navbar from './Navbar';


class Header extends Component {

  state = {
    showLogin: false,
    showSignup: false,
    search: ''
  }

  handleLoginClick = () => {
    this.setState((prevState) => ({ showLogin: !prevState.showLogin }))
  }
  handleSignUpClick = () => {
    console.log(this.state.showSignup)
    this.setState((prevState) => ({ showSignup: !prevState.showSignup }))
  }

  handleOnChange = (e) => {
    this.setState({
      search: e.target.value
    })
  }


  render() {
    return (
      <header className="header" >

        <Navbar
          showSignup={this.state.showSignup}
          showLogin={this.state.showLogin}
          search={this.state.search}
          handleLoginClick={this.handleLoginClick}
          handleSignUpClick={this.handleSignUpClick}
          handleOnChange={this.handleOnChange}
        />

        <div className="header-image-cropper">
          <img src="https://i.ytimg.com/vi/RCSTnK1gfzs/maxresdefault.jpg"
            className="header-pic" />
        </div>
        <h1 className="text-center">QPQ</h1>

        <button className="new-service"> Add new QPQ!</button>
      </header>
    );
  }

}

export default Header;
