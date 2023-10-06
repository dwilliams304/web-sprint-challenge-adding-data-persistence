exports.seed = function(knex){
    return knex('resources').insert([
        {resource_name: 'Resource 1', resource_description: 'Description 1'},
        {resource_name: 'Resource 2', resource_description: 'Description 2'},
        {resource_name: 'Resource 3', resource_description: 'Description 3'},
        {resource_name: 'Resource 4', resource_description: 'Description 4'},
        {resource_name: 'Resource 5', resource_description: 'Description 5'},
        {resource_name: 'Resource 6', resource_description: 'Description 6'},
        {resource_name: 'Resource 7', resource_description: 'Description 7'},
        {resource_name: 'Resource 8', resource_description: 'Description 8'},
    ])
}