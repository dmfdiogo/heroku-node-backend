import mongoose from 'mongoose'

const connectDB = async () => {
    try {
        await mongoose.connect('mongodb://localhost:27017/my-database')
        console.log('MongoDB - connected')
        return
    } catch (error) {
        console.error('MongoDB - connection failed')
        throw error
    }
}

export default connectDB
