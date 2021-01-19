import { Express, json } from 'express'
import cookieParser from 'cookie-parser'
import session from './session'
import logger from './logger'
import apiKey from './apiKey'

const DEV = process.env.NODE_ENV !== 'production'

function addMiddlewares(app: Express) {
    app.use(json())
    app.use(cookieParser())
    app.use(session)

    if (DEV) {
        app.use(logger)
        app.use(apiKey)
    }
}

export default addMiddlewares