const mongoose = require("mongoose")
const userSchema = mongoose.Schema({
    username:
    {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    posts: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Topic"
    }]
})
module.exports = mongoose.model("User", userSchema)