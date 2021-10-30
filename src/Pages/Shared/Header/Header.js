import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import useAuth from './../../../Hooks/useAuth';

const Header = () => {
    const { user, logOut } = useAuth();
    return (
        <>
            <Navbar bg="light" variant="light" sticky="top" collapseOnSelect expand="lg">
                <Container>
                    <Navbar.Brand Link as={Link} to="/home" className="fw-bolder text-success">Tournee en Mymensingh</Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-center">
                        <Nav.Link as={Link} to="/home">Home</Nav.Link>
                        <Nav.Link as={HashLink} to="/home#services">Places</Nav.Link>
                        <Nav.Link as={HashLink} to="/home#guides">Guides</Nav.Link>
                        <Nav.Link as={HashLink} to="/home#welcome">Welcome</Nav.Link>

                        {user?.email ?
                            <Nav.Link as={Link} to="/myBooking">My_Booking</Nav.Link> : ''}
                        {user?.email ?
                            <Nav.Link as={Link} to="/allBooking">All_Booking</Nav.Link> : ''}
                        {user?.email ?
                            <Nav.Link as={Link} to="/addPlace">Add_Place</Nav.Link> : ''}

                        {user?.email ?
                            (
                                <Navbar.Text className="">
                                    Signed in as: <a href="#login">{user?.displayName}</a>
                                    {user?.photoURL ?
                                        <img className="mx-3 border border-success border-2 rounded-circle" src={user?.photoURL} width="40" height="40" alt="" /> :
                                        <img className="mx-3 border border-success border-2 rounded-circle" src={'https://dm0qx8t0i9gc9.cloudfront.net/watermarks/image/rDtN98Qoishumwih/scared-cartoon-face-expression_XkDKCZ_SB_PM.jpg'} width="40" height="40" alt="" />
                                    }
                                    <Button onClick={logOut} className="btn fw-bolder btn-success me-2">Logout</Button>
                                </Navbar.Text>
                            )
                            :
                            <Nav.Link as={Link} to="/login">Login</Nav.Link>}

                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;