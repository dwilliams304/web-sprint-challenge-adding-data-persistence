exports.seed = function(knex){
    return knex('tasks').insert([
        {task_description: 'Task Description 1', task_notes: 'Notes!', task_completed: false, project_id: 1},
        {task_description: 'Task Description 2', task_notes: 'Notes!', task_completed: false, project_id: 1},
        {task_description: 'Task Description 3', task_notes: 'Notes!', task_completed: false, project_id: 2},
        {task_description: 'Task Description 4', task_notes: 'Notes!', task_completed: false, project_id: 2},
        {task_description: 'Task Description 5', task_notes: 'Notes!', task_completed: false, project_id: 2},
        {task_description: 'Task Description 6', task_notes: 'Notes!', task_completed: false, project_id: 2},
        {task_description: 'Task Description 7', task_notes: 'Notes!', task_completed: false, project_id: 3},
        {task_description: 'Task Description 8', task_notes: 'Notes!', task_completed: false, project_id: 4},
        {task_description: 'Task Description 9', task_notes: 'Notes!', task_completed: false, project_id: 5},
        {task_description: 'Task Description 10', task_notes: 'Notes!', task_completed: false, project_id: 5},
        {task_description: 'Task Description 11', task_notes: 'Notes!', task_completed: false, project_id: 5},
        {task_description: 'Task Description 12', task_notes: 'Notes!', task_completed: false, project_id: 5},
        {task_description: 'Task Description 13', task_notes: 'Notes!', task_completed: false, project_id: 6},
        {task_description: 'Task Description 14', task_notes: 'Notes!', task_completed: false, project_id: 6},
        {task_description: 'Task Description 15', task_notes: 'Notes!', task_completed: false, project_id: 6},
        {task_description: 'Task Description 16', task_notes: 'Notes!', task_completed: false, project_id: 6},
        {task_description: 'Task Description 17', task_notes: 'Notes!', task_completed: false, project_id: 6},
        {task_description: 'Task Description 18', task_notes: 'Notes!', task_completed: false, project_id: 6},
    ])
}