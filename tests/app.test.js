const request = require('supertest');
const app = require('../server.js');

describe('addProduct', () => {
    it('should respond with JSON data', async () => {
        const response = await app.addProduct();
        expect(response.statusCode).toBe(200);
        expect(response.body).toBeDefined();
    });
})