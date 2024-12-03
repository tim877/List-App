import React, { useEffect, useState } from 'react';
import { fetchData } from '../api/dataService';
import { Container, Typography, List, ListItem, ListItemText, Paper } from '@mui/material';
import '../styles/DataPage.css';

const DataPage = () => {
    // State för att hålla datan som hämtas från servern
    const [data, setData] = useState([]);

    // Använd useEffect för att hämta data när komponenten monteras
    useEffect(() => {
        fetchData() // Hämtar data från servern
            .then((data) => setData(data)) // Uppdaterar state med den hämtade datan
            .catch((error) => console.error('Error fetching data:', error)); // Hanterar eventuella fel vid hämtning av data
    }, []); // Tom array innebär att useEffect körs en gång när komponenten monteras

    return (
        <Container className="data-container">
            {/* Titel för datainsamlingssidan */}
            <Typography className="data-page-title" variant="h4" gutterBottom>
                All Data
            </Typography>
            {/* Papperskomponent för att omge listan */}
            <Paper className="data-paper">
                {/* Lista som innehåller varje dataobjekt */}
                <List className="data-list">
                    {data.map((item, index) => (
                        // Skapar en listpost för varje objekt i datan
                        <ListItem key={index} className="data-list-item">
                            <ListItemText
                                // Visar texten från dataobjektet
                                primary={<span className="data-item-text">{item.text}</span>}
                                // Visar kategorin för dataobjektet
                                secondary={<span className="data-item-category">{item.category}</span>}
                            />
                        </ListItem>
                    ))}
                </List>
            </Paper>
        </Container>
    );
};

export default DataPage;
