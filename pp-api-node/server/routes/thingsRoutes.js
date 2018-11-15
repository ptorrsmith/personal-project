
const express = require('express')
const router = express.Router() // creates an instance of an express Router

import thingsDB from '../db/thingsDB'


router.get('/', (req, res) => {
    res.json(db.getThings())
})





