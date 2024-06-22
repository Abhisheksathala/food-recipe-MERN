import express from 'express';
import { getCategory } from '../controllers/CategoryController.js';

const categoryRoute = express.Router();

categoryRoute.get('/categoryItem/:category', getCategory);

export default categoryRoute;
