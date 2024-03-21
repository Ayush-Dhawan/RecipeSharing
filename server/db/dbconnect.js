import { mongoose } from "mongoose";
import { MONGO_DB_URL } from "../env_variables.js";

export default async function dbconnect(){
    try {
        await mongoose.connect(MONGO_DB_URL);
        console.log("db connected succesfully!!!");
    } catch (error) {
        console.log("error connecting to mongodb", error);
    }
}