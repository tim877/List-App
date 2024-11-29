import React from 'react';
import { FormControl, InputLabel, Select, MenuItem } from '@mui/material';

const CategorySelector = ({ categories, category, setCategory }) => (
    <FormControl fullWidth variant="outlined" sx={{ mb: 3 }}>
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
);

export default CategorySelector;
