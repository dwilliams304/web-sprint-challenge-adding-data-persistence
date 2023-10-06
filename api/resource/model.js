// build your `Resource` model here
const db = require('../../data/dbConfig')

/*{
    "resource_id":1,
    "resource_name":"foo",
    "resource_description":null
}*/
function create(resource){
    return db('resources');
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