function createTitle(bookIdea) {
  return `The ${bookIdea}`
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












//check array for duplicate value
//if not duplicate, add userReview to array

// function saveReview(criticReview, reviews) {
//   if (reviews.includes(criticReview)) {
//   } else {
//     reviews.push(userReview)
//   }
//   return reviews
// };

// refactor
// function saveReview(criticReview, reviews) {
//   if (!reviews.includes(criticReview)) {
//   } else { remove
//     reviews.push(userReview) leave
//   }
//   return reviews leave
// };

module.exports = {
   createTitle,
   buildMainCharacter,
   saveReview,
  // calculatePageCount,
  // writeBook,
  // editBook
}
