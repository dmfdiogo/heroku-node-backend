import express from 'express';
const cartRouter = express.Router();

import { isAuthenticated, isAdmin } from '../middleware/auth.js'

import cartController from '../controllers/cart.js';

const { addToCart, removeOneFromCart, emptyCart } = cartController

cartRouter.route('/add/:id').post(isAuthenticated, addToCart);

cartRouter.route('/remove/:id').post(isAuthenticated, removeOneFromCart);

cartRouter.route('/empty').post(isAuthenticated, emptyCart);

export default cartRouter