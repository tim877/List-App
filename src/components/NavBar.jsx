import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/NavBar.css';

// The NavBar component renders the navigation menu
const NavBar = () => {
    return (
        <nav className="navbar"> {/* Container for the navigation menu */}
            {/* Link to the home page */}
            <Link to="/" className="nav-link">Home</Link>
            {/* Link to the page for viewing all data */}
            <Link to="/data" className="nav-link">View All Data</Link>
        </nav>
    );
};

export default NavBar;
