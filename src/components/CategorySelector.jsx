// src/components/CategorySelector.jsx

import React from 'react';
import { FormControl, InputLabel, Select, MenuItem, Box } from '@mui/material';
import '../styles/FormAndCategoryStyles.css'; // Importerar anpassad CSS för stil

// CategorySelector-komponenten som används för att välja en kategori
const CategorySelector = ({ categories, category, setCategory }) => (
    <Box sx={{ mt: 2 }}> {/* Lägg till en margin-top med hjälp av Material-UI:s Box */}
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

export default CategorySelector; // Exporterar CategorySelector-komponenten för användning i andra delar av applikationen
