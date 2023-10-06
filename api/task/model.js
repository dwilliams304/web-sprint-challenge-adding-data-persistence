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
async function create(task){
    const id = await db('tasks').insert(task);
    const result = await db('tasks').where('task_id', id).first();
    return result;
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
    return db('tasks as t')
        .leftJoin('projects as p', 't.project_id', 'p.project_id')
        .select('task_id', 'task_notes', 'task_description', 'task_completed', 'p.project_name', 'p.project_description');
}


module.exports = {
    create,
    get
}