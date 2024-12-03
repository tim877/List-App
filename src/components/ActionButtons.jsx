// src/components/ActionButtons.jsx

import React from 'react';
import { Button, Stack } from '@mui/material'; // Importerar Material-UI-komponenter
import CategorySelector from './CategorySelector'; // Importerar CategorySelector-komponenten

// ActionButtons-komponenten som tar emot olika funktioner och state från föräldern
const ActionButtons = ({
    handleClear, // Funktion för att rensa alla data i den valda kategorin
    handleAddCategory, // Funktion för att lägga till en ny kategori
    handleDeleteCategory, // Funktion för att ta bort den valda kategorin
    categoryToDelete, // Den kategori som är vald att tas bort
    setCategoryToDelete, // Funktion för att uppdatera den valda kategorin
    categories, // Lista över alla kategorier
}) => (
    <Stack spacing={2} direction="column">
        {/* Knappar och komponenter för olika åtgärder */}

        {/* Knapp för att lägga till en ny kategori */}
        <Button
            variant="contained"
            color="secondary" // Färg för knappen
            size="small" // Storlek på knappen
            fullWidth // Gör knappen fullbredd
            onClick={handleAddCategory} // Funktion som körs vid klick
        >
            Add Category
        </Button>

        {/* Knapp för att rensa all data i den valda kategorin */}
        <Button
            variant="contained"
            color="error" // Färg för knappen
            size="small" // Storlek på knappen
            fullWidth // Gör knappen fullbredd
            onClick={handleClear} // Funktion som körs vid klick
        >
            Clear All Data In Category
        </Button>

        {/* Text för att instruera användaren att välja en kategori att ta bort */}
        <p>Select a category to delete</p>

        {/* Dropdown för att välja kategori att ta bort, använder CategorySelector-komponenten */}
        <CategorySelector
            categories={categories} // Lista över alla kategorier
            category={categoryToDelete} // Den valda kategorin
            setCategory={setCategoryToDelete} // Funktion för att uppdatera den valda kategorin
        />

        {/* Knapp för att ta bort den valda kategorin */}
        <Button
            variant="contained"
            color="primary" // Färg för knappen
            fullWidth // Gör knappen fullbredd
            onClick={handleDeleteCategory} // Funktion som körs vid klick
            disabled={!categoryToDelete} // Knappen är inaktiverad om ingen kategori är vald
            sx={{ marginTop: '16px' }} // Extra avstånd ovanför knappen
        >
            Delete Selected Category
        </Button>
    </Stack>
);

export default ActionButtons; // Exporterar ActionButtons-komponenten för användning i andra delar av applikationen
