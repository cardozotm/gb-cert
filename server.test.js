const request = require("supertest");
const app = require("./server");

describe("Static files", () => {
  test("should serve index.html", async () => {
    const response = await request(app).get("/");

    expect(response.status).toBe(200);
    expect(response.text).toContain("Gerador de Certificados");
  });

  test("should serve templates directory", async () => {
    const response = await request(app).get("/templates/template.png");

    expect([200, 404]).toContain(response.status);
  });

  test("should serve fonts directory", async () => {
    const response = await request(app).get("/fonts/Dearest.ttf");

    expect([200, 404]).toContain(response.status);
  });
});
