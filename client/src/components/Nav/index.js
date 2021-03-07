import React from 'react'
import { Link, useLocation } from 'react-router-dom'

import BootNavbar from 'react-bootstrap/Navbar'
import BootNav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'
import './nav.css'

export default function Nav() {
    const location = useLocation()

    return (
        <Container fluid className="bg-googreads">
            <BootNavbar expand="md" variant="dark">
                <BootNavbar.Brand>googreads</BootNavbar.Brand>
                <BootNavbar.Toggle aria-controls="main-nav" className="border-0" />
                <BootNavbar.Collapse id="main-nav">
                    <BootNav className="ms-auto">
                        <Link
                            to="/search"
                            className={`${['/', '/search'].includes(location.pathname)
                                ? "nav-link active"
                                : "nav-link"}`}
                        >
                            Search
                        </Link>

                        <Link
                            to="/saved"
                            className={`${location.pathname === "/saved"
                                ? "nav-link active"
                                : "nav-link"}`}
                        >
                            Saved
                        </Link>
                    </BootNav>
                </BootNavbar.Collapse>
            </BootNavbar>
        </Container>
    )
}
