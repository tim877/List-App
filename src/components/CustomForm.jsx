import React from 'react';
import { TextField, Button, Box, Stack } from '@mui/material';
import '../styles/FormAndCategoryStyles.css';

// CustomForm-komponenten som innehåller ett inmatningsfält och en submit-knapp
const CustomForm = ({ inputValue, setInputValue, handleSubmit }) => (
    <Box component="form" onSubmit={handleSubmit} className="form-container">
        {/* Box-komponenten används här för att skapa ett formulär med onSubmit-händelse */}
        <Stack spacing={2}>
            {/* Stack-komponenten används för att arrangera formfälten vertikalt med ett avstånd */}
            <TextField
                label="Enter your text" // Label för inmatningsfältet
                variant="outlined" 
                size="small" 
                value={inputValue} // Värdet för inmatningsfältet
                onChange={(e) => setInputValue(e.target.value)} // Uppdaterar inputValue vid ändring
                fullWidth
                className="custom-text-field"
            />
            <Button type="submit" variant="contained" color="success" fullWidth>
                {/* Button-komponenten för att skicka in formuläret */}
                Submit
            </Button>
        </Stack>
    </Box>
);

export default CustomForm;
