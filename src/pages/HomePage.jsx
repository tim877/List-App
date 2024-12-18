import React, { useState } from 'react';
import CategoryManager from '../components/CategoryManager';
import { Box } from '@mui/material';
import '../styles/HomePage.css';

const HomePage = () => {
    // State to hold the categories on the homepage, starts with a default category 'General'
    const [categories, setCategories] = useState(['General']);

    return (
        <Box className="home-page-container">
            {/* Box component that contains the title and centers it */}
            <Box className="centered-box">
                <h1 className="title">Create a list</h1>
            </Box>
            {/* Container for CategoryManager */}
            <Box className="category-manager-container">
                {/* CategoryManager component is passed categories and a function to update them */}
                <CategoryManager categories={categories} setCategories={setCategories} />
            </Box>
        </Box>
    );
};

export default HomePage;
