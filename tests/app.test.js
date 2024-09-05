const request = require('supertest');
const app = require('../server.js');

describe('addProduct', () => {
    it('should respond with JSON data', async () => {
        const response = await app.addProduct('p1',3000,"some product",'https://i.pravatar.cc',"general");
        expect(response.status).toBe(200);
        expect(response.body).toBeDefined();
    });
});

describe('add', () => {
    it('should respond with "success!"', ()=>{
        const response = app.add();
        expect(response).toBe("success!");
    });
});

// describe('add', () => {
//     test('return success', () => {
//         expect(app.add()).toBe('success!');
//     });
// });