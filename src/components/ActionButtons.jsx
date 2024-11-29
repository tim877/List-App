import React from 'react';
import { Button, FormControl, InputLabel, Select, MenuItem, Box, Stack, Tooltip } from '@mui/material';
import '../styles/FormAndCategoryStyles.css'; // Combined CSS

const ActionButtons = ({
    handleClear,
    handleAddCategory,
    handleDeleteCategory,
    categoryToDelete,
    setCategoryToDelete,
    categories,
}) => (
    <Box>
        <Stack spacing={2}>
            {/* Add Category Button */}
            <Button variant="contained" color="secondary" fullWidth onClick={handleAddCategory}>
                Add Category
            </Button>

            {/* Clear All Button */}
            <Button variant="contained" color="error" fullWidth onClick={handleClear}>
                Clear All
            </Button>

            {/* Dropdown for Category to Delete */}
            <FormControl fullWidth variant="outlined" className="custom-delete-category">
                <InputLabel>Select Category</InputLabel>
                <Select
                    value={categoryToDelete}
                    onChange={(e) => setCategoryToDelete(e.target.value)}
                    label="Select Category"
                >
                    {categories.map((cat, index) => (
                        <Tooltip
                            key={index}
                            title={cat === 'General' ? 'You cannot delete the General category' : ''}
                            arrow
                        >
                            <MenuItem value={cat} disabled={cat === 'General'}>
                                {cat}
                            </MenuItem>
                        </Tooltip>
                    ))}
                </Select>
            </FormControl>

            {/* Delete Selected Category Button */}
            <Button
                variant="contained"
                color="primary"
                fullWidth
                onClick={handleDeleteCategory}
                disabled={!categoryToDelete || categoryToDelete === 'General'}
            >
                Delete Selected Category
            </Button>
        </Stack>
    </Box>
);

export default ActionButtons;
