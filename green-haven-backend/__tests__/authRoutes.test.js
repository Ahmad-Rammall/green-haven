const supertest = require("supertest");
const app = require("../index");

describe("POST /auth/login", () => {
  describe("Given a username and password", () => {
    test("Should respond with a 200 status code", async () => {
      const response = await supertest(app).post("/auth/login").send({
        email: "user@user.com",
        password: "123456",
      });
      expect(response.status).toBe(200);
      expect(response.body.user).toBeDefined();
      expect(response.body.token).toBeDefined();
      expect(response.body.streamToken).toBeDefined();
    });

    test("Should respond with a 400 status code if email/password wrong", async () => {
      const response = await supertest(app).post("/auth/login").send({
        email: "user@user.com",
        password: "000",
      });
      expect(response.status).toBe(400);
    });

    test("Should specify a json in the header", async () => {
      const response = await supertest(app).post("/auth/login").send({
        email: "user@user.com",
        password: "123456",
      });
      expect(response.headers["content-type"]).toEqual(
        expect.stringContaining("json")
      );
    });
  });
});
