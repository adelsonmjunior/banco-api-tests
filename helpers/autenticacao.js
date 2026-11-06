require('dotenv').config()
const request = require('supertest')
const postLogin = require('../fixtures/postLogin.json')

const obterToken = async (username, senha) => {
    const bodyLogin = { ...postLogin }
    const response = await request(process.env.BASE_URL)
        .post('/login')                 
        .set('Content-Type', 'application/json')
        .send(bodyLogin)
        return response.body.token
}                       

module.exports = { obterToken }