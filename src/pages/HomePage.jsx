import React, { useState } from 'react';
import CategoryManager from '../components/CategoryManager';
import { Box } from '@mui/material';
import '../styles/HomePageStyles.css';

const HomePage = () => {
    // State för att hålla kategorierna på hemsidan, startar med en standardkategorin 'General'
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

export default HomePage;
