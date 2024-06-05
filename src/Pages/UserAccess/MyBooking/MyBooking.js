import React, { useState, useEffect } from "react";
import { Button, Container, Row, Col, Card } from 'react-bootstrap';
import useFirebase from './../../../Hooks/useFirebase';
import './MyBooking.css';

const MyBooking = () => {
    const { user } = useFirebase();
    const [myBooking, setMyBooking] = useState([]);
    const [control, setControl] = useState(false);

    useEffect(() => {
        if (user?.email) {
            fetch(`https://tournee-en-mymensingh.onrender.com/myBooking/${user.email}`)
                .then((res) => res.json())
                .then((data) => setMyBooking(data));
        }
    }, [control, user?.email]);

    // DELETE BOOKING
    const handleDelete = (id) => {
        const proceed = window.confirm('Are you sure you want to cancel?');
        if (proceed) {
            fetch(`https://tournee-en-mymensingh.onrender.com/deleteMyBooking/${id}`, {
                method: "DELETE",
                headers: { "Content-Type": "application/json" },
            })
                .then((res) => res.json())
                .then((data) => {
                    if (data.deletedCount) {
                        setControl(!control);
                        alert('Deleted successfully');
                    } else {
                        setControl(false);
                    }
                });
        }
    };

    return (
        <Container className="my-bookings-container">
            <h1 className="text-center my-4">My Bookings: {myBooking.length}</h1>
            <Row>
                {myBooking.map((pd, index) => (
                    <Col key={pd._id} md={6} lg={4} className="mb-4">
                        <Card className="h-100 booking-card">
                            <Card.Body>
                                <Card.Title>Booking #{index + 1}</Card.Title>
                                <Card.Text><strong>Name:</strong> {pd.name}</Card.Text>
                                <Card.Text><strong>Email:</strong> {pd.email}</Card.Text>
                                <Card.Text><strong>Contact:</strong> {pd.number}</Card.Text>
                                <Card.Text><strong>Tour Place:</strong> {pd.booked.title}</Card.Text>
                                <div className="d-flex justify-content-between align-items-center mt-3">
                                    <Button variant="success" className="status-button">{pd.status}</Button>
                                    <Button variant="danger" onClick={() => handleDelete(pd._id)} className="cancel-button">Cancel</Button>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    );
};

export default MyBooking;
