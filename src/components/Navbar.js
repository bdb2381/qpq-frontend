import React from "react"; import { Link } from "react-router-dom";

const Navbar = (props) => {
    return (
        <div className="navbar">
            <div className="navbar-list">

                {/* <Link to="/login" className="navbar-list">
                    Log In/</Link> */}
                <Link to="/" className="navbar-list">
                    Home </Link>
                <Link to="/newservice" className="navbar-list">
                    Create New Offering </Link>
                <div className="search-container">
                    <input type="text" onChange={props.handleSearch} placeholder="Search" />
                </div>
                {!localStorage.token ? null : <Link to="/" className="navbar-list" onClick={props.handleLogout}> Logout </Link>}
            </div>
        </div>
    );
};

export default Navbar

