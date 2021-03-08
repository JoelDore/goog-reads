import React, { useRef, useState } from 'react'
import Section from '../components/Section'
import SearchBar from '../components/SearchBar'
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

    const handleSearch = async (e) => {
        e.preventDefault()
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
            <Section title="Book Search">
                <SearchBar handleSearch={handleSearch} inputRef={inputRef} />
            </Section>
            <Section title="Results">
                {
                    books.length ? books.map((book, idx) => (
                        <p key={book.etag}>{currIndex + idx + 1}: {book.volumeInfo.title}</p>
                    )) : <h3 className="text-muted">No results found</h3>
                }
            </Section>
            {currIndex !== 0 && <button type="button" onClick={prevPage}>Prev Page</button>}
            {books.length !== 0 && <button type="button" onClick={nextPage}>Next Page</button>}
        </div>
    )
}
