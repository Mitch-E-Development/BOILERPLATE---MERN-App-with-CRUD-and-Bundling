import axios from 'axios';

// Access the environment variable to get the base API URL
const API_URL = `${process.env.BASE_URL}/items`;

/**
 * Get all items from the server.
 * @async
 * @function
 * @returns {Promise<Array<Object>>} A promise that resolves to an array of items.
 */
export const getItems = async () => {
    const response = await axios.get(API_URL);
    return response.data;
};

/**
 * Search for items based on a query.
 * @async
 * @function
 * @param {string} query - The search query to filter items.
 * @returns {Promise<Array<Object>>} A promise that resolves to an array of matching items.
 */
export const searchItems = async (query) => {
    const response = await axios.get(`${API_URL}/search`, { params: { query } });
    return response.data;
};

/**
 * Create a new item on the server.
 * @async
 * @function
 * @param {Object} item - The item data to create.
 * @returns {Promise<Object>} A promise that resolves to the created item.
 */
export const createItem = async (item) => {
    const response = await axios.post(API_URL, item);
    return response.data;
};

/**
 * Update an existing item on the server.
 * @async
 * @function
 * @param {string} id - The ID of the item to update.
 * @param {Object} item - The updated item data.
 * @returns {Promise<Object>} A promise that resolves to the updated item.
 */
export const updateItem = async (id, item) => {
    const response = await axios.put(`${API_URL}/${id}`, item);
    return response.data;
};

/**
 * Delete an item from the server.
 * @async
 * @function
 * @param {string} id - The ID of the item to delete.
 * @returns {Promise<Object>} A promise that resolves to a confirmation of deletion.
 */
export const deleteItem = async (id) => {
    const response = await axios.delete(`${API_URL}/${id}`);
    return response.data;
};
