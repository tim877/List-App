import axios from 'axios'; // Importerar axios för att göra HTTP-förfrågningar

// Bas-URL för serverns API-endpoint
const baseUrl = 'http://localhost:5001/data';

// Funktion för att hämta data från servern
export const fetchData = async () => {
	try {
		// Gör en GET-förfrågan till servern och väntar på svaret
		const response = await axios.get(baseUrl);
		return response.data; // Returnerar data från servern
	} catch (error) {
		// Om ett fel inträffar vid hämtning av data, loggas det till konsolen och kastas vidare
		console.error('Error fetching data:', error.message || error);
		throw error; // Kastar felet vidare för att kunna hantera det i komponenten
	}
};

// Funktion för att spara eller uppdatera data på servern
export const saveData = async (newData) => {
	try {
		// Gör en POST-förfrågan för att skicka den nya datan till servern
		await axios.post(baseUrl, newData);
		console.log('Data saved successfully'); // Loggar en bekräftelse när datan är sparad
	} catch (error) {
		// Om ett fel inträffar vid sparandet av data, loggas det till konsolen och kastas vidare
		console.error('Error saving data:', error.message || error);
		throw error; // Kastar felet vidare för att kunna hantera det i komponenten
	}
};
