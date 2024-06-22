import mongoose from "mongoose";

const categorySChema = mongoose.Schema(
  {
    name: {
      type: String,
    },
    menuId: {
      type: Number,
    },
  },
  {
    timestamps: true,
  }
);

const categoryModel = mongoose.model("category", categorySChema);

export default categoryModel;
