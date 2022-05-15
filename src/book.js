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
  if (reviews.includes(criticReview)) {
 } else {
  reviews.push(criticReview)
  }
//    console.log(reviews)
  return reviews
}


function calculatePageCount(createTitle) {
  // this calculation also returned the correct value but is it best practice?
  // return createTitle.length * 20;
  var pageCalc = createTitle.length * 20;
  // console.log(pageCalc)
  return pageCalc
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
  return bookName.pageCount = bookName.pageCount * 0.75
}



module.exports = {
   createTitle,
   buildMainCharacter,
   saveReview,
   calculatePageCount,
   writeBook,
   editBook
}
