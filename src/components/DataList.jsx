import React from 'react';
import { List, ListItem, ListItemText, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import '../styles/ListItemStyles.css';

const DataList = ({ filteredData, handleEdit, handleRemove }) => (
    <List>
        {filteredData.map((item, index) => (
            <ListItem
                key={index}
                className="custom-list-item"
                secondaryAction={
                    <>
                        <IconButton edge="end" onClick={() => handleEdit(item)} sx={{ color: 'white' }}>
                            <EditIcon />
                        </IconButton>
                        <IconButton edge="end" onClick={() => handleRemove(item)} sx={{ color: 'white' }}>
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
