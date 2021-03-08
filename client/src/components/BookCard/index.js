import React from 'react'
import Row from 'react-bootstrap/Row'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Image from 'react-bootstrap/Image'
import Col from 'react-bootstrap/esm/Col'

export default function BookCard({ bookData, handleSave, handleDelete }) {
    // Compute maximum characters for book description
    const maxChars = window.innerWidth < 768 ? 300 : 600

    return (
        <Card className="text-sm-left text-center rounded-0 my-2 border-dark shadow">
            <Card.Header>
                <Row>
                    <Col>
                        <Card.Title>{bookData.title}</Card.Title>
                        <Card.Subtitle className="text-muted mb-2">
                            {
                                bookData.authors &&
                                `Written by: ${bookData.authors.join(", ")}`
                            }
                        </Card.Subtitle>
                    </Col>
                    <Col sm={4} className="text-sm-right">
                        <a href={bookData.infoLink} target="_blank" rel="noreferrer">
                            <Button size="sm" className="bg-googreads rounded-0 mx-1">View</Button>
                        </a>
                        {
                            handleSave &&
                            <Button size="sm" className="bg-googreads rounded-0 mx-1" onClick={() => handleSave(bookData)}>Save</Button>
                        }
                    </Col>
                </Row>
            </Card.Header>
            <Card.Body>
                <Row>
                    <Col>
                        {bookData.imageLinks ? (
                            <Image
                                src={bookData.imageLinks.thumbnail}
                                alt={`Book cover: ${bookData.title}`}
                                className="mb-3 mb-sm-0"
                            />
                        ) : (
                            <div className="border border-dark bg-light d-flex text-center align-items-center"
                                style={{ width: "8rem", height: "12rem" }}>
                                No image available
                            </div>
                        )}
                    </Col>
                    <Col sm={9}>
                        <p>
                            {
                                bookData.description?.slice(0, maxChars).trim().concat("...") ||
                                "No description available."
                            }
                        </p>
                    </Col>
                </Row>
            </Card.Body>
        </Card>
    )
}
