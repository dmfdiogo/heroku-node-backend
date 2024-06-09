// const Order = require("../models/Order");
import Product from '../models/Product.js'
import User from '../models/User.js'
import Review from '../models/Review.js'
import Category from '../models/Category.js'

// ------------------------------------------------------ User controller for products ------------------------------------------------------

export const getProducts = async (req, res) => {
    try {
        const products = await Product.find()

        res.status(200).json({
            message: 'Products fetched successfully',
            products,
            success: true,
        })
    } catch (error) {
        res.status(500).json({
            message: error.message,
            success: false,
        })
    }
}

export const getProductById = async (req, res) => {
    try {
        const product = await Product.findById(req.params.id)
        if (!product) {
            return res.status(404).json({
                message: 'Product not found',
                success: false,
            })
        }

        res.status(200).json({
            message: 'Product fetched successfully',
            product,
            success: true,
        })
    } catch (error) {
        res.status(500).json({
            message: error.message,
            success: false,
        })
    }
}

export const getProductsBySlug = async (req, res) => {
    try {
        const product = await Product.findOne({ slug: req.params.slug })
        if (!product) {
            return res.status(404).json({
                message: 'Product not found',
                success: false,
            })
        }

        res.status(200).json({
            message: 'Product fetched successfully',
            product,
            success: true,
        })
    } catch (error) {
        res.status(500).json({
            message: error.message,
            success: false,
        })
    }
}

export const getProductsByCategory = async (req, res) => {
    try {
        const products = await Category.find({
            category: req.params.category,
        }).populate('products')

        if (!products) {
            return res.status(404).json({
                message: 'Category not found',
                success: false,
            })
        }

        res.status(200).json({
            message: 'Products fetched successfully',
            products,
        })
    } catch (error) {
        res.status(500).json({
            message: error.message,
            success: false,
        })
    }
}

export const rateAndRevivew = async (req, res) => {
    try {
        const product = await Product.findById(req.params.id).populate(
            'reviews',
        )
        if (!product) {
            return res.status(404).json({
                message: 'Product not found',
                success: false,
            })
        }

        try {
            product.reviews.forEach((review) => {
                if (review.user.toString() === req.user._id.toString()) {
                    throw new Error()
                }
            })
        } catch (error) {
            return res.status(400).json({
                message: 'You have already reviewed this product',
                success: false,
            })
        }

        const reviewData = {
            user: req.user._id,
            product: req.params.id,
            stars: req.body.stars,
            review: req.body.review,
        }

        const review = await Review.create(reviewData)

        product.reviews.push(review)
        product.totalRating = product.totalRating + req.body.stars
        product.averageRating = product.totalRating / product.reviews.length
        await product.save()

        req.user.myReviews.push(review)
        await req.user.save()

        res.status(200).json({
            message: 'Product rated successfully',
            success: true,
        })
    } catch (error) {
        res.status(500).json({
            message: error.message,
            success: false,
        })
    }
}

export const searchProduct = async (req, res) => {
    try {
        const products = await Product.find({
            name: { $regex: req.params.name, $options: 'i' },
        })

        res.status(200).json({
            message: 'Products fetched successfully',
            products,
            success: true,
        })
    } catch (error) {
        res.status(500).json({
            message: error.message,
            success: false,
        })
    }
}

// To be completed later
export const getProductByRecentBrowse = async (req, res) => {
    try {
        const products = await Product.find({
            category,
        })
    } catch (error) {
        res.status(500).json({
            message: error.message,
            success: false,
        })
    }
}

export const addOrRemoveProductToWhishlist = async (req, res) => {
    try {
        const product = await Product.findById(req.params.id)

        if (req.user.myWishlist.includes(product._id)) {
            req.user.myWishlist.pull(product)
            req.user.save()
            return res.status(200).json({
                message: 'Product removed from wishlist successfully',
                success: true,
            })
        } else {
            req.user.myWishlist.push(product)
            req.user.save()
            return res.status(200).json({
                message: 'Product added to wishlist successfully',
                success: true,
            })
        }
    } catch (error) {
        res.status(500).json({
            message: error.message,
            success: false,
        })
    }
}

// To be completed later for payment
export const buyProduct = async (req, res) => {
    try {
        const productId = req.params.id
        const { quantity, color } = req.body

        const user = await User.findById(req.user._id)
        console.log(user)

        // To be handled later by frontend
        // if(user.address.length === 0){
        //     return res.redirect('/user/update/address');
        // }

        res.redirect(`/buy/`)
    } catch (error) {
        res.status(500).json({
            message: error.message,
            success: false,
        })
    }
}

const productController = {
    addOrRemoveProductToWhishlist,
    buyProduct,
    getProductById,
    getProductByRecentBrowse,
    getProducts,
    getProductsByCategory,
    getProductsBySlug,
    rateAndRevivew,
    searchProduct,
}

export default productController
