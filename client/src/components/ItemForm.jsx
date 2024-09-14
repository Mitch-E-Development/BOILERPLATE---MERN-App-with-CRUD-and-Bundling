import React, { useState } from 'react';
import { createItem, updateItem } from '../services/itemService';

/**
 * ItemForm component for creating or updating an item.
 * @component
 * @param {Object} props - Component properties.
 * @param {Object} [props.itemToEdit] - Optional item object to edit. If provided, the form will be pre-filled with this item's details.
 * @param {Function} props.onItemCreated - Callback function to be called after a successful create or update operation.
 * @returns {JSX.Element} The rendered ItemForm component.
 */
const ItemForm = ({ itemToEdit, onItemCreated }) => {
  /**
   * State for the item name.
   * @type {[string, Function]}
   */
  const [name, setName] = useState(itemToEdit ? itemToEdit.name : '');

  /**
   * State for the item description.
   * @type {[string, Function]}
   */
  const [description, setDescription] = useState(itemToEdit ? itemToEdit.description : '');

  /**
   * State for error messages.
   * @type {[string, Function]}
   */
  const [error, setError] = useState('');

  /**
   * Handle form submission to create or update an item.
   * @param {Object} event - The submit event object.
   * @async
   * @function
   */
  const handleSubmit = async (event) => {
    event.preventDefault();

    // Validate input fields
    if (!name || !description) {
      setError('All fields are required.');
      return;
    }

    try {
      // Perform create or update operation based on the presence of itemToEdit
      if (itemToEdit) {
        await updateItem(itemToEdit._id, { name, description });
      } else {
        await createItem({ name, description });
      }
      // Clear form fields and error message
      setName('');
      setDescription('');
      setError('');
      // Trigger callback to notify parent component
      onItemCreated();
    } catch (error) {
      // Handle error and set error message
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
