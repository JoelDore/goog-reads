/* eslint-disable import/no-anonymous-default-export */
import axios from 'axios'

// Gets all books from DB
const getBooks = () => {
    return axios.get('/api/books')
}
// Saves a book to DB
const saveBook = (book) => {
    return axios.post('/api/books', book)
}
// Deletes a book by ID
const deleteBook = (id) => {
    return axios.delete(`/api/books/${id}`)
}
// Gets books from Google Books by search query
const getGoogleBooks = (query, startIndex) => {
    return axios.get(`/api/googlebooks?q=${query}&startIndex=${startIndex}`)
}

export default {
    getBooks,
    saveBook,
    deleteBook,
    getGoogleBooks
}