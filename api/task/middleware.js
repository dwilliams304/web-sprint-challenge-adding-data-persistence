const db = require('../../data/dbConfig');

const checkTaskBody = (req, res, next) => {
    if(req.body.task_description === undefined) next({status: 400, message: 'task_description is required'})
    else next();
}

const checkValidProjectID = async (req, res, next) => {
    try{
        const existing = await db('projects').where('project_id', req.body.project_id).first();
        if(!existing) next({status: 404, message: `project with id of: ${req.body.project_id} not found`})
        else next();
    }
    catch(err) { next(err); }
}

module.exports = {
    checkTaskBody,
    checkValidProjectID
};