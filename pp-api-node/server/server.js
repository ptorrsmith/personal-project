const path = require('path')

// const cors = require('cors')


// Express server to handle route requests
const express = require('express')
// instantiate single instance of express server
const server = express()

// setup public directory (not sure if needed), so not enabling yet
// server.use(express.static(path.join(__dirname, '../public')))

// Routes for resources
const thingsRoutes = require('../routes/thingsRoutes')

// define resoure api endpoints and base routes
server.use('/api/v1/things', thingsRoutes)


make server available to index.js
module.exports = server
