import React from 'react';
import { FormControl, InputLabel, Select, MenuItem, Box } from '@mui/material';
import '../styles/FormAndCategory.css';

// The CategorySelector component used to select a category
const CategorySelector = ({ categories, category, setCategory, label }) => (
    <Box sx={{ mt: 2 }}> {/* Adds a margin-top */}
        <FormControl fullWidth variant="outlined" className="custom-category-selector">
            {/* FormControl is used to provide a frame around the form field */}
            <InputLabel>{label}</InputLabel> {/* Label for the dropdown menu */}
            <Select
                value={category} // The value of the dropdown menu is the current category
                onChange={(e) => setCategory(e.target.value)} // Updates the category on change
                label={label} // Associates the label with the dropdown
            >
                {/* Renders a list of MenuItem components for each category */}
                {categories.map((cat, index) => (
                    <MenuItem key={index} value={cat}>
                        {cat}
                    </MenuItem>
                ))}
            </Select>
        </FormControl>
    </Box>
);

export default CategorySelector;
