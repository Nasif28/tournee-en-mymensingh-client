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
                    <Navbar.Collapse className="justify-content-end">
                        <Nav.Link as={Link} to="/home" className="me-3">Home</Nav.Link>
                        <Nav.Link as={HashLink} to="/home#services" className="me-3">Places</Nav.Link>
                        <Nav.Link as={HashLink} to="/home#guides" className="me-3">Guides</Nav.Link>
                        <Nav.Link as={HashLink} to="/home#welcome" className="me-3">Welcome</Nav.Link>

                        {user?.email ?
                            <Nav.Link as={Link} to="/myBooking" className="me-3">My_Booking</Nav.Link> : ''}
                        {user?.email ?
                            <Nav.Link as={Link} to="/allBooking" className="me-3">All_Booking</Nav.Link> : ''}
                        {user?.email ?
                            <Nav.Link as={Link} to="/addPlace" className="me-3">Add_Place</Nav.Link> : ''}

                        {user?.email ?
                            (
                                <Navbar.Text className="">
                                    Signed: <a href="#login">{user?.displayName}</a>
                                    {user?.photoURL ?
                                        <img className="mx-1 border border-success border-2 rounded-circle" src={user?.photoURL} width="30" height="30" alt="" /> :
                                        <img className="mx-1 border border-success border-2 rounded-circle" src={'https://dm0qx8t0i9gc9.cloudfront.net/watermarks/image/rDtN98Qoishumwih/scared-cartoon-face-expression_XkDKCZ_SB_PM.jpg'} width="40" height="40" alt="" />
                                    }
                                    <Button onClick={logOut} className="btn fw-bolder btn-success px-2 py-1">Logout</Button>
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