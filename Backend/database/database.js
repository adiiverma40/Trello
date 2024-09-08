import mongoose from "mongoose";
import { configDotenv } from "dotenv";
   

export const connectDB =async () =>{
    configDotenv() 
    const db_uri = process.env.DB_URI
    return await mongoose.connect(`${db_uri}/Trello`)
}