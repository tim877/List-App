import React, { useEffect, useState } from 'react';
import { fetchData } from '../api/dataService';
import { Container, Typography, List, ListItem, ListItemText, Paper } from '@mui/material';
import '../styles/DataPage.css';

const DataPage = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetchData()
            .then((data) => setData(data))
            .catch((error) => console.error('Error fetching data:', error));
    }, []);

    return (
        <Container className="data-container">
            <Typography className="data-page-title" variant="h4" gutterBottom>
                All Data
            </Typography>
            <Paper className="data-paper">
                <List className="data-list">
                    {data.map((item, index) => (
                        <ListItem key={index} className="data-list-item">
                            <ListItemText
                                primary={<span className="data-item-text">{item.text}</span>}
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
