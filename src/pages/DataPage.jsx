import React, { useEffect, useState } from 'react';
import { fetchJsonData } from '../api/dataServiceAxios';
import { Container, Typography, List, ListItem, ListItemText, Paper, Box } from '@mui/material';
import '../styles/DataPage.css';

const DataPage = () => {
    // State to hold the data fetched from the server
    const [data, setData] = useState([]);

    // Use useEffect to fetch data when the component mounts
    useEffect(() => {
        fetchJsonData() // Fetches data from the server
            .then((data) => setData(data)) // Updates state with the fetched data
            .catch((error) => console.error('Error fetching data:', error)); // Handles any errors during data fetching
    }, []); // Empty array means the useEffect runs once when the component mounts

    return (
        <Container className="data-container">
            {/* Title for the data collection page */}
            <Typography className="data-page-title" variant="h4" gutterBottom>
                All Data
            </Typography>
            {/* Box component to wrap the list */}
            <Box className="data-list-container">
                {/* Paper component to surround the list */}
                <Paper className="data-paper">
                    {/* List containing each data object */}
                    <List className="data-list">
                        {data.map((item, index) => (
                            // Creates a list item for each object in the data
                            <ListItem key={index} className="data-list-item">
                                <ListItemText
                                    // Displays the text from the data object
                                    primary={<span className="data-item-text">{item.text}</span>}
                                    // Displays the category of the data object
                                    secondary={<span className="data-item-category">{item.category}</span>}
                                />
                            </ListItem>
                        ))}
                    </List>
                </Paper>
            </Box>
        </Container>
    );
};

export default DataPage;
