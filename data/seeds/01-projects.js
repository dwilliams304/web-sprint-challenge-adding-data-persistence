exports.seed = function(knex){
    return knex('projects').insert([
        {project_name: 'Project 1', project_description: 'Description 1', project_completed: true},
        {project_name: 'Project 2', project_description: 'Description 2', project_completed: false},
        {project_name: 'Project 3', project_description: 'Description 3', project_completed: true},
        {project_name: 'Project 4', project_description: 'Description 4', project_completed: false},
        {project_name: 'Project 5', project_description: 'Description 5', project_completed: true},
        {project_name: 'Project 6', project_description: 'Description 6', project_completed: false},
    ])
}