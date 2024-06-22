import CategoryModel from "../models/CategoryModel.js";
import ItemModel from "../models/ItemModel.js";

const getCategory = async (req, res) => {
  const { category } = req.params;  // Fixed `req.param` to `req.params`

  try {
    const foundCategory = await CategoryModel.findOne({
      name: category,
    });
    if (!foundCategory) {
      return res
        .status(404)
        .json({ message: "No category specified, Server Error" });  // Fixed error message typo
    }

    const items = await ItemModel.find({ menuId: foundCategory.menuId });
    res.status(200).json({
      success: true,
      category: foundCategory,
      items: items,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server Error" });  // Improved error message
  }
};

export { getCategory };
