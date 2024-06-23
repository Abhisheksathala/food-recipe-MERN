import React, { useEffect, useState } from "react";
import { IoSearchSharp } from "react-icons/io5";
import { useParams } from "react-router-dom";
import axios from "axios";
import { motion } from "framer-motion";
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
      setError(null);
      try {
        const response = await axios.get(
          "http://localhost:4000/api/v1/item/itemsearch",
          {
            params: { q: query },
          }
        );
        if (response.data.success) {
          setRecipes(response.data.items);
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
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="px-6 py-10 flex flex-col items-center"
    >
      <h1 className="text-center text-3xl py-10 font-semibold text-secondary sm:text-6xl sm:leading-relaxed">
        Search
      </h1>
      <div className="bg-white w-full max-w-[600px] p-4 mt-3 rounded flex items-center justify-between shadow-lg">
        <IoSearchSharp className="w-5 h-5 mr-2 text-neutral-300 cursor-pointer" />
        <input
          type="search"
          name="query"
          placeholder="Search for recipes"
          className="w-full px-3 py-2 font-semibold text-[#ee9292] uppercase focus:outline-none"
          value={query}
          onChange={handleInputChange}
        />
      </div>
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      <ul className="w-full max-w-[300px] mt-4 space-y-4 flex items-center justify-center gap-3
      ">
  {recipes.length > 0 ? (
    recipes.map((item) => (
      <motion.li
        key={item._id}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-white rounded shadow-md p-4 w-full"
      >
        <Card item={item} />
      </motion.li>
    ))
  ) : !loading ? (
    <motion.li
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white rounded shadow-md p-4 w-full"
    >
      No results found
    </motion.li>
  ) : null}
</ul>

    </motion.div>
  );
};

export default Search;
