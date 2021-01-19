import mongoose  from 'mongoose'
import config from 'config'
import expressSession from 'express-session'
import connectMongo from 'connect-mongo'

const SESSION_SECRET: string = config.get('sessionSecret')

const MongoStore = connectMongo(expressSession)

const storeOptions = {
    mongooseConnection: mongoose.connection
}

const session = expressSession({
    resave: true,
    saveUninitialized: false,
    secret: SESSION_SECRET,
    store: new MongoStore(storeOptions)
})

export default session