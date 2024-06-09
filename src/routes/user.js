import express from 'express'
import userController from '../controllers/user.js'
import { isAuthenticated } from '../middleware/auth.js'

const {
    register,
    login,
    logout,
    updatePassword,
    forgotPassword,
    resetPassword,
    myProfile,
    updateAddress,
    deleteProfile,
} = userController

const userRouter = express.Router()

userRouter.route('/register').post(register)
userRouter.route('/login').post(login)
userRouter.route('/logout').get(isAuthenticated, logout)
userRouter.route('/update/password').put(isAuthenticated, updatePassword)
userRouter.route('/update/address').put(isAuthenticated, updateAddress)

userRouter.route('/profile').get(isAuthenticated, myProfile)

// Phone number verification routes
// router.route('/request/otp').post(isAuthenticated,requestOTPForPhone);
// router.route('/verify/otp').post(isAuthenticated,verifyOTP);

// Forgot password routes
userRouter.route('/forgot/password').post(forgotPassword)
userRouter.route('/password/reset/:token').put(resetPassword)

userRouter.route('/delete/profile').put(deleteProfile)

export default userRouter
