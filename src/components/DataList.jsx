import React from 'react';
import { List, ListItem, ListItemText, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import '../styles/ListItemStyles.css';

// DataList-komponenten som visar en lista av data och erbjuder alternativ för att redigera eller ta bort objekt
const DataList = ({ filteredData, handleEdit, handleRemove }) => (
    <List>
        {/* Itererar över filteredData och renderar varje item som en ListItem */}
        {filteredData.map((item, index) => (
            <ListItem
                key={index} // Unikt nyckel för varje ListItem för att förbättra prestanda
                className="custom-list-item"
                secondaryAction={
                    <>
                        {/* Ikonknapp för att redigera objektet */}
                        <IconButton edge="end" onClick={() => handleEdit(item)} sx={{ color: 'white' }}>
                            <EditIcon />
                        </IconButton>
                        {/* Ikonknapp för att ta bort objektet */}
                        <IconButton edge="end" onClick={() => handleRemove(item)} sx={{ color: 'white' }}>
                            <DeleteIcon />
                        </IconButton>
                    </>
                }
            >
                {/* Visar texten från item */}
                <ListItemText primary={item.text} />
            </ListItem>
        ))}
    </List>
);

export default DataList;
