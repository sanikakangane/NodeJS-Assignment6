const express = require("express")
const app = express()

const apiRouter = require("./router/apiRouter")

app.use("/api", apiRouter)

app.listen(9000, () => {
    console.log("Server running on port 9000")
})