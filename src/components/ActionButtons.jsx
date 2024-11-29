import React from 'react';
import { Button, Stack } from '@mui/material';
import CategorySelector from './CategorySelector';

const ActionButtons = ({
    handleClear,
    handleAddCategory,
    handleDeleteCategory,
    categoryToDelete,
    setCategoryToDelete,
    categories,
}) => (
    <Stack spacing={2} direction="column">
        {/* Add Category Button */}
        <Button
            variant="contained"
            color="secondary"
            size="small"
            fullWidth
            onClick={handleAddCategory}
        >
            Add Category
        </Button>

        {/* Clear All Button */}
        <Button
            variant="contained"
            color="error"
            size="small"
            fullWidth
            onClick={handleClear}
        >
            Clear All Data In Category
        </Button>

        <p>Select a category to delete</p>

        {/* Delete Category Dropdown using CategorySelector */}
        <CategorySelector
            categories={categories}
            category={categoryToDelete}
            setCategory={setCategoryToDelete}
        />

        {/* Delete Selected Category Button */}
        <Button
            variant="contained"
            color="primary"
            fullWidth
            onClick={handleDeleteCategory}
            disabled={!categoryToDelete}
            sx={{ marginTop: '16px' }}
        >
            Delete Selected Category
        </Button>
    </Stack>
);

export default ActionButtons;