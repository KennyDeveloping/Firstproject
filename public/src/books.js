function findAuthorById(authors, id) {
	// find the author by matching id
	let found = authors.find((author) => author.id === id);
	//return found author
	return found;
}
function findBookById(books, id) {
	//find the book now with id
	let result = books.find((book) => `${book.id }` === id); //use the destucturing method for book.id(object)
	//return result
	return result;
}
function partitionBooksByBorrowedStatus(books) {
	let borrowed = books.filter((book) => book.borrows[0].returned === false);
	let returned = books.filter((book) => book.borrows[0].returned === true);
	return [borrowed, returned];
} //find more practice with filters

function getBorrowersForBook(book, accounts) {
	let result = [];
	let borrowArray = book.borrows;
	borrowArray.forEach((borrow) => {
		let account = accounts.find((acc) => acc.id === borrow.id);
		let obj = account;
		obj["returned"] = borrow.returned;
		result.push(obj);
	});
	console.log(result);
	return result.slice(0, 10);
}

module.exports = {
	findAuthorById,
	findBookById,
	partitionBooksByBorrowedStatus,
	getBorrowersForBook,
};
