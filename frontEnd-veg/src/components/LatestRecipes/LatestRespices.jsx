import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "../Card/Card";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

const LatestRecipes = () => {
  const [items, setItems] = useState([]);
  const URL = "http://localhost:4000"; // Replace with your actual URL
  console.log("Items after setting:", items);
  // Effect to fetch items when component mounts
  useEffect(() => {
    const getLatestItems = async () => {
      try {
        const response = await axios.get(`${URL}/api/v1/item/getallitems`);
        // console.log("Response data:", response.data);
        if (response.data.success) {
          setItems(response.data.items); // Update items state with fetched items
          console.log("Items after setting for the :", response.data.items); // Log items after state update
        }
      } catch (error) {
        console.error("Error fetching items:", error);
      }
    };

    getLatestItems();
  }, [URL]);

  return (
    <div className="latest__recipes">
      <div className="latest__recipes__heading text-center">
        <h1 className="text-3xl mb-8 font-semibold">Latest Recipes</h1>
      </div>
      {/* Render items here */}
      <div className="flex gap-4">
        {items.length > 0 ? (
          items.slice(0, 4).map((item) => <Card key={item._id} item={item} />)
        ) : (
          <p>No items found</p>
        )}
      </div>
      <div className="mx-auto mt-16 flex items-center justify-center">
        <Link to={"/Recipes"}>
          <Button
            variant="contained"
            color="primary"
            size="large"
            className="bg-gradient-to-r from-primary to-primary-dark hover:from-primary hover:to-primary-dark"
          >
            View More Recipes
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default LatestRecipes;
