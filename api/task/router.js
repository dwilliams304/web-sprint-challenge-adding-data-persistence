// build your `/api/tasks` router here
const express = require('express');
const Tasks = require('./model');
const { checkValidProjectID, checkTaskBody } = require('./middleware');

const router = express.Router();


router.post('/', checkValidProjectID, checkTaskBody, (req, res, next) => {
    Tasks.create(req.body)
    .then(newTask => {
        res.status(201).json(newTask);
    })
    .catch(next);
})


router.get('/', (req, res, next) => {
    Tasks.get()
    .then(tasks => {
        res.status(201).json(tasks);
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