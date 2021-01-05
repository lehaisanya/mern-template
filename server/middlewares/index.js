const express = require("express")
const cookieParser = require("cookie-parser")()
const logger = require("./logger")
const apiKey = require("./apiKey")
const mongoSession = require("./mongoSession")

const DEV = process.env.NODE_ENV !== "production"

const json = express.json({ extended: true })

function addMiddlewares (app) {
    app.use(json)
    app.use(cookieParser)
    app.use(mongoSession)

    if (DEV) app.use(logger)
    if (!DEV) app.use(apiKey)
}

module.exports = addMiddlewares