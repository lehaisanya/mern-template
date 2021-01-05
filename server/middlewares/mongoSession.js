const mongoose = require("mongoose")
const config = require("config")
const expressSession = require("express-session")
const connectMongo = require("connect-mongo")(expressSession)

const SECRET = config.get("sessionSecret") || "session secret"

const mongoStore = new connectMongo({
    mongooseConnection: mongoose.connection
})

const mongoSession = expressSession({
    key: "session",
    resave: false,
    saveUninitialized: true,
    secret: SECRET,
    store: mongoStore
})

module.exports = mongoSession