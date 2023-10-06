const db = require('../../data/dbConfig');

const checkResourceBody = (req, res, next) => {
    if(req.body.resource_name === undefined) next({status: 400, message: 'resource_name is required'})
    else next();
}

const checkExistingResouce = async (req, res, next) => {
    try{
        const existing = await db('resources').where('resource_name', req.body.resource_name);
    
        if(existing) next({status: 400, message: `resource with name of: ${req.body.resource_name} already exists`}) 
        else next();

    }
    catch(err) { next(err); }
}

module.exports = {
    checkResourceBody,
    checkExistingResouce
};