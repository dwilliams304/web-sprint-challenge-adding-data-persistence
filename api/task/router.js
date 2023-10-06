// build your `/api/tasks` router here
const express = require('express');
const Tasks = require('./model');

const router = express.Router();


router.post('/', (req, res, next) => {
    res.json('task post wired')
})


router.get('/', (req, res, next) => {
    res.json('task get wired')
})



module.exports = router;