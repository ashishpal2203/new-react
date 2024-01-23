const { default: mongoose } = require("mongoose");

const userModel = new mongoose.Schema({
    name: String,
    age: String
})

export const User = mongoose.models.users || mongoose.model("users",userModel)
