import path from 'path'
import { Express, static as expressStatic } from 'express'

const PROD = process.env.NODE_ENV === 'production'

const addReactRoutes = (app: Express) => {
    if (!PROD) return;

    const publicPath = path.join(__dirname, 'client', 'build')
    const indexHtml = path.join(__dirname, 'client', 'build', 'index.html')

    // Статичні файли
    app.use('/', expressStatic(publicPath))

    // Головна сторінка (single page)
    app.use('*', (req, res) => {
        res.sendFile(indexHtml)
    })
}

const addRoutes = (app: Express) => {
    // Місце, для підключення майбутніх роутів

    addReactRoutes(app)
}

export default addRoutes