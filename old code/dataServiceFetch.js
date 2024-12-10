// Base URL for the server's API endpoint
const baseUrl = 'http://localhost:5001/data';

// Utility function to handle HTTP requests
const handleFetchRequest = async (url, options = {}) => {
	try {
		const response = await fetch(url, options);
		if (!response.ok) {
			throw new Error(`HTTP error! Status: ${response.status}`);
		}
		return response.json(); // Parse JSON if the response is successful
	} catch (error) {
		console.error('Error with fetch request:', error.message || error);
		throw error; // Rethrow the error for further handling
	}
};

// Function to fetch JSON data from the server
export const fetchJsonData = () => {
	return handleFetchRequest(baseUrl);
};

// Function to save or update JSON data on the server
export const saveJsonData = (newJsonData) => {
	const options = {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(newJsonData),
	};
	return handleFetchRequest(baseUrl, options)
		.then(() => console.log('Data saved successfully'))
		.catch((error) => {
			console.error('Error saving data:', error.message || error);
			throw error; // Rethrow the error for further handling
		});
};
