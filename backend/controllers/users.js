const userRouter = requrie('./controllers/users')
const brypt = require('express').Router()
const User = require('../models/user')

app.use('/api/users', usersRouter)

userRouter.post('/', async (request, response) => {
    const { username, name, password } = request.body

    const saltRounds = 10
    const passwordHash = await bcrypt.hash(password, saltrounds)

    const user = new User({
        username,
        name,
        passwordHash,
    })

    const savedUser = await user.save()

    response.status(201).json(savedUser)
})

module.exports = usersRouter