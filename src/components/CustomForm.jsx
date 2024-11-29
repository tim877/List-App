import React from 'react';
import { TextField, Button, Box, Stack } from '@mui/material';
import '../styles/FormAndCategoryStyles.css';

const CustomForm = ({ inputValue, setInputValue, handleSubmit }) => (
    <Box component="form" onSubmit={handleSubmit} className="form-container">
        <Stack spacing={2}>
            <TextField
                label="Enter your text"
                variant="outlined"
                size="small"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                fullWidth
                className="custom-text-field"
            />
            <Button type="submit" variant="contained" color="success" fullWidth>
                Submit
            </Button>
        </Stack>
    </Box>
);

export default CustomForm;
