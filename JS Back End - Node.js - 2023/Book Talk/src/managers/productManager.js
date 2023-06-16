// Import model

const Book = require('../models/Book');

exports.allBooks = () => Book.find();

exports.addBook = (bookData) => Book.create(bookData);

exports.getProduct = (bookId) => Book.findById(bookId);

exports.deleteProduct = (bookId) => Book.findByIdAndDelete(bookId);

exports.editProduct = (bookId, bookData) => {
    Book.findByIdAndUpdate(bookId, bookData, { runValidators: true });
}