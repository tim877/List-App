import React, { useRef, useEffect } from 'react';
import { TextField, Button, Box, Stack } from '@mui/material';
import '../styles/FormAndCategory.css';

// The CustomForm component contains an input field and a submit button
const CustomForm = ({ formInputValue, setInputValue, handleSubmit }) => {
    const inputRef = useRef(null); // Create a reference for the input field

    // Focus the input field when the component mounts
    useEffect(() => {
        inputRef.current.focus();
    }, []);

    return (
        <Box component="form" onSubmit={handleSubmit} className="form-container">
            {/* The Box component is used here to create a form with an onSubmit event */}
            <Stack spacing={2}>
                {/* The Stack component is used to arrange the form fields vertically with spacing */}
                <TextField
                    label="Enter your text" // Label for the input field
                    variant="outlined" 
                    size="small" 
                    value={formInputValue} // Value for the input field
                    onChange={(e) => setInputValue(e.target.value)} // Updates inputValue on change
                    fullWidth
                    className="custom-text-field"
                    inputRef={inputRef} // Attach the ref to the input field
                />
                <Button type="submit" variant="contained" color="success" fullWidth>
                    {/* Button component for submitting the form */}
                    Submit
                </Button>
            </Stack>
        </Box>
    );
};

export default CustomForm;
