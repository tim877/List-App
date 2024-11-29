import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import DataPage from './pages/DataPage';
import NavBar from './components/NavBar';

const App = () => {
    return (
        <>
            <NavBar />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/data" element={<DataPage />} />
            </Routes>
        </>
    );
};

export default App;
