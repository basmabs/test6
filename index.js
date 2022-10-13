const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const port = 5000;
const app = express()
const bodyParser = require('body-parser')
const dotenv = require('dotenv')

dotenv.config()

require('./passport/bearer')
require('./connect/connect')
app.use(morgan('combined'))
app.use(cors())
app.use(bodyParser.json())

const auth = require('./routes/register')
app.use(auth)

app.listen(port, function () { console.log('listening on port' + port) })