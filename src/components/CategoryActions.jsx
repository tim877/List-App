import React from 'react';
import { Button, Stack } from '@mui/material'; // Importing Material-UI components
import CategorySelector from './CategorySelector'; // Importing the CategorySelector component

// CategoryActions component that receives various functions and state from the parent
const CategoryActions = ({
    handleClear, // Function to clear all data in the selected category
    handleAddCategory, // Function to add a new category
    handleDeleteCategory, // Function to delete the selected category
    categoryToDelete, // The category selected for deletion
    setCategoryToDelete, // Function to update the selected category
    categories, // List of all categories
}) => (
    <Stack spacing={2} direction="column">
        {/* Buttons and components for managing categories */}

        {/* Button to add a new category */}
        <Button
            variant="contained"
            color="secondary"
            size="small"
            fullWidth
            onClick={handleAddCategory}
        >
            Add List
        </Button>

        {/* Button to clear all data in the selected category */}
        <Button
            variant="contained"
            color="error"
            size="small"
            fullWidth
            onClick={handleClear}
        >
            Clear All Data In List
        </Button>

        {/* Dropdown to select a category to delete, uses the CategorySelector component */}
        <CategorySelector
            categories={categories} // List of all categories
            category={categoryToDelete} // The selected category
            setCategory={setCategoryToDelete} // Function to update the selected category
            label="Select a list to delete" // Custom label for deletion context
        />

        {/* Button to delete the selected category */}
        <Button
            variant="contained"
            color="primary"
            fullWidth
            onClick={handleDeleteCategory} // Function to execute on click
            disabled={!categoryToDelete} // Button is disabled if no category is selected
            sx={{ marginTop: '16px' }} // Extra spacing above the button
        >
            Delete Selected List
        </Button>
    </Stack>
);

export default CategoryActions;
