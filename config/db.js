import mongoose from "mongoose";
import colors from 'colors'


const connectDb = async ()=> {
    try {
        const conn = await mongoose.connect(process.env.MONGO)
         console.log(`Connected to MONGO ${conn.connection.host}`.bgMagenta.white);   
    } catch (error) {
        console.log(`Error   ${error}`.bgRed.white);
    }
}

export default connectDb