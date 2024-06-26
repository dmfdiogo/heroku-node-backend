import mongoose from 'mongoose'
import bcrypt from 'bcrypt'

const otpSchema = mongoose.Schema({
    number: {
        type: Number,
        required: true,
    },
    otp: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
        index: { expires: 300 },
    },
})

otpSchema.pre('save', async function (next) {
    const salt = await bcrypt.genSalt(10)
    this.otp = await bcrypt.hash(this.otp, salt)
    next()
})

const Otp = mongoose.model('Otp', otpSchema)

export default Otp
