import React from 'react';
import { TextField, Button, Box } from '@mui/material';
import '../styles/CustomTextField.css'; // Import CSS from styles folder

const CustomTextField = ({ inputValue, setInputValue, handleSubmit }) => (
    <Box
        component="form"
        onSubmit={handleSubmit}
        className="custom-textfield-container"
    >
        <TextField
            label="Enter your text"
            variant="outlined"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            fullWidth
            multiline
            maxRows={4} // Limits rows for multiline input
            className="custom-textfield" // Use external styles
        />
        <Button type="submit" variant="contained" color="primary">
            Submit
        </Button>
    </Box>
);

export default CustomTextField;
