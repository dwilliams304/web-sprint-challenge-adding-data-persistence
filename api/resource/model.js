// build your `Resource` model here
const db = require('../../data/dbConfig')

function create(resource){
    return db('resources');
}

function get(){
    return db('resources');
}


module.exports = {
    create,
    get
}