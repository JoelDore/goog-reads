import axios from 'axios'

// Gets all books from DB
const getBooks = () => {
    axios.get('/api/books')
}
// Saves a book to DB
const saveBook = (book) => {
    axios.post('/api/books', book)
}
// Deletes a book by ID
const deleteBook = (id) => {
    axios.get(`/api/books/${id}`)
}

export {
    getBooks,
    saveBook,
    deleteBook
}