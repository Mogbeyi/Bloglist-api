const app = require("./app");
const config = require("./utils/config");
const logger = require("./utils/logger");
const http = require("http");

const server = http.createServer(app);
const express = require("express");
const Blog = require("./models/blog");

app.use(express.json());

server.listen(config.PORT, () => {
  logger.info(`Server running on port ${config.PORT}`);
});
