import React from 'react'
import { Link, useLocation } from 'react-router-dom'

import BootNavbar from 'react-bootstrap/Navbar'
import BootNav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'

export default function Nav() {
    const location = useLocation()

    return (
        <Container fluid>
            <BootNavbar expand="md">
                <BootNavbar.Brand href="#home">googreads</BootNavbar.Brand>
                <BootNavbar.Toggle aria-controls="main-nav" />
                <BootNavbar.Collapse id="main-nav">
                    <BootNav className="ms-auto">
                        <Link
                            to="/search"
                            className={
                                `${location.pathname === "/" || location.pathname === "/search"
                                    ? "nav-link active"
                                    : "nav-link"}`
                            }
                        >
                            Search
                        </Link>

                        <Link
                            to="/saved"
                            className={`${location.pathname === "/saved" ? "nav-link active" : "nav-link"}`}
                        >
                            Saved
                        </Link>
                    </BootNav>
                </BootNavbar.Collapse>
            </BootNavbar>
        </Container>
    )
}
