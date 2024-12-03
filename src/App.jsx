// Importerar React och nödvändiga moduler från react-router-dom för routing.
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import DataPage from './pages/DataPage';
import NavBar from './components/NavBar';

const App = () => {
    return (
        <>
            {/* Renderar (NavBar) högst upp på sidan */}
            <NavBar />

            {/* Definierar de olika rutterna i appen */}
            <Routes>
                {/* Den första routen visar HomePage-komponenten när användaren navigerar till root ("/") */}
                <Route path="/" element={<HomePage />} />
                {/* Den andra routen visar DataPage-komponenten när användaren navigerar till "/data" */}
                <Route path="/data" element={<DataPage />} />
            </Routes>
        </>
    );
};

export default App;
