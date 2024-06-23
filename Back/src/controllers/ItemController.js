import ItemModel from "../models/ItemModel.js";

const getAllItems = async (req, res) => {
  try {
    const items = await ItemModel.find({});

    // Check if items array is empty
    if (items.length === 0) {
      return res.status(404).json({ error: "No items found" });
    }
    console.log("====================================");
    console.log(items);
    console.log("====================================");

    // If items found, return them
    return res.status(200).json({
      items: items,
      message: "Items retrieved successfully",
    });
  } catch (error) {
    // Handle database errors or other unexpected erraors
    console.error("Error in getAllItems:", error);
    return res.status(500).json({ error: "Internal server error at getitmes" });
  }
};

const getSearchItems = async (req, res) => {
  try {
    let items = [];

    const { q } = req.query;

    if (q && typeof q === "string") {
      items = await ItemModel.find({
        name: { $regex: q, $options: "i" },
      });
    }

    return res.status(200).json({
      success: true, // Include a success flag
      items: items,
      message: `Items retrieved successfully`,
    });
  } catch (error) {
    console.error("Error in getSearchItems:", error.message);
    return res.status(500).json({
      success: false,
      error: "Internal server error at getSearchItems",
    });
  }
};

const getSingleItem = async (req, res) => {
  const { id } = req.params;

  try {
    const item = await ItemModel.findById(id);

    if (!item) {
      return res.status(404).json({ success: false, error: "Item not found" });
    }

    return res.status(200).json({
      success: true,
      item: item,
      message: `Item retrieved successfully`,
    });
  } catch (error) {}
};

export { getAllItems, getSearchItems, getSingleItem };
