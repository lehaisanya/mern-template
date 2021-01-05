const logger = (req, res, next) => {
    console.log('----------------------------------------------')
    console.log(req.method, req.url)
    console.log('query:', req.query)
    console.log('body:', req.body)
    console.log('session: ', req.session)
    console.log('----------------------------------------------')
    next()
}

module.exports = logger