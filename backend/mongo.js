const mongoose = require('mongoose')

if (process.argv.length < 3) {
    console.log('give password as argument')
    process.exit(1)
}

const password = process.argv[2]

const url = `mongodb+srv://fullstack:${password}@fullstack.fmyet.mongodb.net/noteApp?retryWrites=true&w=majority&appName=fullstack`

mongoose.set('strictQuery', false)

mongoose.connect(url)

const noteSchema = new mongoose.Schema({
    content: String,
    important: Boolean,
})

const Note = mongoose.model('Note', noteSchema)

const note = new Note({
    content: 'HTML is easy',
    important: true,
})


const note2 = new Note({
    content: 'Mongoose makes use of mongo easy',
    important: true,
})

const note3 = new Note({
    content: 'Callback-functions suck',
    important: true,
})

note2.save().then(result => {
    console.log('note2 saved!')
})
note3.save().then(result => {
    console.log('note3 saved!')
    mongoose.connection.close()
})