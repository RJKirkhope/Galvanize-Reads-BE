const database = require('./database-connection')

module.exports = {
  listBooks(){
    return database('books')
      .select('books.book_cover_URL', 'books.book_title', 'authors.author_first', 'authors.author_last', 'books.book_genre', 'books.book_description')
      .from('books')
      .innerJoin('authors_books', 'books.id', 'authors_books.books_info')
      .innerJoin('authors', 'authors.id', 'authors_books.authors_info')
  },
  listAuthors(){
    return database('authors')
      .select('authors.author_portrait_URL', 'authors.author_first', 'authors.author_last', 'authors.author_biography', 'books.book_title')
      .from('authors')
      .innerJoin('authors_books', 'authors.id', 'authors_books.authors_info')
      .innerJoin('books', 'books.id', 'authors_books.books_info')
  },
  list(tableName){
    return database(tableName).select()
},
  read(tableName, id){
    return database(tableName).select().where('id', id).first()
},
  create(tableName, newPost){
    return database(tableName).insert(newPost).returning('*').then(record => record[0])
},
  update( tableName, id, newUpdate){
    return database(tableName).update(newUpdate).where('id', id).returning("*").then(record => record[0])
},
  delete(tableName, id){
    return database(tableName).delete().where('id', id)
}
}