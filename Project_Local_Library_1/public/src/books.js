function findAuthorById(authors, id) {
  return authors.find(author => author.id === id)
}

function findBookById(books, id) {
  return books.find(book => book.id === id)
}

function partitionBooksByBorrowedStatus(books) {
  const loaned = books.filter(book => book.borrows[0].returned === false)
  const available = books.filter(book => book.borrows[0].returned === true)
  let booksArray = [loaned,available]
  return booksArray
}

function getBorrowersForBook(book, accounts) {
  return book.borrows.map(lend => {
    const borrower = accounts.find(a => a.id === lend.id)
    return { 
      ...lend,
      picture: borrower.picture,
      age: borrower.age,
      name: {
        first: borrower.name.first,
        last: borrower.name.last,
      },
      company: borrower.company,
      email: borrower.email,
      registered: borrower.registered
    }
  }).slice(0,10)
}

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
