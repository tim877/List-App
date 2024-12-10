// Imports necessary modules: express for the server, cors for handling CORS, fs/promises for file system operations, and path for file and directory management.
import express from 'express';
import cors from 'cors';
import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

// Creates a new instance of the express application.
const app = express();
const PORT = 5001; // Defines the port the server will listen on

// Enables CORS for all routes, allowing requests from different domains to be accepted
app.use(cors());

// Middleware to automatically parse incoming JSON data in requests
app.use(express.json());

// Determines the path of the current file and retrieves the directory it resides in.
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Defines the path to the data file (data.json).
const jsonFilePath = path.join(__dirname, 'data.json');

// Creates a GET route to fetch data from the server.
app.get('/data', async (req, res) => {
	try {
		// Reads the content from the data.json file and sends it as a JSON response.
		const data = await fs.readFile(jsonFilePath, 'utf8');
		res.json(JSON.parse(data));
	} catch (err) {
		// Captures and logs any errors when reading the file and sends a 500 error message to the client.
		console.error('Error reading data:', err);
		res.status(500).send('Error reading data');
	}
});

// Creates a POST route to save data to the server.
app.post('/data', async (req, res) => {
	try {
		// Retrieves data from the request body.
		const newData = req.body;
		// Writes the new data to the data.json file.
		await fs.writeFile(jsonFilePath, JSON.stringify(newData, null, 2));
		res.send('Data saved successfully');
	} catch (err) {
		// Captures and logs any errors when writing to the file and sends a 500 error message to the client.
		console.error('Error writing data:', err);
		res.status(500).send('Error writing data');
	}
});

// Starts the server and logs a message indicating the server is running.
app.listen(PORT, () => {
	console.log(`Server is running on http://localhost:${PORT}`);
});
