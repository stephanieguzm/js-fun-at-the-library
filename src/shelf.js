function shelfBook(bookies, sciFiShelf) {
  if (sciFiShelf.length < 3) {
  sciFiShelf.unshift(bookies)
}
  // console.log(shelf)
  return shelf
}

function unshelfBook(bookies, sciFiShelf) {
  // for loop runs through every element in the sciFiShelf array
  for (var i = 0; i < sciFiShelf.length; i++) {
    // bookies strictly equals to the specific "string" in the title key
    if (sciFiShelf[i].title === bookies) {
      // we want to splice at the same position where i matches value to be removed
      return sciFiShelf.splice(i, 1)
    }
  }
}

function listTitles(titles, bookNames) {



}
// return the titles "Hyperion, Dune, Ender's Game"


module.exports = {
    shelfBook,
    unshelfBook,
    listTitles,
  // searchShelf
};
