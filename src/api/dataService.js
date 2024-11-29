// dataService.js
import axios from 'axios';

const baseUrl = 'http://localhost:5001/data';

// Fetch data from the server
export const fetchData = async () => {
	try {
		const response = await axios.get(baseUrl);
		return response.data;
	} catch (error) {
		console.error('Error fetching data:', error.message || error);
		throw error;
	}
};

// Save/Update data to the server
export const saveData = async (newData) => {
	try {
		await axios.post(baseUrl, newData);
		console.log('Data saved successfully');
	} catch (error) {
		console.error('Error saving data:', error.message || error);
		throw error;
	}
};
