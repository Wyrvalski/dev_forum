const request = require("supertest");
const app = require("../app");



const config = require('config');

const MongoClient = require('mongodb');
const mongoURI = config.get('mongoURI')

let connection;
let db;

beforeAll(async () => {
  connection = await MongoClient.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});
  db = await connection.db();
  await db.collection('users').deleteMany({});
});

afterAll(async () => {
  await connection.close();
});

describe('insert', () => {
  
  it("It should response the GET method", async (done) => {
    const response = await request(app).get("/");
    expect(response.statusCode).toBe(200);
    done();
  });

  it("should add user", async (done) => {
    const response = await request(app).post('/api/users')
    .send({name: "Eduardo Duarte", email: "eduardo@hotmail.com", password: "123456"});
    expect(response.statusCode).toBe(200);
    done();
  });

  it("should add only unique user", async (done) => {
    const response = await request(app).post('/api/users')
    .send({name: "Pedro", email: "pedro@hotmail.com", password: "123456"});
    const response1 = await request(app).post('/api/users')
    .send({name: "Pedro", email: "pedro@hotmail.com", password: "123456"});
    expect(response1.statusCode).toBe(400);
    done();
  });
  
  it("should return status 400 because dont have profile", async (done) => {
    const response = await request(app).post("/api/auth").send({ email: "eduardo@hotmail.com", password: "123456" });
    const response1 = await request(app).get("/api/profile/me").set({'x-auth-token': response.body.token})
    expect(response1.statusCode).toBe(400);
    done();
  });

});