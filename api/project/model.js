// build your `Project` model here
const db = require('../../data/dbConfig')


/*{
    "project_id":1,
    "project_name":"bar",
    "project_description":null,
    "project_completed":false
}*/
function create(project){
    return db('projects');
}

/*[{
    "project_id":1,
    "project_name":"bar",
    "project_description":null,
    "project_completed":false
}]*/
function get(){
    return db('projects')
    .select('project_id', 'project_name', 'project_description', 'project_completed');
}


module.exports = {
    create,
    get
}