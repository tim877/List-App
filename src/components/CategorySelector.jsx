import React from 'react';
import { FormControl, InputLabel, Select, MenuItem, Box } from '@mui/material';
import '../styles/FormAndCategoryStyles.css';

const CategorySelector = ({ categories, category, setCategory }) => (
    <Box sx={{ mt: 2 }}> {/* Add margin-top using Material-UI's Box */}
        <FormControl fullWidth variant="outlined" className="custom-category-selector">
            <InputLabel>Category</InputLabel>
            <Select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                label="Category"
            >
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
