import React, { useRef, useState } from 'react'
import Section from '../components/Section'
import SearchBar from '../components/SearchBar'
import Pagination from '../components/Pagination'
import PaginationBtn from '../components/PaginationBtn'
import API from '../utils/API'
import BookCard from '../components/BookCard'

export default function Search() {
    const inputRef = useRef()

    const [books, setBooks] = useState([])
    const [currIndex, setCurrIndex] = useState(0)
    const [currQuery, setCurrQuery] = useState("")

    const getBooks = async (query, startIndex) => {
        const results = await API.getGoogleBooks(query, startIndex)
        setBooks(results.data.items)
    }

    const handleSave = async (bookData) => {
        await API.saveBook({
            title: bookData.title,
            authors: bookData.authors,
            description: bookData.description,
            image: bookData.imageLinks.thumbnail,
            link: bookData.infoLink
        })
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
                        <BookCard key={book.etag} bookData={book.volumeInfo} handleSave={handleSave} />
                    )) : <h3 className="text-muted">No results found</h3>
                }
                <Pagination>
                    {currIndex !== 0 &&
                        <PaginationBtn direction="Prev" paginate={prevPage} />
                    }
                    {books.length !== 0 &&
                        <PaginationBtn direction="Next" paginate={nextPage} />
                    }
                </Pagination>
            </Section>
        </div>
    )
}
