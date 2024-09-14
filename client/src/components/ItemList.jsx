import React from 'react';
import { deleteItem } from '../services/itemService';
import ItemForm from './ItemForm';

/**
 * ItemList component for displaying a list of items and providing options to delete or edit them.
 * @component
 * @param {Object} props - Component properties.
 * @param {Array<Object>} props.items - Array of item objects to display in the list.
 * @param {Function} props.onItemUpdated - Callback function to be called after an item is updated or deleted.
 * @returns {JSX.Element} The rendered ItemList component.
 */
const ItemList = ({ items, onItemUpdated }) => {
  /**
   * Handle item deletion by calling the deleteItem service and updating the item list.
   * @param {string} id - The ID of the item to delete.
   * @async
   * @function
   */
  const handleDelete = async (id) => {
    try {
      await deleteItem(id);
      // Notify parent component that an item has been updated (deleted)
      onItemUpdated();
    } catch (error) {
      console.error('Failed to delete item:', error);
    }
  };

  return (
    <div>
      {items.length === 0 ? (
        <p>No items available.</p>
      ) : (
        <ul>
          {items.map((item) => (
            <li key={item._id} className="border p-2 mb-2">
              <h2 className="text-lg font-semibold">{item.name}</h2>
              <p>{item.description}</p>
              <button
                onClick={() => handleDelete(item._id)}
                className="bg-red-500 text-white p-2 rounded"
              >
                Delete
              </button>
              <ItemForm
                itemToEdit={item}
                onItemCreated={onItemUpdated}
              />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ItemList;
