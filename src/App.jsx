// Imports React and necessary modules from react-router-dom for routing.
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import DataPage from './pages/DataPage';
import NavBar from './components/NavBar';

const App = () => {
    return (
        <>
            {/* Renders the NavBar component at the top of the page */}
            <NavBar />

            {/* Defines the different routes in the app */}
            <Routes>
                {/* The first route displays the HomePage component when the user navigates to the root ("/") */}
                <Route path="/" element={<HomePage />} />
                {/* The second route displays the DataPage component when the user navigates to "/data" */}
                <Route path="/data" element={<DataPage />} />
            </Routes>
        </>
    );
};

export default App;
