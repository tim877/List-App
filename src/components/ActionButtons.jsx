import React from 'react';
import { Button, Stack } from '@mui/material';

const ActionButtons = ({
    handleClear,
    handleAddCategory,
    handleDeleteCategory,
    categoryToDelete,
    setCategoryToDelete,
    categories,
}) => (
    <Stack spacing={2} direction="column" sx={{ mt: 3 }}>
        <Button variant="contained" color="secondary" onClick={handleAddCategory}>
            Add Category
        </Button>
        <Button variant="contained" color="error" onClick={handleClear}>
            Clear All
        </Button>
        <Button
            variant="contained"
            onClick={handleDeleteCategory}
            disabled={!categoryToDelete}
        >
            Delete Category
        </Button>
    </Stack>
);

export default ActionButtons;
