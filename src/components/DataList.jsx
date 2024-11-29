import React from 'react';
import { List, ListItem, ListItemText, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

const DataList = ({ filteredData, handleEdit, handleRemove }) => (
    <List>
        {filteredData.map((item, index) => (
            <ListItem
                key={index}
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
