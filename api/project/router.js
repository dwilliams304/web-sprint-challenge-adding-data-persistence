// build your `/api/projects` router here
const express = require('express');
const Projects = require('./model');

const router = express.Router();



router.post('/', (req, res, next) => {
    res.json('project post wired')
})


router.get('/', (req, res, next) => {
    res.json('project get wired')
})



module.exports = router;