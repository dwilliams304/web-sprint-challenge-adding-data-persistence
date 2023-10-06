// build your `Task` model here
const db = require('../../data/dbConfig')

/*{
    "task_id":1,
    "task_description":"baz",
    "task_notes":null,
    "task_completed":false,
    "project_id:1
}
*/
function create(task){
    return db('tasks');
}

/*[{
    "task_id":1,
    "task_description":"baz",
    "task_notes":null,
    "task_completed":false,
    "project_name:"bar",
    "project_description":null
}]
*/
function get(){
    return db('tasks');
}


module.exports = {
    create,
    get
}