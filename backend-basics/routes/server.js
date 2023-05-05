import { createServer } from "node:http";

export const server = createServer((req, res) => {
  try {
    if (req.url === "/api/fish/1") {
      res.end("Shrimp");
    } else {
      res.end("Shrimp");
    }
  } catch (error) {
    res.statusCode = 500;
    res.end(error.toString());
  }
});
