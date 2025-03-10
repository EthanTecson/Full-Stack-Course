require('dotenv').config()

const PORT = process.env.PORT
const MONGODB_URI = process.env.MONGODB_URI === 'test'
    ? process.env.TEST_MONGO_URI
    : process.env.MONGODB_URI

module.exports = {
    MONGODB_URI,
    PORT
}