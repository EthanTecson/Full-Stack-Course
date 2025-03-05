const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    username: String,
    name: String,
    passwordHash: String,
    notes: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Note'
        }
    ],
})

userSchema.set('toJSON', {
    transform: (document, retrunedObject) => {
        retrunedObject.id = retrunedObject._id.toString()
        delete retrunedObject._id
        delete retrunedObject.__v
        // the passwordHash should NOT be revealed
        delete retrunedObject.passwordHash
    }
})

const User = mongoose.model('User', userSchema)

module.exports = User