import axios from 'axios'; // Importing axios for making HTTP requests

// Base URL for the server's API endpoint
const baseUrl = 'http://localhost:5001/data';

// Function to fetch data from the server
export const fetchData = async () => {
	try {
		// Making a GET request to the server and awaiting the response
		const response = await axios.get(baseUrl);
		return response.data; // Returning data from the server
	} catch (error) {
		// If an error occurs while fetching data, log it to the console and rethrow it
		console.error('Error fetching data:', error.message || error);
		throw error; // Rethrow the error to handle it in the component
	}
};

// Function to save or update data on the server
export const saveData = async (newData) => {
	try {
		// Making a POST request to send the new data to the server
		await axios.post(baseUrl, newData);
		console.log('Data saved successfully'); // Logging confirmation when data is saved
	} catch (error) {
		// If an error occurs while saving data, log it to the console and rethrow it
		console.error('Error saving data:', error.message || error);
		throw error; // Rethrow the error to handle it in the component
	}
};
