// Imports React and ReactDOM to render the app in the browser.
import React from 'react';
import ReactDOM from 'react-dom/client';
// Imports BrowserRouter from react-router-dom to handle routing in the application.
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './styles/index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
    // Wraps the App component in BrowserRouter to enable navigation with React Router
    <BrowserRouter>
        <App />
    </BrowserRouter>
);
