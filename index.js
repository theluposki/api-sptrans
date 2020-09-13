const { config, logger } = require('./config/config.global')
const { getToken } = require('./config/auth/authSptrans')
const setToken = async () => {
    process.env.AUTH_COOKIE = await getToken()
}
setToken()

const express = require('express')

const app = express()

app.get('/', async (req,res) => {
    res.send({ token: process.env.AUTH_COOKIE })
})

app.listen(config().port, logger())