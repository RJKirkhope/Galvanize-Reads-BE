exports.up = function(knex, Promise) {
  return knex.schema.createTable('books', function(table){
    table.increments()
    table.text('BookTitle')
    table.text('BookGenre')
    table.text('BookDescription')
    table.text('BookCoverURL')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('books')
};
