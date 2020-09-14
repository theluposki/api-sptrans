require('dotenv').config()

const { config, logger } = require('./config/config.global')
const { getToken } = require('./config/auth/authSptrans')
const repository = require('./repository/requestSPTrans')
const setToken = async () => {
    process.env.AUTH_COOKIE = await getToken()
}
setToken()

const express = require('express')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const cors = require('cors')

const app = express()

app.use(cors()) 
app.use(morgan('tiny'))
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.get('/info', async (req,res) => {
    res.send({
        code: 200,
        status: 'OK', 
        token: process.env.AUTH_COOKIE 
    })
})

app.get('/linha/:lt', async (req,res) => {
    try {
        const result = await repository.getLinha(req.params.lt)
        res.status(200).send(result)
    } catch (error) {
        res.status(400).send('Não foi posivel buscar..')
    }
})

app.listen(config().port, logger())