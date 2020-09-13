require('dotenv').config()

const axios = require('axios').default

exports.getToken = async () => {
    const result = await axios.post(process.env.AUTH_SPTRANS)
    const res = result.headers['set-cookie'][0]
    return res.split(';')[0]
}