function findAccountById(accounts, id) {
	let result = accounts.find((account) => `${account.id}`  === id); //use the find method to match id . use the object destucting 
	//return
	return result;
}

function sortAccountsByLastName(accounts) {
	//use the sort method to arrange last names
	let result = accounts.sort((nameA, nameB) => {
		return `${nameA.name.last}` < `${nameB.name.last}` ? -1 : 1;
	}); //result
	return result;
}
function getTotalNumberOfBorrows(account, books) {
	const accnt = account.id;
	let total = 0;			
	books.forEach((book) =>		
		book.borrows.forEach((borrow) => accnt === borrow.id && total++)
	);
	return total;
}
function getBooksPossessedByAccount(account, books, authors) {
	let booksPossessed = [];
	books.forEach((book) => {
		let borrowArray = book.borrows;
		if (
			borrowArray.find(
				(borrow) => borrow.id === account.id && borrow.returned === false
			)
		) {
			booksPossessed.push(book);
		}
	});

	booksPossessed.forEach((book) => {
		let author = authors.find((person) => person.id === book.authorId);
		book["author"] = author;
	});
	console.log(booksPossessed);
	return booksPossessed;
}

module.exports = {
	findAccountById,
	sortAccountsByLastName,
	getTotalNumberOfBorrows,
	getBooksPossessedByAccount,
};
