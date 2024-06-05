import React, { useState, useEffect } from 'react';
import { Button, Container, Nav, Navbar, Dropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import useAuth from './../../../Hooks/useAuth';
import './Header.css';

const Header = () => {
    const { user, logOut } = useAuth();
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 992);

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth <= 992);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <>
            <Navbar bg="light" variant="light" sticky="top" collapseOnSelect expand="lg" className="py-3">
                <Container>
                    <Navbar.Brand as={Link} to="/home" className="fw-bolder text-success">Tournee en Mymensingh</Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        {isMobile ? (
                            <Dropdown alignRight>
                                <Dropdown.Toggle variant="light" id="dropdown-basic" className="w-100 text-right">

                                    <Dropdown.Item as={Link} to="/home">Home</Dropdown.Item>
                                    <Dropdown.Item as={HashLink} to="/home#services">Places</Dropdown.Item>
                                    <Dropdown.Item as={HashLink} to="/home#guides">Guides</Dropdown.Item>
                                    <Dropdown.Item as={HashLink} to="/home#welcome">Welcome</Dropdown.Item>
                                    {user?.email && (
                                        <>
                                            <Dropdown.Item as={Link} to="/myBooking">My Booking</Dropdown.Item>
                                            <Dropdown.Item as={Link} to="/allBooking">All Booking</Dropdown.Item>
                                            <Dropdown.Item as={Link} to="/addPlace">Add Place</Dropdown.Item>

                                            <Dropdown.Divider />

                                            <Navbar.Text className="">
                                                {user?.displayName}
                                                <img
                                                    className="mx-1 border border-success border-2 rounded-circle"
                                                    src={user?.photoURL || 'https://dm0qx8t0i9gc9.cloudfront.net/watermarks/image/rDtN98Qoishumwih/scared-cartoon-face-expression_XkDKCZ_SB_PM.jpg'}
                                                    width="30"
                                                    height="30"
                                                    alt="User"
                                                />
                                                <Button onClick={logOut} className="btn fw-bolder btn-success px-2 py-1">Logout</Button>
                                            </Navbar.Text>



                                        </>
                                    )}
                                    {!user?.email && <Dropdown.Item as={Link} to="/login">Login</Dropdown.Item>}

                                </Dropdown.Toggle>

                            </Dropdown>
                        ) : (
                            <Nav className="ms-auto">
                                <Nav.Link as={Link} to="/home" className="me-3">Home</Nav.Link>
                                <Nav.Link as={HashLink} to="/home#services" className="me-3">Places</Nav.Link>
                                <Nav.Link as={HashLink} to="/home#guides" className="me-3">Guides</Nav.Link>
                                <Nav.Link as={HashLink} to="/home#welcome" className="me-3">Welcome</Nav.Link>
                                {user?.email && (
                                    <>
                                        <Nav.Link as={Link} to="/myBooking" className="me-3">My Booking</Nav.Link>
                                        <Nav.Link as={Link} to="/allBooking" className="me-3">All Booking</Nav.Link>
                                        <Nav.Link as={Link} to="/addPlace" className="me-3">Add Place</Nav.Link>
                                    </>
                                )}
                                {user?.email ? (
                                    <Navbar.Text className="">
                                        <img
                                            className="mx-1 border border-success border-2 rounded-circle"
                                            src={user?.photoURL || 'https://dm0qx8t0i9gc9.cloudfront.net/watermarks/image/rDtN98Qoishumwih/scared-cartoon-face-expression_XkDKCZ_SB_PM.jpg'}
                                            width="30"
                                            height="30"
                                            alt="User"
                                        />
                                        <Button onClick={logOut} className="btn fw-bolder btn-success px-2 py-1">Logout</Button>
                                    </Navbar.Text>


                                ) : (
                                    <Nav.Link onClick={logOut} as={Link} to="/login">Login</Nav.Link>
                                )}
                            </Nav>
                        )}
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;
