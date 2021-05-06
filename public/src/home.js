function getTotalBooksCount(books) {
	let total = 0;
	for (let i = 0; i < books.length; i++) {
		total++;
	}
	return total;
}
function getTotalAccountsCount(accounts) {
	let total = 0;
	for (let i = 0; i < accounts.length; i++) {
		total++;
	}
	return total;
}
function getBooksBorrowedCount(books) {
	let result = books.reduce((acc, element) => {
		let returns = element.borrows[0].returned;
		if (!returns) acc++;
		return acc;
	}, 0);
	return result;
}
function getMostCommonGenres(books) {
	const bookGenres = books.map((book) => book.genre);
	const temp = [];
	bookGenres.map((genre) => {
		const genreLocation = temp.findIndex((element) => element.name === genre);
		if (genreLocation >= 0) {
			temp[genreLocation].count = temp[genreLocation].count + 1;
		} else {
			temp.push({ name: genre, count: 1 });
		}
	});
	temp.sort((a, b) => b.count - a.count);
	if (temp.length > 5) {
		return temp.slice(0, 5);
	}
	return temp;
}

function getMostPopularBooks(books) {
	const arr = [];
	books.forEach((book) => {
		const count = book.borrows.length;
		const name = book.title;
		arr.push({ name, count });
	});
	return _sortAndSlice(arr, 5);
}

function getMostPopularAuthors(books, authors) {
	let returnArr = [];
	authors.forEach((author) => {
		let returnAuthor = {
			name: `${author.name.first} ${author.name.last}`,
			count: 0,
		};
		books.forEach((book) => {
			if (book.authorId === author.id) {
				returnAuthor.count += book.borrows.length;
			}
		});
		returnArr.push(returnAuthor);
	});
	return _sortAndSlice(returnArr, 5);
}
function _sortAndSlice(array, length) {
	return array.sort((a, b) => (a.count < b.count ? 1 : -1)).slice(0, length);
}

function _newObjectstoArray(object) {
	let arr = [];

	for (let i = 0; i < Object.keys(object).length; i++) {
		let name = Object.keys(object)[i];
		let count = Object.values(object)[i];
		arr[i] = { name, count };
	}
	return arr;
}
module.exports = {
	getTotalBooksCount,
	getTotalAccountsCount,
	getBooksBorrowedCount,
	getMostCommonGenres,
	getMostPopularBooks,
	getMostPopularAuthors,
};
