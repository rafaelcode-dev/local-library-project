const { partitionBooksByBorrowedStatus } = require("./books");

function totalBooksCount(books) {
  return books.length
}

function totalAccountsCount(accounts) {
  return accounts.length
}

function booksBorrowedCount(books) {
  let count = 0;
  for(let book of books) {
    if (book.borrows[0].returned === false) {
      count++
    }
  }
  return count
}

function getMostCommonGenres(books) {
  const genres = books.reduce((acc,book) => {
  acc.hasOwnProperty(book.genre) 
  ? acc[book.genre]++ 
  : acc[book.genre] = 1
  return acc
  }, {}) 
  let newGenres = Object.keys(genres)
  return newGenres.map(genre => {
    return {
      name: genre,
      count: genres[genre]
    }
  }).sort((a,b) => b.count - a.count).slice(0,5)
}
//helper function is called
function getMostPopularBooks(books) {
  newList = sortList(books)
  return newList.map(a => {
    return {
      name: a.title,
      count: a.borrows.length
    }
  }).slice(0,5)
  
}
//helper function is called
function getMostPopularAuthors(books, authors) {
  const sortedBooks = sortList(books)
  let authorIds = sortedBooks.map(book => book.authorId)
  authorIds = authorIds.map(id => authors.find(author => id === author.id))
  return authorIds.map(author => {
    return {
      name: `${author.name.first} ${author.name.last}`,
      count: sortedBooks.reduce((acc, book) => book.authorId === author.id 
      ? acc + book.borrows.length : acc,0)
    }
  }).slice(0,5)
  }


//helper function
function sortList(list) {
  return newList = list.sort((a,b) => b.borrows.length - a.borrows.length)
}


module.exports = {
  totalBooksCount,
  totalAccountsCount,
  booksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
