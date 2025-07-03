const express = require("express");
const http = require("http");
const socket = require("socket.io");

const app = express();
const port = 3000;

const server = http.createServer(app);

// initiate socket io and attach to http server
const io = socket(server);
app.use(express.static("public"));
