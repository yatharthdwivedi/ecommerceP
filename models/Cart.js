import mongoose from "mongoose";

const cartSchema = new mongoose.Schema({
    products:{
        type:mongoose.ObjectId,
        ref:'Products',
        required:true
    },
    quantity:{
        type:Number,
        default:1
    },
    price:{
        type:Number,
        required:true
    },
    user:{
        type:mongoose.ObjectId,
        ref:'users'
    }
})

export default mongoose.model('Cart', cartSchema)