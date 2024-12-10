import React from 'react';
import { List, ListItem, ListItemText, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import '../styles/ListItemStyles.css';

// The DataList component displays a list of data and provides options to edit or remove items
const DataList = ({ filteredData, handleEdit, handleRemove }) => (
    <List>
        {/* Iterates over filteredData and renders each item as a ListItem */}
        {filteredData.map((item, index) => (
            <ListItem
                key={index} // Unique key for each ListItem to improve performance
                className="custom-list-item"
                secondaryAction={
                    <>
                        {/* Icon button to edit the item */}
                        <IconButton edge="end" onClick={() => handleEdit(item)} sx={{ color: 'white' }}>
                            <EditIcon />
                        </IconButton>
                        {/* Icon button to remove the item */}
                        <IconButton edge="end" onClick={() => handleRemove(item)} sx={{ color: 'white' }}>
                            <DeleteIcon />
                        </IconButton>
                    </>
                }
            >
                {/* Displays the text from the item */}
                <ListItemText primary={item.text} />
            </ListItem>
        ))}
    </List>
);

export default DataList;
