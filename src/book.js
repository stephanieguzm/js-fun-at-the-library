function createTitle(greatBook) {
  return `The ${greatBook}`
}

function buildMainCharacter(name, age, pronouns) {
  return {
    name: name,
    age: age,
    pronouns: pronouns,
  }
};

function saveReview(criticReview, reviews) {
  //only unique reviews are allowed to return
  if (reviews.includes(criticReview)) {
    return reviews
  }
    reviews.push(criticReview)
}

function calculatePageCount(createTitle) {
    return createTitle.length * 20;
  }

function writeBook(bookTitle, bookCharacter, genre) {
  var numOfPages = bookTitle.length * 20;
  return {
    title: bookTitle,
    mainCharacter: bookCharacter,
    pageCount: numOfPages,
    genre: genre,
  }
}


function editBook(bookName) {
  bookName.pageCount = bookName.pageCount * 0.75
  return bookName.pageCount;
}



module.exports = {
   createTitle,
   buildMainCharacter,
   saveReview,
   calculatePageCount,
   writeBook,
   editBook
}
