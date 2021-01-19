import config from 'config'
import { RequestHandler } from 'express'

const API_KEY: string = config.get('apiKey')

const apiKey: RequestHandler = (req, res, next) => {
    if (req.header('API-KEY') !== API_KEY) {
        res.status(401).json({
            status: 401,
            message: 'Немає, або неправильний API-KEY'
        })
    } else {
        next()
    }
}

export default apiKey