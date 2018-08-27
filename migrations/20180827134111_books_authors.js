exports.up = function(knex, Promise) {
  return knex.schema.createTable('authors_books', function(table){
  table.integer('authors_info').references('authors.id').onDelete('cascade')
  table.integer('books_info').references('books.id').onDelete('cascade')
  table.primary(['authors_info','books_info'])

  })

};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('authors_books')
};
