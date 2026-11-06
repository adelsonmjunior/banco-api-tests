 const request = require('supertest')
 const {expect} = require('chai')
 require('dotenv').config() 
 const { obterToken } = require('../helpers/autenticacao')
 const postTransferencias = require('../fixtures/postTransferencias.json')

 

describe('Transferencias', () => {
    describe('POST /transferencias', () => {
        let token

        beforeEach(async () => {
            token = await obterToken('julio.lima', '123456')                 
        });


       it('deve returnar sucesso com 201 quando transferencia for igual ou acima de R$ 10,00', async () => {
           const bodyTransferencias = { ...postTransferencias }
            
            const response = await request(process.env.BASE_URL)
              .post('/transferencias')
              .set('Content-Type', 'application/json')
              .set('Authorization', `Bearer ${token}`)
              .send(bodyTransferencias)

              expect(response.status).to.equal(201)
              expect(response.body.message).to.be.a('string')
        }); 

        it('deve returnar erro com 422 quando transferencia for abaixo de R$ 10,00', async () => {     
             const bodyTransferencias = { ...postTransferencias}
             bodyTransferencias.valor = 5.00
            
            const response = await request(process.env.BASE_URL)
                .post('/transferencias')
                .set('Content-Type', 'application/json')
                .set('Authorization', `Bearer ${token}`)
                .send(bodyTransferencias)
                expect(response.status).to.equal(422)
                expect(response.body.error).to.be.a('string')
        });

    });
});