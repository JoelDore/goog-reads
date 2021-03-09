import React, { useEffect, useState } from 'react'
import Section from '../components/Section'
import BookCard from '../components/BookCard'
import API from '../utils/API'
import Alert from 'react-bootstrap/Alert'

export default function Saved() {
    const [books, setBooks] = useState([])
    const [showAlert, setShowAlert] = useState(false);

    useEffect(() => {
        getBooks()
    }, [])

    const getBooks = async () => {
        const results = await API.getBooks()
        setBooks(results.data)
    }

    const handleDelete = async (bookId) => {
        await API.deleteBook(bookId)
        setBooks(books.filter(book => book._id !== bookId))
        setShowAlert(true)
        setTimeout(() => {
            setShowAlert(false)
        }, 2500);
    }

    return (
        <div>
            <Section title="Saved Books">
                {
                    books.length ? books.map((book) => (
                        <BookCard
                            key={book.link}
                            bookData={book}
                            handleDelete={handleDelete}
                        />
                    )) : <h3 className="text-muted">You haven't saved any books yet!</h3>
                }
                {
                    showAlert &&
                    <Alert
                        className="fixed-bottom w-25 ml-auto mr-3 rounded-0 text-center"
                        variant="danger"
                    >
                        <strong>Deleted!</strong>
                    </Alert>
                }
            </Section>
        </div>
    )
}
