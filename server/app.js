const express = require("express")
const config = require("config")
const addMiddlewares = require("./middlewares")
const addRoutes = require("./routes")
const connectDB = require("./db")

const PORT = config.get("port") || 5000

const app = express()

addMiddlewares(app)
addRoutes(app)

async function start () {
    try {
        await connectDB()
        app.listen(PORT, () => {
            console.log(`Приложение было запущено на порту ${PORT}`)
        })
    } catch (err) {
        console.log("Ошибка сервера:", err.message)
        process.exit(1)
    }
}

start()