import React, { useRef, useState } from 'react'
import API from '../utils/API'

export default function Search() {
    const inputRef = useRef()

    const [books, setBooks] = useState([])
    const [currIndex, setCurrIndex] = useState(0)
    const [currQuery, setCurrQuery] = useState("")

    const getBooks = async (query, startIndex) => {
        const results = await API.getGoogleBooks(query, startIndex)
        setBooks(results.data.items)
    }

    const handleSearch = async () => {
        // Get query from input & validate
        const query = inputRef.current.value
        if (!query) return

        // Get books & set current query
        await getBooks(query, 0)
        setCurrQuery(query)
        setCurrIndex(0)
    }

    const nextPage = async () => {
        const nextIndex = currIndex + 10
        // Get next page of books & update index
        await getBooks(currQuery, nextIndex)
        setCurrIndex(nextIndex)
    }

    const prevPage = async () => {
        const prevIndex = currIndex - 10
        // Get prev page of books & update index
        await getBooks(currQuery, prevIndex)
        setCurrIndex(prevIndex)
    }

    return (
        <div>
            <h1>Search</h1>
            <input type="text" name="query" ref={inputRef} />
            <button type="button" onClick={handleSearch}>Search books</button>
            {
                books.length ? books.map((book, idx) => (
                    <p key={book.id}>{currIndex + idx + 1}: {book.volumeInfo.title}</p>
                )) : <h3>No results found</h3>
            }
            {currIndex !== 0 && <button type="button" onClick={prevPage}>Prev Page</button>}
            {books.length !== 0 && <button type="button" onClick={nextPage}>Next Page</button>}
        </div>
    )
}
