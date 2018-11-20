
const express = require('express')
const router = express.Router() // creates an instance of an express Router

router.get('/', (req, res) => {
    console.log("Serving membersRoutes '/' ")
    res.send("Register soon ;-)")
    // res.send("thingsRoute '/'")
    // res.json(thingsDB.getThings())
})

module.exports = router