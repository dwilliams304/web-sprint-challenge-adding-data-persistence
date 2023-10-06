// build your `/api/resources` router here
const express = require('express');
const Resources = require('./model');
const { checkResourceBody, checkExistingResouce } = require('./middleware');
const router = express.Router();


router.post('/', checkResourceBody, checkExistingResouce, (req, res, next) => {
    Resources.create(req.body)
    .then(newResource => {
        res.status(201).json(newResource);
    })
    .catch(next);
})


router.get('/', (req, res, next) => {
    Resources.get()
    .then(resources => {
        res.status(201).json(resources);
    })
    .catch(next);
})


router.use((err, req, res, next) => { //eslint-disable-line
    res.status(err.status || 500).json({
        message: err.message,
        stack: err.stack
    })
})


module.exports = router;