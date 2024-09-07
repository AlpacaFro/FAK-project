const request = require('supertest');
const app = require('../server.js');

describe('addProduct', () => {
    it('should respond with JSON data', async () => {
        const response = await app.addProduct('p1',3000,"some product",'https://i.pravatar.cc',"general");
        expect(response.status).toBe(200);
        expect(response.body).toBeDefined();
    });
});

// test status code 200
describe(' status code 200', () => {
    test('test if status code is 200', async () => {
      const response = await app.getProductDetails(
        'https://fakestoreapi.com/products/1'
      );
      expect(response.status).toBe(200);
    });
  });
  
  // test status code 404
describe('check status code 404', () => {
    test('test if bad route give send code 404', async () => {
      const response = await app.getProductDetails(
        'https://fakestoreapi.com/procts!@#$$%^^&&()(*&^%$#@!'
      );
      expect(response.status).toBe(404);
    });
  });
  
  describe('check the right price', () => {
    test('test if item 16 have the right price from the API', async () => {
      const response = await app.getProductDetails(
        'https://fakestoreapi.com/products/16'
      );
      expect(response.data.price).toBe(29.95);
    });
  });
  
  describe('check the right rating', () => {
    test('test if item 16 have the right rating from the API', async () => {
      const response = await app.getProductDetails(
        'https://fakestoreapi.com/products/16'
      );
      expect(response.data.rating.rate).toBe(2.9);
    });
  });