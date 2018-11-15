const path = require('path')

// const cors = require('cors')

// Express server to handle route requests
const express = require('express')
// instantiate single instance of express server
const server = express()

// setup public directory (not sure if needed), so not enabling yet
// server.use(express.static(path.join(__dirname, '../public')))

// Routes for resources
const homeRoutes = require('./routes/homeRoutes')
const thingsRoutes = require('./routes/thingsRoutes')
const membersRoutes = require('./routes/membersRoutes')

// define resoure api endpoints and base routes
server.use('/', homeRoutes)
server.use('/api/v1/things', thingsRoutes)
server.use('/api/v1/members', membersRoutes)


//make server available to index.js
module.exports = server
