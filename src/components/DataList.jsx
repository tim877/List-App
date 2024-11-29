import React from 'react';
import { List, ListItem, ListItemText, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import '../styles/ListItemStyles.css'; // Import the CSS file

const DataList = ({ filteredData, handleEdit, handleRemove }) => (
    <List>
        {filteredData.map((item, index) => (
            <ListItem
                key={index}
                className="custom-list-item" // Add the custom class here
                secondaryAction={
                    <>
                        <IconButton edge="end" onClick={() => handleEdit(item)}>
                            <EditIcon />
                        </IconButton>
                        <IconButton edge="end" onClick={() => handleRemove(item)}>
                            <DeleteIcon />
                        </IconButton>
                    </>
                }
            >
                <ListItemText primary={item.text} />
            </ListItem>
        ))}
    </List>
);

export default DataList;
