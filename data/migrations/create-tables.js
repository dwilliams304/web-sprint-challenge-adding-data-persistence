exports.up = async function(knex) {
    await knex.schema
        .createTable('projects', tbl => {
            tbl.increments('project_id');
            tbl.string('project_name').notNullable();
            tbl.string('project_description');
            tbl.boolean('project_completed').defaultTo(0);
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
            tbl.boolean('task_completed').defaultTo(0);
            tbl.integer('project_id')
                .unsigned()
                .notNullable()
                .references('project_id')
                .inTable('projects');
        })

}


exports.down = async function(knex){
    await knex.schema
        .dropTableIfExists('tasks')
        .dropTableIfExists('resources')
        .dropTableIfExists('projects')

}