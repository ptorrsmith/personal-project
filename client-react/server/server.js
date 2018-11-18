const path = require('path')
const express = require('express')
const server = express()

console.log("going to try to set public to", path.join(__dirname, '../public'))
server.use(express.static(path.join(__dirname, '../public')))

//make server available to index.js
module.exports = server
