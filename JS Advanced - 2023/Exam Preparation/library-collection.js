class LibraryCollection {
    constructor(capacity) {
        this.capacity = capacity;
        this.books = [];
    }

    addBook(bookName, bookAuthor) {
        if (this.books.length >= this.capacity) {
            throw new Error('Not enough space in the collection.');
        };

        let bookInfo = { [bookName]: { bookAuthor, payed: false } };
        this.books.push(bookInfo);
        return `The ${bookName}, with an author ${bookAuthor}, collect.`
    };

    payBook(bookName) {
        let foundElement = this.books.find(element => element[bookName]);
        let index = this.books.indexOf(foundElement);

        if (foundElement === undefined) {
            throw new Error(`${bookName} is not in the collection.`);
        } else if (foundElement[bookName]['payed'] === true) {
            throw new Error(`${bookName} has already been paid.`)
        } else {
            this.books[index][bookName]['payed'] = true;
            return `${bookName} has been successfully paid.`
        }
    };

    removeBook(bookName) {
        let foundElement = this.books.find(element => element[bookName]);
        let index = this.books.indexOf(foundElement);

        if (foundElement === undefined) {
            throw new Error(`The book, you're looking for, is not found.`);
        } else if (foundElement[bookName]['payed'] === false) {
            throw new Error(`${bookName} need to be paid before removing from the collection.`)
        } else {
            this.books.splice(index, 1);
            return `${bookName} remove from the collection.`
        }
    };

    getStatistics(bookAuthor) {
        if (bookAuthor === undefined) {
            let res = [];
            res.push(`The book collection has ${this.capacity - this.books.length} empty spots left.`);

            this.books.sort((a, b) => {
                let a1 = Object.entries(a);
                let b1 = Object.entries(b);

                return a1[0][0].localeCompare(b1[0][0]);
            });

            for (const iterator of this.books) {
                for (const key in iterator) {
                    if (iterator[key]['payed'] == true) {
                        res.push(`${key} == ${iterator[key]['bookAuthor']} - Has Paid.`)
                    } else {
                        res.push(`${key} == ${iterator[key]['bookAuthor']} - Not Paid.`)
                    }
                }
            }
            return res.join('\n')
            
        } else {
            let res = [];

            for (const iterator of this.books) {
                for (const key in iterator) {
                    if (iterator[key]['bookAuthor'] == bookAuthor) {
                        if (iterator[key]['payed'] == true) {
                            res.push(`${key} == ${bookAuthor} - Has Paid.`)
                        } else {
                            res.push(`${key} == ${bookAuthor} - Not Paid.`)
                        }
                    }
                }
            }
            if (res.length == 0) {
                throw new Error(`${bookAuthor} is not in the collection.`)
            } else {
                return res.join('\n')
            }
        }
    }
}

const library = new LibraryCollection(5)
library.addBook('Don Quixote', 'Miguel de Cervantes');
library.addBook('Ulysses', 'James Joyce');
library.addBook('In Search of Lost Time', 'Marcel Proust');
library.payBook('Don Quixote');
console.log(library.getStatistics());


// The book collection has 2 empty spots left.
// Don Quixote == Miguel de Cervantes - Has Paid.
// In Search of Lost Time == Marcel Proust - Not Paid.
// Ulysses == James Joyce - Not Paid.




