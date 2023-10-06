// build your `Task` model here
const db = require('../../data/dbConfig')

function create(task){
    return db('tasks');
}

function get(){
    return db('tasks');
}


module.exports = {
    create,
    get
}