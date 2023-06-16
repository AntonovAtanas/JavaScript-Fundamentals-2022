// Import model

const Book = require('../models/Book');

exports.allBooks = () => Book.find();

exports.addBook = (bookData) => Book.create(bookData);

exports.getBook = (bookId) => Book.findById(bookId);

exports.deleteBook = (bookId) => Book.findByIdAndDelete(bookId);

exports.editBook = (bookId, bookData) => {
    return Book.findByIdAndUpdate(bookId, bookData, { runValidators: true });
};

exports.wish = async (bookId, userId) => {
    const foundBook = await Book.findById(bookId);

    foundBook.wishlist.push(userId);

    foundBook.save();
}