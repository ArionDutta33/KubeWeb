const express = require("express");
const app = express();
const path = require('path');
const mongoose = require('mongoose');
const ejsMate = require('ejs-mate');
const methodOverride = require("method-override")
const Topic = require("./model/topic");
const topic = require("./model/topic");
mongoose.connect("mongodb://127.0.0.1:27017/docDB").then(() => {
    console.log("db connected")
}).catch((e) => {
    console.log(`errors ${e}`)
})
//middlewares
app.engine('ejs', ejsMate)
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'))

app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'));
app.use(express.static(path.join(__dirname, 'public')))
//end midllewares

app.get("/", (req, res) => {
    res.render("index");
});
app.get("/topics", async (req, res) => {
    const topics = await Topic.find({})
    console.log(topics)
    res.render("topics/topics", { topics })
})
app.get("/register", (req, res) => {
    res.render("topics/registration")
})

app.get("/topics/:id", async (req, res) => {
    const { id } = req.params
    const topic = await Topic.findById(id)
    res.render("topics/show", { topic })

})

app.listen(3000, () => {
    console.log("server up");
});
