import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/NavBar.css';

const NavBar = () => {
    return (
        <nav className="navbar">
            <Link to="/" className="nav-link">Home</Link>
            <Link to="/data" className="nav-link">View All Data</Link>
        </nav>
    );
};

export default NavBar;
