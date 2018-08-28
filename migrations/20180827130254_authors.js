exports.up = function(knex, Promise) {
  return knex.schema.createTable('authors', function(table){
    table.increments()
    table.text('author_first')
    table.text('author_last')
    table.text('author_biography')
    table.text('author_portrait_URL')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('authors')
};
