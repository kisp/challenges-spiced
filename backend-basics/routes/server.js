import { createServer } from "node:http";

export const server = createServer((req, res) => {
  try {
    if (req.url === "/api/fish/1") {
      res.end("Shrimp");
    } else if (req.url === "/api/fish/2") {
      res.end("Anemonefish");
    } else {
      res.statusCode = 404;
      res.end("Not found");
    }
  } catch (error) {
    res.statusCode = 500;
    res.end(error.toString());
  }
});
