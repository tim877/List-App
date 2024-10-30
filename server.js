import express from 'express';
import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const app = express();
const PORT = 5001;
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const jsonFilePath = path.join(__dirname, 'data.json');

// Middleware to parse JSON and serve static files
app.use(express.json());
app.use(express.static('dist'));

// Endpoint for fetching data
app.get('/data', async (req, res) => {
    try {
        const data = await fs.readFile(jsonFilePath, 'utf8');
        res.send(JSON.parse(data));
    } catch (err) {
        console.error('Error reading data:', err);
        res.status(500).send('Error reading data');
    }
});

// Endpoint for saving/updating data
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

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
