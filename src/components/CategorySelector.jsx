import React from 'react';
import { FormControl, InputLabel, Select, MenuItem, Box } from '@mui/material';
import '../styles/FormAndCategoryStyles.css';

// CategorySelector-komponenten som används för att välja en kategori
const CategorySelector = ({ categories, category, setCategory }) => (
    <Box sx={{ mt: 2 }}> {/* Lägger till en margin-top */}
        <FormControl fullWidth variant="outlined" className="custom-category-selector">
            {/* FormControl används för att ge en ram kring formulärfältet */}
            <InputLabel>Category</InputLabel> {/* Label för dropdown-menyn */}
            <Select
                value={category} // Värdet för dropdown-menyn är den aktuella kategorin
                onChange={(e) => setCategory(e.target.value)} // Uppdaterar kategorin vid ändring
                label="Category"
            >
                {/* Renderar en lista av MenuItem-komponenter för varje kategori */}
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
