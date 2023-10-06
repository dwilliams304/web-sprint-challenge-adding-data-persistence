// build your `/api/resources` router here
const express = require('express');
const Resources = require('./model');

const router = express.Router();


router.post('/', (req, res, next) => {
    res.json('resource post wired')
})


router.get('/', (req, res, next) => {
    res.json('resource get wired')
})



module.exports = router;