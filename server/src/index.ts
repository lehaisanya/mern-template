import express from 'express'
import config from 'config'

import addMiddlewares from './middlewares'
import addRoutes from './routes'
import connectDB from './db'

const PORT = config.get('port')

const app = express()

addMiddlewares(app)
addRoutes(app)

async function startServer () {
    try {
        await connectDB()
        app.listen(PORT, () => {
            console.log(`Сервер був запущений на порту ${PORT}`)
        })
    } catch (err) {
        console.log('Помилка сервера:', err)
        process.exit(1)
    }
}

startServer()