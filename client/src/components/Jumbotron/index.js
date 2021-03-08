import React from 'react'
import BootJumbotron from 'react-bootstrap/Jumbotron'

export default function Jumbotron() {
    return (
        <BootJumbotron className="text-center position-relative">
            <h1 style={{ fontWeight: "300" }}>Welcome to goog<b>reads</b>!</h1>
            <p>Search for and save your favorite books</p>
            <small style={{ position: "absolute", bottom: 10, right: 10 }}>Powered by Google Books</small>
        </BootJumbotron>
    )
}
