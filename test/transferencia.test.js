 const request = require('supertest')
 const {expect} = require('chai')

describe('Transferencias', () => {
    describe('POST /transferencias', () => {
        it('deve returnar sucesso com 201 quando transferencia for igual ou acima de R$ 10,00', async () => {
            
            const responseLogin = await request('http://localhost:3000')
                            .post('/login')
                            .set('Content-Type', 'application/json')
                            .send({ username: 'julio.lima', senha: '123456' })
            expect(responseLogin.status).to.equal(200)
            expect(responseLogin.body.token).to.be.a('string')
            
            
            const token = responseLogin.body.token;
            
            
            const response = await request('http://localhost:3000')
                .post('/transferencias')
                .set('Content-Type', 'application/json')
                .set('Authorization', `Bearer ${token}`)
                .send({ contaOrigem: '1', contaDestino: '2', valor: 11.00 })
            expect(response.status).to.equal(201)
            expect(response.body.message).to.be.a('string')
        });

        it('deve returnar erro com 422 quando transferencia for abaixo de R$ 10,00', async () => {
            const responseLogin = await request('http://localhost:3000')
                            .post('/login')
                            .set('Content-Type', 'application/json')
                            .send({ username: 'julio.lima', senha: '123456' })
            expect(responseLogin.status).to.equal(200)
            expect(responseLogin.body.token).to.be.a('string')
            
            
            const token = responseLogin.body.token;
            
            
            const response = await request('http://localhost:3000')
                .post('/transferencias')
                .set('Content-Type', 'application/json')
                .set('Authorization', `Bearer ${token}`)
                .send({ contaOrigem: '1', contaDestino: '2', valor: 5.00 })
            expect(response.status).to.equal(422)
            expect(response.body.error).to.be.a('string')
        });
    });
});