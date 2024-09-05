const request = require("supertest");
const app = require("../server.js");
const { default: axios } = require("axios");


describe("addProduct", () => {
  it("should respond with JSON data", async () => {
    const response = await request(app.addProduct());
    expect(response.statusCode).toBe(200);
    expect(response.body).toBeDefined();
  });
});
