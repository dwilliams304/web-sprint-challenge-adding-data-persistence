// build your `Resource` model here
const db = require('../../data/dbConfig')

/*{
    "resource_id":1,
    "resource_name":"foo",
    "resource_description":null
}*/
async function create(resource){
    const id = await db('resources').insert(resource);
    const result = await db('resources').where('resource_id', id).first();
    return {resource_name: result.resource_name};
}

/*[{
    "resource_id":1,
    "resource_name":"foo",
    "resource_description":null
}]*/
function get(){
    return db('resources');
}


module.exports = {
    create,
    get
}