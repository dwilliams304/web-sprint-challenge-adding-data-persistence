exports.up = function(knex) {
    return knex.schema
        .createTable('projects', tbl => {
            tbl.increments('project_id');
            tbl.string('project_name').notNullable();
            tbl.string('project_description');
            tbl.boolean('project_completed').defaultTo(false);
        })
        .createTable('resources', tbl => {
            tbl.increments('resource_id');
            tbl.string('resource_name').notNullable().unique();
            tbl.string('resource_description');
        })
        .createTable('tasks', tbl => {
            tbl.increments('task_id');
            tbl.string('task_description').notNullable();
            tbl.string('task_notes');
            tbl.boolean('task_completed').defaultTo(false);
            tbl.integer('project_id').references('project_id').inTable('projects');
        })

}


exports.down = function(knex){
    return knex.schema
        .dropTableIfExists('tasks')
        .dropTableIfExists('resources')
        .dropTableIfExists('projects')

}