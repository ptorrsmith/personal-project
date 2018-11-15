
const express = require('express')
const router = express.Router() // creates an instance of an express Router

// import thingsDB from '../db/thingsDB'
const thingsDB = require('../db/thingsDB')


router.get('/', (req, res) => {
    console.log("Serving thingsRoutes '/' ")
    // res.send("thingsRoute '/'")
    res.json(thingsDB.getThings())
})

router.get('/')

module.exports = router