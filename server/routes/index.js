const express = require("express")
const path = require("path")

const PROD = process.env.NODE_ENV === "production"

function addProdRoutes (app) {
    const static = express.static(path.join(__dirname, "..", "..", "client", "build"))

    const singlepage = (req, res) => {
        res.sendFile(path.resolve(__dirname, "..", "..", "client", "build", "index.html"))
    }

    app.use("/", static)
    app.use("*", singlepage)
}

function addRoutes (app) {
    if (PROD) addProdRoutes(app)
}

module.exports = addRoutes