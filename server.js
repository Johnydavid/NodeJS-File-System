const express = require('express');
const app = express();
var routing = require('./routing.js')
app.use('/', routing);
app.use('/create', routing);


require("dotenv").config();

const port = Number(process.env.PORT) || 3001;


app.listen(port, () => {
    console.log(`server is running on port ${port}`);


  });

