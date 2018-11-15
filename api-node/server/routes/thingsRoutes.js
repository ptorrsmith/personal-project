
const express = require('express')
const router = express.Router() // creates an instance of an express Router

// import thingsDB from '../db/thingsDB'
const thingsDB = require('../db/thingsDB')


router.get('/', (req, res) => {
    thingsDB.getThings()
    .then( things => {
        res.json(things)
    })
})

router.get('/:id', (req, res) => {
    const id = req.params.id
    // get the thing from the array with that id
    thingsDB.getThing(id)
    .then ( thing => {
        res.status(201)
        res.json(thing)
    })
})

router.get('/member/:id', (req, res) => {
    const memberId = req.params.id
    thingsDB.getThings(memberId)
    .then( things => {
        res.status(201)
        .json(things)
    })
})

router.post('/new', function (req, res) {
    // console.log("query: ", req.query)
    // console.log("params: ", req.params)
    // console.log("body: ", req.body)
    const thing = req.body
    console.log("posted thing: ", thing)
    // thingsDB.addThing(thing)
    // .then (thing => {
    //     res.status(201).json(thing)
    // })
    req.body ? res.status(200).send(req.body) : res.status(500).send("No body!!")
})

module.exports = router