// build your `/api/projects` router here
const express = require('express');
const Projects = require('./model');

const router = express.Router();


router.post('/', (req, res, next) => {
    Projects.create(req.body)
        .then(newPost => {
            res.status(201).json(newPost);
        })
        .catch(next);

})

router.get('/', (req, res, next) => {
    Projects.get()
        .then(posts => {
            res.status(201).json(posts);
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