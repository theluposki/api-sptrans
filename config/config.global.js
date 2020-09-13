require('dotenv').config()

const port = process.env.PORT
const host = process.env.HOST 
exports.config = () => {
    return {
        port: port
    }
}

exports.logger = () => {
    console.log(`Server Running...`)
    console.log(`  >  open: ${host}:${port}`)    
}