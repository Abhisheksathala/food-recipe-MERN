import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import CategoryWrapper from "../../components/CategoryWarpper/CategoryWarpper";
import axios from "axios";
import Card from "../../components/Card/Card";

const Categorypage = () => {
  const { category } = useParams();
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false); // Fixed capitalization
  const [error, setError] = useState(null); // Fixed typo

  const url = "http://localhost:4000";

  const fetchCategoryData = async () => {
    setLoading(true);
    try {
      const response = await axios.get(
        `${url}/api/v1/Category/categoryItem/${category}`
      ); // Fixed the URL casing
      if (response.data.success) {
        setItems(response.data.items); // Fixed to set the correct data
      } else {
        setError("Failed to fetch data");
      }
    } catch (error) {
      setError(error.message || "Error while loading data");
    } finally {
      setLoading(false); // Ensuring loading is set to false after the request completes
    }
  };

  useEffect(() => {
    fetchCategoryData(); // Fetch data on component mount
  }, [category]);

  return (
    <div className="px-6 mt-20 lg:px-12">
      <h1 className="text-center text-3xl py-10 font-semibold text-secondary sm:text-6xl capitalize leading-relaxed">
        {category}
      </h1>
      <CategoryWrapper />

      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      <div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {items.length > 0
          ? items.map((item) => <Card item={item} key={item._id} />)
          : !loading && <p>No results found</p>}
      </div>
    </div>
  );
};

export default Categorypage;
