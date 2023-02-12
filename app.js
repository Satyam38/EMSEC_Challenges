const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const dotenv = require('dotenv');

const app = express();
app.use(bodyParser.json());
app.use(cors());

// ---------------------------- Anusha Patel <---------------------------


const connectDB = require('./config/db');
// Load Config
dotenv.config({path: './config/config.env'})

connectDB();

// Routes
app.use('/', require('./routes/index'));

app.listen(3000);

// pagination
let page  = Number(req.query.page) || 1;
let limit = Number(req.query.limit) || 3;
let skip = (page -1)*limit;

// CSV File require 
var userroute = require('./routes/userRoute');
app.use('./', userroute);

