// build your `Project` model here
const db = require('../../data/dbConfig')


/*{
    "project_id":1,
    "project_name":"bar",
    "project_description":null,
    "project_completed":false
}*/
function create(project){
    return db('projects').insert(project)
        .then(([id]) => {
            return db('projects').where('project_id', id).first();
        });
}

/*[{
    "project_id":1,
    "project_name":"bar",
    "project_description":null,
    "project_completed":false
}]*/
async function get(){
    const projects = await db('projects')
    .select('project_id', 'project_name', 'project_description', 'project_completed');

    projects.map(project => {
        project.project_completed === 1 ? project.project_completed = true : project.project_completed = false;
    })

    return projects;
}


module.exports = {
    create,
    get
}