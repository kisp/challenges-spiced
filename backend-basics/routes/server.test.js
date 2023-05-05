/** supertest is a library that allows you to test HTTP requests */
import { default as supertestRequest } from "supertest";
import * as all from "./server";
const { server } = all;

async function getUrl(url) {
  return await supertestRequest(server).get(url);
}

test("A server instance is exported", () => {
  expect(server).toBeDefined();
  expect(server).toHaveProperty("listen");
});

test("The server responds to /api/fish/1 with Shrimp", async () => {
  const response = server && (await getUrl("/api/fish/1"));
  expect(response?.text).toBe("Shrimp");
  expect(response?.statusCode).toBe(200);
});

test.skip("The server responds to /api/fish/2 with Anemonefish", async () => {
  const response = server && (await getUrl("/api/fish/2"));
  expect(response?.text).toBe("Anemonefish");
  expect(response?.statusCode).toBe(200);
});

test.skip("The server responds to /api/fish/3 with Not found", async () => {
  const response = server && (await getUrl("/api/fish/3"));
  expect(response?.text).toBe("Not found");
  expect(response?.statusCode).toBe(404);
});

test.skip("The server responds to all other routes with Not found", async () => {
  const response = server && (await getUrl("/api/elephant"));
  expect(response?.text).toBe("Not found");
  expect(response?.statusCode).toBe(404);
});
