import React, { Component } from 'react';
import Navbar from './Navbar';


class Header extends Component {


  render() {
    return (
      <header className="header" >
        <Navbar

        />
        <div className="header-image-cropper">
          <img src="https://i.ytimg.com/vi/RCSTnK1gfzs/maxresdefault.jpg"
            className="header-pic" />
        </div>
        <span className="text-center">QPQ</span>
      </header>
    );
  }

}

export default Header;
