import React, { Component } from 'react';
import Navbar from './Navbar';


class Header extends Component {

  state = {
    showLogin: false,
    showSignup: false,
  }

  handleLoginClick = () => {
    this.setState((prevState) => ({ showLogin: !prevState.showLogin }))
  }

  render() {
    return (
      <header className="header">

        <Navbar
          showSig={this.state.showSignup}
          showLogin={this.state.showLogin}
          handleLoginClick={this.handleLoginClick}

        />

        <div className="header-image-cropper">
          <img src="https://i.ytimg.com/vi/RCSTnK1gfzs/maxresdefault.jpg"
            className="header-pic" />
        </div>
        <h1 className="text-center">QPQ</h1>
      </header>
    );
  }

}

export default Header;
