// src/pages/HomePage.jsx

import React, { useState } from 'react'; // Importerar React och useState hook
import CategoryManager from '../components/CategoryManager'; // Importerar CategoryManager-komponenten
import { Box } from '@mui/material'; // Importerar Box-komponenten från Material-UI för layout
import '../styles/HomePageStyles.css'; // Importerar CSS-styling för hemsidan

const HomePage = () => {
    // State för att hålla kategorierna på hemsidan, initialiseras med en standardkategori 'General'
    const [categories, setCategories] = useState(['General']);

    return (
        <Box className="home-page-container">
            {/* Box-komponent som innehåller titeln och centrerar den */}
            <Box className="centered-box">
                <h1 className="title">Create a list</h1>
            </Box>
            {/* CategoryManager-komponenten skickas in med kategorier och en funktion för att uppdatera dem */}
            <CategoryManager categories={categories} setCategories={setCategories} />
        </Box>
    );
};

export default HomePage; // Exporterar komponenten för användning i andra delar av applikationen
