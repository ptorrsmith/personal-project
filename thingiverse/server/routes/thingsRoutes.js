const express = require('express')
const router = express.Router() // creates an instance of an express Router

// import thingsDB from '../db/thingsDB'
const thingsDB = require('../data/thingsDB')


router.get('/', (req, res) => {
    thingsDB.getThings()
        .then(things => {
            res.json(things)
        })
})

router.get('/:id', (req, res) => {
    const id = req.params.id
    // get the thing from the array with that id
    thingsDB.getThing(id)
        .then(thing => {
            res.status(201)
            res.json(thing)
        })
})


// this route to be shifted to members routes ('/:id/things')
router.get('/member/:id', (req, res) => {
    const memberId = req.params.id
    thingsDB.getThings(memberId)
        .then(things => {
            res.status(201)
                .json(things)
        })
})

router.post('/new', (req, res) => {
    const thing = req.body
    // console.log("posted thing: ", thing)
    thingsDB.addThing(thing)
        .then(newId => {
            res.status(201).json(newId[0])
        })
        .catch(err => {
            res.status(301).json(err)
        })
})

router.put('/:id', (req, res) => {
    const id = req.params.id
    const thing = req.body
    if(thing.id == id) {
        thingsDB.updateThing(thing)
            .then(updateCount => {
                console.log("Update count result: >>>> ", updateCount)
                res.status(201).json(updateCount)
            })
            .catch(err => {
                res.status(301).json(err)
            })
    }
    else {
        res.status(301).json("object and parameter ids do not match")
    }
})

router.delete('/:id', (req, res) => {
    const id = req.params.id
    thingsDB.deleteThing(id)
        .then(deleteCount => {
            res.status(201).json(deleteCount)
        })
})

module.exports = router
