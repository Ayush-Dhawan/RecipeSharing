
import mongoose from 'mongoose'

const recipeSchema = new mongoose.Schema({
    authorID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User", //basically means this will be a user from User model (foreign key)
        required: true
    },
    dishName: {
        type: String,
        required: true
    },
    ingredients: {
        type: [String],
        required: true
    },
    recipe: {
        type: [String],
        required: true
    },
    image: {
        type: String,
        required: true
    }
}, {timestamps: true})

const Recipe = mongoose.model("Recipe", recipeSchema);

export default Recipe;