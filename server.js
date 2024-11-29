import express from 'express';
import cors from 'cors'; // Import cors
import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const app = express();
const PORT = 5001;

// Enable CORS for all routes
app.use(cors());

// Resolve __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Path to the data.json file
const jsonFilePath = path.join(__dirname, 'data.json');

// Middleware to parse JSON
app.use(express.json());

// Endpoint to fetch data
app.get('/data', async (req, res) => {
    try {
        const data = await fs.readFile(jsonFilePath, 'utf8');
        res.json(JSON.parse(data)); // Send JSON data
    } catch (err) {
        console.error('Error reading data:', err);
        res.status(500).send('Error reading data');
    }
});

// Endpoint to save data
app.post('/data', async (req, res) => {
    try {
        const newData = req.body;
        await fs.writeFile(jsonFilePath, JSON.stringify(newData, null, 2));
        res.send('Data saved successfully');
    } catch (err) {
        console.error('Error writing data:', err);
        res.status(500).send('Error writing data');
    }
});

// Start server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
