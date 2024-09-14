import React, { useEffect, useState } from 'react';
import ItemForm from '../components/ItemForm';
import ItemList from '../components/ItemList';
import { getItems, searchItems } from '../services/itemService';

const HomePage = () => {
  const [items, setItems] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

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

  const handleSearch = async () => {
    try {
      const data = await searchItems(searchQuery);
      setItems(data);
    } catch (error) {
      console.error('Failed to search items:', error);
    }
  };

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
