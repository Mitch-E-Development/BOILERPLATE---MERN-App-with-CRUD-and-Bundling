import React, { useEffect, useState } from 'react';
import ItemForm from '../components/ItemForm';
import ItemList from '../components/ItemList';
import { getItems, searchItems } from '../services/itemService';

/**
 * HomePage component for managing and displaying items.
 * Includes functionality for fetching, searching, and updating items.
 * @component
 * @returns {JSX.Element} The rendered HomePage component.
 */
const HomePage = () => {
  /**
   * State for storing the list of items.
   * @type {[Array<Object>, Function]}
   */
  const [items, setItems] = useState([]);

  /**
   * State for storing the search query.
   * @type {[string, Function]}
   */
  const [searchQuery, setSearchQuery] = useState('');

  /**
   * Fetch items from the server when the component mounts.
   * Uses the getItems service to retrieve the list of items.
   * @async
   * @function
   */
  useEffect(() => {
    async function fetchItems() {
      try {
        const data = await getItems();
        setItems(data);
      } catch (error) {
        console.error('Failed to fetch items:', error);
      }
    }

    fetchItems();
  }, []);

  /**
   * Handle search functionality by querying items based on the search query.
   * Updates the item list with the search results.
   * @async
   * @function
   */
  const handleSearch = async () => {
    try {
      const data = await searchItems(searchQuery);
      setItems(data);
    } catch (error) {
      console.error('Failed to search items:', error);
    }
  };

  /**
   * Handle item updates by refreshing the item list.
   * Called when an item is created or updated.
   * @async
   * @function
   */
  const handleItemUpdated = async () => {
    try {
      const data = await getItems();
      setItems(data);
    } catch (error) {
      console.error('Failed to update items:', error);
    }
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Item Manager</h1>
      <div className="mb-4">
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="border p-2 mr-2"
          placeholder="Search items..."
        />
        <button
          onClick={handleSearch}
          className="bg-green-500 text-white p-2 rounded"
        >
          Search
        </button>
      </div>
      <ItemForm onItemCreated={handleItemUpdated} />
      <ItemList items={items} onItemUpdated={handleItemUpdated} />
    </div>
  );
};

export default HomePage;
