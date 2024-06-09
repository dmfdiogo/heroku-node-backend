import mongoose from 'mongoose'

const connectDB = async (URI) => {
    try {
        await mongoose.connect(URI)
        console.log('MongoDB - connected')
        return
    } catch (error) {
        console.error('MongoDB - connection failed')
        throw error
    }
}

export default connectDB
