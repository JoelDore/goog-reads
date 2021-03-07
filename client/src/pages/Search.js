import React, { useRef, useState } from 'react'
import API from '../utils/API'

export default function Search() {
    const inputRef = useRef()

    const [books, setBooks] = useState([])
    const [currIndex, setCurrIndex] = useState(0)

    const searchBooks = async () => {
        const query = inputRef.current.value
        const results = await API.getGoogleBooks(query, currIndex)
        setBooks(results.data.items)
        inputRef.current.value = ""
    }

    return (
        <div>
            <h1>Search</h1>
            <input type="text" name="query" ref={inputRef} />
            <button type="button" onClick={searchBooks}>Search books</button>
            {
                books && books.map((book, idx) => (
                    <p key={book.id}>{currIndex + 1 + idx}: {book.volumeInfo.title}</p>
                ))
            }
        </div>
    )
}
