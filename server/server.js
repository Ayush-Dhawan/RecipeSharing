import express from 'express';
import dotenv from "dotenv";
import dbconnect from "./db/dbconnect.js";
import cookieParser from "cookie-parser";
import authRoutes from './routes/auth.routes.js'
import recipeRoutes from './routes/recipe.routes.js'
import userRoutes from './routes/user.routes.js'
import {PORT} from './env_variables.js'

const app = express()
app.use(express.json()) 

dotenv.config();
app.use(cookieParser())

// const PORT = process.env.PORT || 5000;

app.get('/', (req, res)=>{
    res.send(`server is ready on port ${PORT}`)
})

app.use('/api/auth', authRoutes)
app.use('/api/recipe', recipeRoutes)
app.use('/api/user', userRoutes)



app.listen(PORT, ()=>{
    dbconnect();
     console.log("listening at port "+`${PORT}`)})
