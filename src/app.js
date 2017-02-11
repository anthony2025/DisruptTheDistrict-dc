const mongoose = require('mongoose')
const express = require('express')()

// setting up environment variables
require('dotenv').config({silent: false})
const PORT = process.env.PORT || 4000
const DBURI = process.env.DBURI

// setting up mongoose
mongoose.connect(DBURI)

// setting up our router
express.use('/', require('./router'))

// setting up our express server
express.listen(PORT, () => console.log('Express running on port: ' + PORT))
