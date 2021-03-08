import React from 'react'
import { Link, useLocation } from 'react-router-dom'

import BootNavbar from 'react-bootstrap/Navbar'
import BootNav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'
import './nav.css'
import logo from '../../assets/images/googreads-logo.svg'
export default function Nav() {
    const location = useLocation()

    return (
        <Container fluid className="bg-googreads">
            <BootNavbar expand="md" variant="dark" className="px-0">
                <BootNavbar.Brand>
                    <img src={logo} alt="googreads logo" width={32} height={32} className="mr-2 ml-0" />
                    <span>goog<b>reads</b></span>
                </BootNavbar.Brand>
                <BootNavbar.Toggle aria-controls="main-nav" className="border-0" />
                <BootNavbar.Collapse id="main-nav">
                    <BootNav className="mr-auto ml-3">
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
