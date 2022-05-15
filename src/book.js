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
    return reviews
  }
    reviews.push(criticReview)
    console.log(reviews)
    return reviews
}
// -----------
//     !reviews.includes(criticReview)
//     reviews.push(criticReview);
//   //if the reviews array does not include the criticReview
//   // !reviews.includes(criticReview)
//     console.log(reviews);
//     return reviews
//   }
//   ---------
//   //then push the criticReview into the reviews array
//     reviews.push(criticReview)
//     console.log(reviews)
//     return reviews
// }

function calculatePageCount(createTitle) {
    return createTitle.length * 20;
  }

function writeBook(bookTitle, bookCharacter, genre) {
  numOfPages = bookTitle.length * 20;
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
