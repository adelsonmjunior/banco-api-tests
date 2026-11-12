 const request = require('supertest')
 const {expect} = require('chai')
 require('dotenv').config() 
 const { obterToken } = require('../helpers/autenticacao')
 const postTransferencias = require('../fixtures/postTransferencias.json')

 

describe('Transferencias', () => {

    let token

        beforeEach(async () => {
            token = await obterToken('julio.lima', '123456')                 
        });

    describe('POST /transferencias', () => {
    
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


    describe('GET /transferencias/{id}', () => {
        
        it('deve returnar sucesso com 200 quando transferencia for encontrada', async () => {
            const response = await request(process.env.BASE_URL)
                .get('/transferencias/1')
                .set('Authorization', `Bearer ${token}`)

                expect(response.status).to.equal(200)
                expect(response.body).to.be.an('object')
                expect(response.body.id).to.equal(1)
                expect(response.body.id).to.be.a('number')
                expect(response.body.valor).to.equal('222.00')
                expect(response.body.conta_origem_id).to.equal(1)
                expect(response.body.conta_destino_id).to.equal(2)
            
        });
    });

    describe('GET /transferencias', () => {
        it('deve returnar limite de 10 transferencias com sucesso e 200 quando transferencias forem encontradas', async () => {
            const response = await request(process.env.BASE_URL)
                .get('/transferencias?page=1&limit=10')
                .set('Authorization', `Bearer ${token}`)    

                expect(response.status).to.equal(200)
                expect(response.body.limit).to.equal(10)
                expect(response.body.page).to.equal(1)
                expect(response.body).to.be.an('object')
                expect(response.body.transferencias).to.have.lengthOf(10)
                
        });


    });

});