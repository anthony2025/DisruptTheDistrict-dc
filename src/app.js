// require dependencies
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const path = require ('path')
const app = require('express')()

// setting up environment variables
require('dotenv').config({silent: false})
const PORT = process.env.PORT || 4000
const DBURI = process.env.DBURI

// setting up mongoose
mongoose.connect(DBURI)

// setting up bodyParser
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

// setting up the express router
const videoRouter = require('./router')
app.use('/api/videos', videoRouter)

// setting up a homepage
app.get('/', (req, res) => res.sendFile(path.join(__dirname, '/index.html')))

// setting up the express server
app.listen(PORT, () => console.log('App running on port: ' + PORT))
