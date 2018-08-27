exports.up = function(knex, Promise) {
  return knex.schema.createTable('authors', function(table){
    table.increments()
    table.text('AuthorFirstName')
    table.text('AuthorLastName')
    table.text('AuthorBiography')
    table.text('AuthorPortraitURL')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('authors')
};
