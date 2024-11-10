import { useState, useEffect } from "react";

function CT_SearchFilter() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredResults, setFilteredResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  // Sample list to filter
  const items = [
    "Apple",
    "Banana",
    "Orange",
    "Mango",
    "Pineapple",
    "Grapes",
    "Strawberry",
    "Blueberry"
  ];

  useEffect(() => {
    // Set a delay to simulate an API call (debounce effect)
    const delayDebounceFn = setTimeout(() => {
      if (searchTerm) {
        setIsLoading(true);

        // Simulate an API call by filtering items that include the search term
        const results = items.filter((item) =>
          item.toLowerCase().includes(searchTerm.toLowerCase())
        );

        setFilteredResults(results);
        setIsLoading(false);
      } else {
        setFilteredResults([]); // Clear results if search term is empty
      }
    }, 500); // 500ms delay

    // Cleanup function to clear the timeout if searchTerm changes before delay ends
    return () => clearTimeout(delayDebounceFn);
  }, [searchTerm]);

  return (
    <div>
      <h2>Real-Time Search Filter</h2>
      <input
        type="text"
        placeholder="Search for a fruit..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      {isLoading && <p>Loading...</p>}

      <ul>
        {filteredResults.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>

      {!isLoading && filteredResults.length === 0 && searchTerm && (
        <p>No results found for "{searchTerm}".</p>
      )}

  
    </div>
  );
}

export default CT_SearchFilter;
