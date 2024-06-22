import express from "express";
import {getAllItems,getSearchItems,getSingleItem} from '../controllers/ItemController.js'
const ItemRoute = express.Router();

ItemRoute.get('/getallitems',getAllItems)
ItemRoute.get('/itemsearch',getSearchItems)
ItemRoute.get('/itemsearch/:id',getSingleItem)


ItemRoute.get("/", (req, res) => {
    res.send("Foom the ItemRoute");
});
export default ItemRoute;
