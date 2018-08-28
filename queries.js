const database = require('./database-connection')

module.exports = {
  list(tableName){
    return database(tableName).select()
},
  read(tableName, id){
    return database(tableName).select().where('id', id).first()
},
  create(tableName, newForm){
    return database(tableName).insert(newForm).returning('*').then(record => record[0])
},
  update(id, tableName, newForm){
    return database(tableName).update(newForm).where('id', id).returning("*").then(record => record[0])
},
  delete(tableName, id){
    return database(tableName).delete().where('id', id)
}
}