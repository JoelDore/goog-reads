import React from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

export default function SearchBar({ handleSearch, inputRef }) {
    return (
        <Form onSubmit={handleSearch}>
            <Form.Group>
                <Form.Control
                    ref={inputRef}
                    type="text"
                    className="rounded-0"
                    placeholder="ex: Lord of the Rings"
                />
            </Form.Group>
            <Button type="submit" className="bg-googreads rounded-0">Search Books</Button>
        </Form>
    )
}
