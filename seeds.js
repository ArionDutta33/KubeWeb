const mongoose = require("mongoose")
const Topic = require("./model/topic")
mongoose.connect("mongodb://127.0.0.1:27017/docDB").then(() => {
    console.log("db connected")
}).catch((e) => {
    console.log(`errors ${e}`)
})

const inject = async () => {
    const createdTopic = await Topic.create({
        title: "This is an introductory note to cloud computing",
        body: "Cloud computing is an important field in computer science and engineering. In today's time there is a significant high demand for cloud engineers. Cloud engineers are also paid very well and it is one of the top careers in the world"
    })
    await createdTopic.save()
}

for (let i = 0; i < 10; i++) {
    inject()
}