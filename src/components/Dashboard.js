import React, { useState, useEffect } from "react";
import { initializeApp } from "firebase/app";
import { getDatabase, ref, push, set, onValue } from "firebase/database";
import firebaseConfig from "./connection_db";
import { FaEdit, FaTrash, FaSave, FaTimes } from "react-icons/fa";
import Navbar from "./Navbar";

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

const Dashboard = () => {
  const [inventory, setInventory] = useState([]);
  const [newItem, setNewItem] = useState({ name: "", category: "", quantity: "" });
  const [editingId, setEditingId] = useState(null);
  const [filters, setFilters] = useState({ name: "", category: "" });
  const [showAddForm, setShowAddForm] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const email = localStorage.getItem("email");
  const userPath = email ? email.replace(/\./g, ",") : null;

  useEffect(() => {
    if (!userPath) {
      console.error("User path is invalid or not set. Please log in.");
      return;
    }

    const inventoryRef = ref(database, `inventory/${userPath}/tasks`);
    onValue(inventoryRef, (snapshot) => {
      const data = snapshot.val();
      if (!data || typeof data !== "object") {
        console.error("Invalid Firebase data structure:", data);
        setInventory([]); // Fallback to an empty list if data is invalid
        return;
      }

      const items = Object.keys(data).map((key) => {
        const item = data[key];
        if (typeof item !== "object" || !item) {
          console.warn("Skipping invalid item:", item);
          return null;
        }
        return { id: key, ...item };
      }).filter(Boolean);

      setInventory(items);
    });
  }, [userPath]);

  const addItem = () => {
    if (!userPath) return;

    const newItemRef = push(ref(database, `inventory/${userPath}/tasks`));
    set(newItemRef, { ...newItem, quantity: parseInt(newItem.quantity, 10) || 0 })
      .then(() => {
        setNewItem({ name: "", category: "", quantity: "" });
        setShowAddForm(false);
      })
      .catch((error) => console.error("Error adding item:", error));
  };

  const updateItem = (id, updates) => {
    if (!userPath) return;

    const itemRef = ref(database, `inventory/${userPath}/tasks/${id}`);
    set(itemRef, updates)
      .then(() => setEditingId(null))
      .catch((error) => console.error("Error updating item:", error));
  };

  const deleteItem = (id) => {
    if (!userPath) return;

    const itemRef = ref(database, `inventory/${userPath}/tasks/${id}`);
    set(itemRef, null).catch((error) => console.error("Error deleting item:", error));
  };

  const handleEdit = (id) => {
    setEditingId(id);
  };

  const handleSave = (id, updatedItem) => {
    updateItem(id, updatedItem);
  };

  const handleChange = (e, field, id) => {
    setInventory(
      inventory.map((item) =>
        item.id === id ? { ...item, [field]: e.target.value } : item
      )
    );
  };

  const filteredInventory = inventory.filter((item) => {
    const nameMatch = filters.name ? item.name.toLowerCase().includes(filters.name.toLowerCase()) : true;
    const categoryMatch = filters.category
      ? item.category.toLowerCase().includes(filters.category.toLowerCase())
      : true;
    return nameMatch && categoryMatch;
  });

  const handlePrevPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const handleNextPage = () => {
    const totalPages = Math.ceil(filteredInventory.length / itemsPerPage);
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const pageItems = filteredInventory.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div className="p-4 min-h-screen relative">
      <div
        className="absolute top-0 left-0 w-full h-full bg-cover bg-center opacity-40"
        style={{
          backgroundImage: "url('/assets/logo.svg')",
          backgroundSize: "80%",
          backgroundRepeat: "no-repeat",
        }}
      ></div>

      <div className="relative bg-white bg-opacity-60 p-4 rounded-lg z-10">
        <Navbar filters={filters} setFilters={setFilters} />

        <div className="flex items-center justify-between mb-4 mt-4">
          <div className="flex space-x-2">
            <button
              onClick={handlePrevPage}
              className="px-2.5 py-1 mx-1 text-lg font-bold rounded bg-gray-600 text-white shadow-lg active:scale-95"
            >
              &lt;
            </button>
            <span className="text-sm font-bold opacity-60">
              Page {currentPage} of {Math.ceil(filteredInventory.length / itemsPerPage)}
            </span>
            <button
              onClick={handleNextPage}
              className="px-2.5 py-1 mx-1 text-lg font-bold rounded bg-gray-600 text-white shadow-lg active:scale-95"
            >
              &gt;
            </button>
          </div>
          <button
            onClick={() => setShowAddForm(!showAddForm)}
            className="px-3 py-2 mx-1 text-sm rounded bg-green-500 text-white shadow-lg active:scale-95"
          >
            + Add Item
          </button>
        </div>

        {showAddForm && (
          <div className="mb-4 flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2">
            <input
              type="text"
              placeholder="Item Name"
              value={newItem.name}
              onChange={(e) => setNewItem({ ...newItem, name: e.target.value })}
              className="px-2 py-1 border border-gray-400 rounded flex-1"
            />
            <input
              type="text"
              placeholder="Category"
              value={newItem.category}
              onChange={(e) => setNewItem({ ...newItem, category: e.target.value })}
              className="px-2 py-1 border border-gray-400 rounded flex-1"
            />
            <input
              type="number"
              placeholder="Quantity"
              value={newItem.quantity}
              onChange={(e) => setNewItem({ ...newItem, quantity: e.target.value })}
              className="px-2 py-1 border border-gray-400 rounded flex-1"
            />
            <div className="flex space-x-2">
              <button
                onClick={addItem}
                className="px-3 py-2 mx-1 text-sm rounded bg-green-500 text-white shadow-lg active:scale-85"
              >
                Save
              </button>
              <button
                onClick={() => setShowAddForm(false)}
                className="px-3 py-2 mx-1 text-sm rounded bg-gray-500 text-white shadow-lg active:scale-95"
              >
                Cancel
              </button>
            </div>
          </div>
        )}

        <table className="w-full border-collapse border shadow-lg">
          <thead>
            <tr>
              <th className="px-2 py-1 text-left text-gray-700">Name</th>
              <th className="px-2 py-1 text-left text-gray-700">Category</th>
              <th className="px-2 py-1 text-left text-gray-700">Quantity</th>
              <th className="px-2 py-1 text-left text-gray-700 w-28">Actions</th>
            </tr>
          </thead>
          <tbody>
            {pageItems.map((item) => (
              <tr
                key={item.id}
                className={`border-b ${item.quantity < 10 ? "bg-gray-200" : ""}`}
              >
                <td className="px-2 py-1">
                  {editingId === item.id ? (
                    <input
                      type="text"
                      value={item.name}
                      onChange={(e) => handleChange(e, "name", item.id)}
                      className="px-2 py-1 border border-gray-400 rounded"
                    />
                  ) : (
                    item.name
                  )}
                </td>
                <td className="px-2 py-1">
                  {editingId === item.id ? (
                    <input
                      type="text"
                      value={item.category}
                      onChange={(e) => handleChange(e, "category", item.id)}
                      className="px-2 py-1 border border-gray-400 rounded"
                    />
                  ) : (
                    item.category
                  )}
                </td>
                <td className="px-2 py-1">
                  {editingId === item.id ? (
                    <input
                      type="number"
                      value={item.quantity}
                      onChange={(e) => handleChange(e, "quantity", item.id)}
                      className="px-2 py-1 border border-gray-400 rounded"
                    />
                  ) : (
                    item.quantity
                  )}
                </td>
                <td className="px-2 py-1 flex space-x-2">
                  {editingId === item.id ? (
                    <>
                      <button
                        onClick={() => handleSave(item.id, item)}
                        className="text-gray-600 hover:text-green-500 active:scale-90"
                      >
                        <FaSave />
                      </button>
                      <button
                        onClick={() => setEditingId(null)}
                        className="text-gray-600 hover:text-red-500 active:scale-90"
                      >
                        <FaTimes />
                      </button>
                    </>
                  ) : (
                    <>
                      <button
                        onClick={() => handleEdit(item.id)}
                        className="text-gray-600 hover:text-green-500 active:scale-90"
                      >
                        <FaEdit />
                      </button>
                      <button
                        onClick={() => deleteItem(item.id)}
                        className="text-gray-600 hover:text-red-500 active:scale-90"
                      >
                        <FaTrash />
                      </button>
                    </>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Dashboard;
