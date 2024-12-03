import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/NavBar.css';

// NavBar-komponenten som renderar navigeringsmenyn
const NavBar = () => {
    return (
        <nav className="navbar"> {/* Container för navigeringsmenyn */}
            {/* Länk till startsidan */}
            <Link to="/" className="nav-link">Home</Link>
            {/* Länk till sidan för att visa all data */}
            <Link to="/data" className="nav-link">View All Data</Link>
        </nav>
    );
};

export default NavBar;
