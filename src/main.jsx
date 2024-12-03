// Importerar React och ReactDOM för att kunna rendera appen i webbläsaren
import React from 'react';
import ReactDOM from 'react-dom/client';
// Importerar BrowserRouter från react-router-dom för att hantera routing i applikationen
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './styles/index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
    // Wrappar App-komponenten i BrowserRouter för att möjliggöra navigering med React Router
    <BrowserRouter>
        <App />
    </BrowserRouter>
);
