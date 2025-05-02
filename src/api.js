// src/api.js
export const fetchData = async () => {
  try {
    const response = await fetch("http://localhost:5000/pets"); // <-- your own API
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
export const fetchData = async (endpoint) => {
  try {
    const response = await fetch(`http://localhost:5000/api/${endpoint}`);
    console.log(response);  // Log the response object
    if (!response.ok) {
      throw new Error('Failed to fetch data');
    }
    const data = await response.json();
    console.log(data);  // Log the fetched data
    return data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;  // Re-throw error so it can be caught in the component
  }
};

};

  
