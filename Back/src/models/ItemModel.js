import mongoose from "mongoose";

const ingridientSChema = mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
    minlength: [3, "Name must be at least 3 characters long"],
  },
  quantity: {
    type: Number,
    required: true,
  },
  unit: {
    type: String,
    required: true,
  },
});

const commentSChema = mongoose.Schema({
  user: {
    type: String,
    required: true,
  },
  comment: {
    type: String,
  },
});

const moreSchema = mongoose.Schema({
  prep_time: {
    type: String,
    required: true,
  },
  cook_time: {
    type: String,
    required: true,
  },
  servings: {
    type: Number,
    required: true,
  },
  difficulty: {
    type: String,
    required: true,
  },
  source: {
    type: String,
    required: true,
  },
});

// Define the item schema
const itemSchema = new mongoose.Schema(
  {
    menuId: {
      type: Number,
      required: true,
      unique: true,
    },
    name: {
      type: String,
      required: [true, "Name is required"],
      trim: true,
      minlength: [3, "Name must be at least 3 characters long"],
    },
    thumbnail_image: {
      type: String,
      required: [true, "Thumbnail image is required"],
      validate: {
        validator: function (v) {
          return /\.(jpg|jpeg|png|gif)$/i.test(v);
        },
        message: "Thumbnail image must be a valid image URL",
      },
    },
    category: {
      type: String,
      required: [true, "Category is required"],
    },
    instructions: {
      type: String,
      required: [true, "Instructions are required"],
      trim: true,
      minlength: [10, "Instructions must be at least 10 characters long"],
    },
    tags: {
      type: [String],
      validate: {
        validator: function (v) {
          return v.length > 0;
        },
        message: "At least one tag is required",
      },
    },
    ingredients: {
      type: [ingridientSChema],
      required: [true, "ingridientS are required"],
    },
    comments: {
      type: [commentSChema],
    },
    more: {
      type: [moreSchema],
      required: [true, "More is required"],
    },
  },
  {
    timestamps: true,
  }
);

// Create and export the Item model
const ItemModel = mongoose.model("item", itemSchema);
export default ItemModel;
