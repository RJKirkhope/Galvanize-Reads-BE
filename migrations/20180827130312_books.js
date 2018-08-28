exports.up = function(knex, Promise) {
  return knex.schema.createTable('books', function(table){
    table.increments()
    table.text('book_title')
    table.text('book_genre')
    table.text('book_description')
    table.text('book_cover_URL')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('books')
};
