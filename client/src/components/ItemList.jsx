import React from 'react';
import { deleteItem } from '../services/itemService';
import ItemForm from './ItemForm';

const ItemList = ({ items, onItemUpdated }) => {
  const handleDelete = async (id) => {
    try {
      await deleteItem(id);
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
