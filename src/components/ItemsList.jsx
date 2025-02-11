import React, { useState, useEffect } from "react";

function ItemsList() {
  // State for storing the fetched items
  const [items, setItems] = useState([]);
  
  // State for tracking loading state
  const [loading, setLoading] = useState(true);
  
  // State for handling errors
  const [error, setError] = useState(null);

  // API endpoint
  const API_URL = "https://jsonplaceholder.typicode.com/todos";

  /**
   * Function to fetch items from the API.
   * Uses async/await for cleaner asynchronous code.
   * Throws an error if the response is not successful.
   */
  const fetchItems = async () => {
    try {
      const response = await fetch(API_URL);
      
      // Check if the response is OK (status code 200-299)
      if (!response.ok) {
        throw new Error("Failed to fetch items");
      }
      
      return await response.json();
    } catch (error) {
      throw error; // Rethrow error to be handled in useEffect
    }
  };

  /**
   * useEffect is triggered once when the component mounts ([] dependency array).
   * Calls `fetchItems` and updates state accordingly.
   */
  useEffect(() => {
    const loadItems = async () => {
      try {
        const data = await fetchItems();
        setItems(data); // Update state with fetched data
      } catch (error) {
        setError(error.message); // Store error message in state
      } finally {
        setLoading(false); // Ensure loading state is turned off
      }
    };

    loadItems();
  }, []);

  return (
    <div>
      <h2>Items List</h2>

      {/* Show loading message while fetching data */}
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        // Display error message if an error occurred
        <p style={{ color: "red" }}>{error}</p>
      ) : (
        // Display the list of items
        <ul>
          {items.map((item) => (
            <li key={item.id}>{item.title}</li> // Use unique `id` as key
          ))}
        </ul>
      )}
    </div>
  );
}

export default ItemsList;
