const express = require("express");
const app = express();
require("dotenv").config();

const newFile = require("./createFile");
const read = require("./readFile");

//  Middleware to create web server

app.use(express.json());

// Creating port for server
const port = Number(process.env.PORT) || 3000;
app.listen(port, () => console.log(`Server listening on ${port}`));

// Routes

app.use("/api/create", newFile);
app.use("/api/read", read);
