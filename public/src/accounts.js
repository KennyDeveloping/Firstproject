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
function getTotalNumberOfBorrows(account, books) // use two parameters. accounts and books-array
{
	const accnt = account.id;
	let total = 0;		//set a variable	
	books.forEach((book) =>		
		book.borrows.forEach((borrow) => accnt === borrow.id && total++) //loop through array
	);
	return total;
}
function getBooksPossessedByAccount(account, books, authors) { // use three parameters
	let booksPossessed = [];
	books.forEach((book) => {
		let borrowArray = book.borrows;
		if (
			borrowArray.find(
				(borrow) => borrow.id === account.id && borrow.returned === false //return if borrow.returned false and account id checked out book id
			)
		) {
			booksPossessed.push(book);
		}
	});

	booksPossessed.forEach((book) => {
		let author = authors.find((person) => person.id === book.authorId);
		book["author"] = author;
	});//return array of books matching account
	console.log(booksPossessed);
	return booksPossessed;
}

module.exports = {
	findAccountById,
	sortAccountsByLastName,
	getTotalNumberOfBorrows,
	getBooksPossessedByAccount,
};
 
