const express = require("express")
const app = express()

function logger(req, res, next) {
    const date = new Date().toLocaleString()
    console.log(req.method, req.url, date)
    next()
}

app.use(logger)

app.get("/", (req, res) => {
    res.send("Welcome to Home Page")
})

app.get("/about", (req, res) => {
    res.send("About Us")
})

app.get("/contact", (req, res) => {
    res.send("Contact Information")
})

app.listen(3300, () => {
    console.log("Server running on port 3300...")
})