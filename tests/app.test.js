const request = require('supertest');
const app = require('../server.js');

describe('addProduct', () => {
    it('should respond with JSON data', async () => {
        const response = await app.addProduct('p1',3000,"some product",'https://i.pravatar.cc',"general");
        expect(response.status).toBe(200);
        expect(response.body).toBeDefined();
    });
});

describe('GET /products/:id', () => {
    it('should have an id', async () => {
        const response = await request(app).get('/products/1');
        console.log(response);
        expect(response._body.id).toBeDefined();
    })
});