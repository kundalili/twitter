const express = require('express');
const app = express()
const db = require('./config/db');
require('dotenv').config()
db()

app.use(express.json())