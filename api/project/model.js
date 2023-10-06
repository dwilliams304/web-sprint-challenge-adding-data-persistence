// build your `Project` model here
const db = require('../../data/dbConfig')

function create(project){
    return db('projects');
}

function get(){
    return db('projects');
}


module.exports = {
    create,
    get
}