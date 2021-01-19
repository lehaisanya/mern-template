import config from 'config'
import mongoose, { ConnectOptions } from 'mongoose'

const MONGO_URI: string = config.get('mongoUri')
const DEBUG: boolean = config.get('debug')

const mongoConfig: ConnectOptions = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
}

async function connectDB () {
    await mongoose.connect(MONGO_URI, mongoConfig)
    mongoose.connection.on('error', (err) => {
        console.log('Ошибка MongoDB:', err)
    })
    mongoose.set('debug', DEBUG)
}

export default connectDB