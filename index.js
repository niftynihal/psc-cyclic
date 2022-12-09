

const express = require("express")
require("dotenv").config()
const app = express();

app.get("/", (req, res) => {
    res.send("hello")
})

app.get("/name", (req, res) => {
    res.send(`The name is ${process.env.NAME}`)
})

app.listen(9000, () => {
    console.log("listening on port ")
})