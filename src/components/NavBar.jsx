// src/components/NavBar.jsx

import React from 'react';
import { Link } from 'react-router-dom'; // Importerar Link-komponenten från React Router för navigering
import '../styles/NavBar.css'; // Importerar anpassad CSS för stil

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

export default NavBar; // Exporterar NavBar-komponenten för användning i andra delar av applikationen
