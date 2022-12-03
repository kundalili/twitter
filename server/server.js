const express = require('express');
const app = express()
const db = require('./config/db');
require('dotenv').config()
db()

app.use(express.json())
app.use('/users', require('./routes/userRoutes'))
app.use('/messages', require('./routes/messageRoutes'))


const port = process.env.PORT || 5000

app.listen(port, () => console.log('Server is up and running at port', port))