const config = require("config")

const apiKey = (req, res, next) => {
    if (req.header("API-KEY") !== config.get("apiKey")) {
        res.status(401).json({
            message: "Нет API-KEY или неправильный API-KEY"
        })
    } else {
        next()
    }
}

module.exports = apiKey