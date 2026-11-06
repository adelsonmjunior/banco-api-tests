 const request = require('supertest')
 const {expect} = require('chai')
 require('dotenv').config() 
 const { obterToken } = require('../helpers/autenticacao')
 

describe('Transferencias', () => {
    describe('POST /transferencias', () => {
        it('deve returnar sucesso com 201 quando transferencia for igual ou acima de R$ 10,00', async () => {
            
            const token = await obterToken('julio.lima', '123456');
            
            const response = await request(process.env.BASE_URL)
                .post('/transferencias')
                .set('Content-Type', 'application/json')
                .set('Authorization', `Bearer ${token}`)
                .send({ contaOrigem: '1', contaDestino: '2', valor: 11.00 })
            expect(response.status).to.equal(201)
            expect(response.body.message).to.be.a('string')
        });

        it('deve returnar erro com 422 quando transferencia for abaixo de R$ 10,00', async () => {
            const token = await obterToken('julio.lima', '123456');
            
            const response = await request(process.env.BASE_URL)
                .post('/transferencias')
                .set('Content-Type', 'application/json')
                .set('Authorization', `Bearer ${token}`)
                .send({ contaOrigem: '1', contaDestino: '2', valor: 5.00 })
            expect(response.status).to.equal(422)
            expect(response.body.error).to.be.a('string')
        });
    });
});