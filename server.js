
const express = require('express');
const app = express();
require('dotenv').config();

const newFile = require("./f");
const read = require("./readFile");





//  Middleware to create web server

app.use(express.json());
// app.use(cors());

// Creating port for server
const port = Number(process.env.PORT) || 3000;
app.listen(port, ()=>console.log(`Server listening on ${port}`));


// Routes

app.use('/api/new', newFile);
app.use('/api/read', read);








