import React from 'react'
import logo from '../images/logo.png'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faFacebookF, faTwitter } from '@fortawesome/free-brands-svg-icons';

import { Link } from 'react-scroll'



export default function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark ">
            <div className="container">
                <a href="/" className="navbar-brand">
                    <img src={logo} alt="Logo" width="150" />
                </a>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNavDropdown"
                    aria-controls="navbarNavDropdown"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav ms-auto">

                        <li className="nav-item">
                            {/* toDo Change to=discover */}
                            <Link
                                to="discover"
                                className="nav-link"
                                smooth={true}
                                duration={500}
                                offset={-70}
                            >
                                Home
                            </Link>
                        </li>

                        <li className="nav-item">
                            <Link
                                to="discover"
                                className="nav-link"
                                smooth={true}
                                duration={500}
                                offset={-70}
                            >
                                Discover
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link
                                to="summary"
                                className="nav-link"
                                smooth={true}
                                duration={500}
                                offset={-70}
                            >
                                Summary
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link
                                to="takeaways"
                                className="nav-link"
                                smooth={true}
                                duration={500}
                                offset={-70}
                            >
                                Takeaways
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link
                                to="subscribe"
                                className="nav-link"
                                smooth={true}
                                duration={500}
                                offset={-70}
                            >
                                Subscribe
                            </Link>
                        </li>
                    </ul>
                    <span className="nav-item me-2">
                        <span className="fa-stack fa-lg">
                            <a href="#">
                                
                                <FontAwesomeIcon icon={faFacebookF} className="fa-stack-1x text-white" />
                            </a>
                        </span>
                    </span>

                    <span className="nav-item me-2">
                        <span className="fa-stack fa-lg">
                            <a href="#">
                               
                                <FontAwesomeIcon icon={faTwitter} className="fa-stack-1x text-white" />
                            </a>
                        </span>
                    </span>
                </div>
            </div>
        </nav>
    )
}