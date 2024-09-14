import axios from 'axios';

// Access the environment variable
const API_URL = `${process.env.BASE_URL}/items`;

// Get all items
export const getItems = async () => {
    const response = await axios.get(API_URL);
    return response.data;
};

// Search items
export const searchItems = async (query) => {
    const response = await axios.get(`${API_URL}/search`, { params: { query } });
    return response.data;
};

// Create a new item
export const createItem = async (item) => {
    const response = await axios.post(API_URL, item);
    return response.data;
};

// Update an item
export const updateItem = async (id, item) => {
    const response = await axios.put(`${API_URL}/${id}`, item);
    return response.data;
};

// Delete an item
export const deleteItem = async (id) => {
    const response = await axios.delete(`${API_URL}/${id}`);
    return response.data;
};
