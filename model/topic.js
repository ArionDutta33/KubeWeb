const mongoose = require("mongoose")
mongoose.connect("mongodb://127.0.0.1:27017/docDB")
const TopicSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    body: {
        type: String,
        required: true,
    }

})

module.exports = mongoose.model("Topic", TopicSchema)