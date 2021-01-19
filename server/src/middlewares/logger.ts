import { RequestHandler } from 'express'

const logger: RequestHandler = (req, res, next) => {
    console.log('----------------------------')
    console.log(req.method, req.url)
    console.log('Headers:', req.headers)
    console.log('Query:', req.query)
    console.log('Body:', req.body)
    console.log('Cookies:', req.cookies)
    console.log('Session:', req.session)
    console.log('----------------------------')
    next()
}

export default logger