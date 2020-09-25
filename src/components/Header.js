import React, { Component } from 'react';
import Navbar from './Navbar';


class Header extends Component {

  render() {
    return (
      <header className="App-header">
        <img src="https://pbs.twimg.com/media/EF-36wfWwAEtTNY?format=jpg&name=small"
          width="15%" />
        <h1 className="text-center">QPQ</h1>
        <Navbar />
      </header>
    );
  }

}

export default Header;
