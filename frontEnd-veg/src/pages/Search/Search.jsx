import React, { useEffect, useState } from "react";
import { IoSearchSharp } from "react-icons/io5";
import { useParams } from "react-router-dom";
import axios from "axios"; // Import axios
import Card from "../../components/Card/Card";

const Search = () => {
  const { query: urlQuery } = useParams();
  const [query, setQuery] = useState("");
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (urlQuery) {
      setQuery(urlQuery);
    }
  }, [urlQuery]);

  useEffect(() => {
    const fetchItems = async () => {
      if (!query) return;

      setLoading(true);
      setError(null); // Reset error state before new request
      try {
        const response = await axios.get(
          "http://localhost:4000/api/v1/item/itemsearch",
          {
            params: { q: query },
          }
        );
        if (response.data.success) {
          console.log(response.data);
          setRecipes(response.data.items); // Set the recipes state with the items array
        } else {
          setError(
            response.data.message || "An error occurred while fetching data"
          );
        }
      } catch (error) {
        setError(error.message || "An error occurred while fetching data");
      } finally {
        setLoading(false);
      }
    };
    fetchItems();
  }, [query]);

  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  return (
    <div className="px-6 py-10 flex flex-col items-center">
      <h1 className="text-center text-3xl py-10 font-semibold text-secondary sm:text-6xl sm:leading-relaxed">
        Search
      </h1>
      <div className="bg-white w-[70%] p-4 mt-3 rounded flex items-center justify-between">
        <IoSearchSharp className="w-5 h-5 mr-2 text-neutral-300 cursor-pointer" />
        <input
          type="search"
          name="query"
          placeholder="Search for recipes"
          className="w-[100%] font-semibold text-[#ee9292] uppercase focus:outline-none"
          value={query}
          onChange={handleInputChange}
        />
      </div>
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      <ul>
        {recipes.length > 0
          ? recipes.map((item) => (
              <li
                key={item._id}
                className="bg-white w-[70%] p-4 mt-3 rounded flex items-center justify-between"
              >
                <Card item={item} className="text-neutral-300">
                  {item.name}
                </Card>
              </li>
            ))
          : !loading && <p>No results found</p>}
      </ul>
    </div>
  );
};

export default Search;
