// Importerar nödvändiga moduler: express för servern, cors för att hantera CORS, fs/promises för att arbeta med filsystemet, och path för fil- och kataloghantering.
import express from 'express';
import cors from 'cors';
import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

// Skapar en ny instans av express-applikationen.
const app = express();
const PORT = 5001; // Definierar porten servern ska lyssna på

// Aktiverar CORS för alla rutter, vilket gör att förfrågningar från olika domäner kan accepteras
app.use(cors());

// Middleware för att automatiskt parsa inkommande JSON-data i förfrågningar
app.use(express.json());

// Bestämmer sökvägen till den aktuella filen och hämtar mappen där den finns.
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Definierar sökvägen till datafilen (data.json).
const jsonFilePath = path.join(__dirname, 'data.json');

// Skapar en GET-rutt för att hämta data från servern.
app.get('/data', async (req, res) => {
	try {
		// Läser innehållet från data.json-filen och skickar det som JSON-svar.
		const data = await fs.readFile(jsonFilePath, 'utf8');
		res.json(JSON.parse(data));
	} catch (err) {
		// Fångar och loggar eventuella fel vid läsning av filen och skickar ett 500-felmeddelande till klienten.
		console.error('Error reading data:', err);
		res.status(500).send('Error reading data');
	}
});

// Skapar en POST-rutt för att spara data till servern.
app.post('/data', async (req, res) => {
	try {
		// Hämtar data från requestens body.
		const newData = req.body;
		// Skriver den nya datan till data.json-filen.
		await fs.writeFile(jsonFilePath, JSON.stringify(newData, null, 2));
		res.send('Data saved successfully');
	} catch (err) {
		// Fångar och loggar eventuella fel vid skrivning till filen och skickar ett 500-felmeddelande till klienten.
		console.error('Error writing data:', err);
		res.status(500).send('Error writing data');
	}
});

// Startar servern och skriver ut ett meddelande om att servern är igång.
app.listen(PORT, () => {
	console.log(`Server is running on http://localhost:${PORT}`);
});
