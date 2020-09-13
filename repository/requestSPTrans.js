require('dotenv').config()
const axios = require('axios').default

exports.getLinha = async (linha) => {
    const result = await  axios({ 
         method: 'get',
         url: `${process.env.BASE_URL_SPTRANS}/Linha/Buscar?termosBusca=${linha}`,
         headers: { responseType: 'json', Cookie:  process.env.AUTH_COOKIE}
    })
    return result.data
}
