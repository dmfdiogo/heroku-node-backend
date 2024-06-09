import express from 'express';
const adminRouter = express.Router();

import { isAuthenticated, isAdmin } from '../middleware/auth.js';

import adminController from '../controllers/admin.js';

const { addCategory, addProduct, updateProduct } = adminController

adminRouter.route('/add/product').post(isAuthenticated, isAdmin, addProduct);
adminRouter.route('/update/product/:id').put(isAuthenticated, isAdmin, updateProduct);

adminRouter.route('/add/category').post(isAuthenticated, isAdmin, addCategory);

export default adminRouter