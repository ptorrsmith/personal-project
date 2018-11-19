
const express = require('express')
const router = express.Router() // creates an instance of an express Router

router.get('/', (req, res) => {
    console.log("Serving homeRoutes '/' ")
    res.send("Well hello there ;-)")
    // res.sendFile(__dirname +'/../../public/index.html')
    // res.send("thingsRoute '/'")
    // res.json(thingsDB.getThings())
})

module.exports = router