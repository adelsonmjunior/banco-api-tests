require('dotenv').config()
const request = require('supertest')

const obterToken = async (username, senha) => {
    const response = await request(process.env.BASE_URL)
        .post('/login')                 
        .set('Content-Type', 'application/json')
        .send({ username, senha })
        return response.body.token
}                       

module.exports = { obterToken }