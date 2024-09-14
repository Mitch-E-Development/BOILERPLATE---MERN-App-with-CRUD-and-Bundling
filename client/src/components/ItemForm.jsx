import React, { useState } from 'react';
import { createItem, updateItem } from '../services/itemService';

const ItemForm = ({ itemToEdit, onItemCreated }) => {
  const [name, setName] = useState(itemToEdit ? itemToEdit.name : '');
  const [description, setDescription] = useState(itemToEdit ? itemToEdit.description : '');
  const [error, setError] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!name || !description) {
      setError('All fields are required.');
      return;
    }

    try {
      if (itemToEdit) {
        await updateItem(itemToEdit._id, { name, description });
      } else {
        await createItem({ name, description });
      }
      setName('');
      setDescription('');
      setError('');
      onItemCreated();
    } catch (error) {
      setError('Failed to save item.');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      {error && <p className="text-red-500">{error}</p>}
      <div className="mb-2">
        <label className="block">Name:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="border p-2 w-full"
        />
      </div>
      <div className="mb-2">
        <label className="block">Description:</label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="border p-2 w-full"
        />
      </div>
      <button type="submit" className="bg-blue-500 text-white p-2 rounded">
        {itemToEdit ? 'Update Item' : 'Add Item'}
      </button>
    </form>
  );
};

export default ItemForm;
