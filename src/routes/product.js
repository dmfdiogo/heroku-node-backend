import express from 'express';
import { isAdmin, isAuthenticated } from '../middleware/auth.js'

const productRouter = express.Router();

import productController from '../controllers/product.js';

const {
getProducts,
getProductById,
getProductsBySlug,
getProductsByCategory,
searchProduct,
addOrRemoveProductToWhishlist,
buyProduct,
rateAndRevivew
} = productController

productRouter.route('/all').get(getProducts);

productRouter.route('/:id/:slug').get(getProductById);

productRouter.route('/:slug').get(getProductsBySlug);

productRouter.route('/category/:category').get(getProductsByCategory);

productRouter.route('/search/:name').get(searchProduct);

productRouter.route('/towhishlist/:id').put(isAuthenticated, addOrRemoveProductToWhishlist);

productRouter.route('/rate/:id').post(isAuthenticated, rateAndRevivew);

productRouter.route('/buy/:id').post(isAuthenticated, buyProduct);

export default productRouter