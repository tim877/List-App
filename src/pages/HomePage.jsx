import React, { useState } from 'react';
import CategoryManager from '../components/CategoryManager';
import { Box } from '@mui/material';
import '../styles/HomePageStyles.css';

const HomePage = () => {
    const [categories, setCategories] = useState(['General']);

    return (
        <Box className="home-page-container">
            <Box className="centered-box">
                <h1 className="title">Create a list</h1>
            </Box>
            <CategoryManager categories={categories} setCategories={setCategories} />
        </Box>
    );
};

export default HomePage;
