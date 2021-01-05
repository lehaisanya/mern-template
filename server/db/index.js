const config = require("config")
const mongoose = require("mongoose")

const DEV = process.env.NODE_ENV !== "production"
const MONGO_URI = config.get("mongoUri")

const mongoConfig = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
}

async function connectDB () {
    await mongoose.connect(MONGO_URI, mongoConfig)
    mongoose.connection.on("error", (err) => {
        console.log("Ошибка MongoDB:", err)
        if (DEV) mongoose.set("debug", true)
    })
}

module.exports = connectDB