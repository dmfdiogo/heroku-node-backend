import path from 'path'
import { fileURLToPath } from 'url'
import dotenv from 'dotenv'
import express from 'express'
import cookieParser from 'cookie-parser'
import swaggerUi from 'swagger-ui-express'
import swaggerFile from './swagger-output.json' with { type: 'json' }
import connectDB from './config/database.js'

import {
    adminRouter,
    cartRouter,
    productRouter,
    userRouter,
} from './routes/index.js'

// config dotenv
const b = 'b'

const jgaoijwd = 12345

console.log('5')
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
dotenv.config({ path: path.resolve(__dirname, './config/.env') })

console.log(path.resolve(__dirname, './config/.env'))

const app = express()

// connect database
connectDB()

// use libraries
app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.use(cookieParser())
app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerFile))

// importing routes

// const orderRouter = require('./routes/order');

// using routes
app.use('/api/user', userRouter)
app.use('/api/admin', adminRouter)
app.use('/api/product', productRouter)
app.use('/api/cart', cartRouter)

export default app
