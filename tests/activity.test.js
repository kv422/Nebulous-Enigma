const mongoose = require("mongoose");
const request = require("supertest");

const app = require("../app");
const button_app = require('../server');

require("dotenv").config();

/* Connecting to the database before each test. */
beforeEach(async () => {
    await mongoose.connect(process.env.DB_URI);
  });
  
  /* Closing database connection after each test. */
afterEach(async () => {
    await mongoose.connection.close();
  });

describe("GET /home", () => {
    it("should get all the activities", async () => {
      const token = await request(app).post("/").send({
        username: process.env.DUMMY_USERNAME,
        password: process.env.DUMMY_PASSWORD,
      });
  
      const response = await request(app)
        .get("/home")
        .set({
          Authorization: "bearer " + token.body.token,
          "Content-Type": "application/json",
        });
  
      expect(response.statusCode).toBe(200);
      expect(response.body.length).toBeGreaterThan(0);
    });
  });

describe('Button press simulation', () => {
    it('should trigger the button press endpoint', async () => {
      const response = await request(button_app)
        .post('/press-button')
        .send();
  
        // Check if status is 200 OK
      expect(response.status).toBe(200); 
      expect(response.body.message).toBe('Button pressed');  // Check the message
    });
  });