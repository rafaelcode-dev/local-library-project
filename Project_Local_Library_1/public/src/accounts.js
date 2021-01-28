function findAccountById(accounts, id) {
  return accounts.find(account => account.id === id)
}

function sortAccountsByLastName(accounts) {
  return accounts.sort((a,b) =>
   a.name.last < b.name.last ? -1 : 1)
}

function numberOfBorrows(account, books) {
  let count = 0;
  for (let book of books) {
    for (let i = 0; i < book.borrows.length; i++) {
      if (account.id === book.borrows[i].id) {
        count += 1
      }
    }
  }
  return count
}

function getBooksPossessedByAccount({id}, books, authors) {
  accountBooks = books.filter(book => book.borrows[0].id === id)
  return accountBooks.map(book => {
    const author = authors.find(author => author.id === book.authorId)
    return {...book, author}
  })

}



module.exports = {
  findAccountById,
  sortAccountsByLastName,
  numberOfBorrows,
  getBooksPossessedByAccount,
};
