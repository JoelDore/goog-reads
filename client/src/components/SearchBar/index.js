import React from 'react'
import Container from 'react-bootstrap/Container'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

export default function SearchBar({ handleSearch, inputRef }) {
    return (
        <Container className="border p-4">
            <Form onSubmit={handleSearch}>
                <h2 className="mb-3">Book Search</h2>
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
        </Container>
    )
}
