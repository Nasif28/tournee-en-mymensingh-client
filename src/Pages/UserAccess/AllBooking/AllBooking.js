import axios from "axios";
import React, { useEffect, useState } from "react";
import { Table, Button, Container, Row, Col, Card } from "react-bootstrap";
import './AllBooking.css';

const AllBooking = () => {
    const [booking, setBooking] = useState([]);
    const [control, setControl] = useState(false);
    const [status, setStatus] = useState(false);

    useEffect(() => {
        fetch("https://tournee-en-mymensingh.onrender.com/allBooking")
            .then((res) => res.json())
            .then((data) => setBooking(data));
    }, [control, status]);

    // DELETE BOOKING
    const handleDelete = (id) => {
        const proceed = window.confirm('Are you sure you want to delete?');
        if (proceed) {
            fetch(`https://tournee-en-mymensingh.onrender.com/deleteBooking/${id}`, {
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

    // HANDLE STATUS
    const handleStatus = (id) => {
        axios.put(`https://tournee-en-mymensingh.onrender.com/updateStatus`, { id })
            .then(res => {
                console.log("Your order Approved");
                setStatus(true);
            });
    };

    return (
        <Container className="all-bookings-container">
            <h1 className="text-center my-4">Total Bookings: {booking.length}</h1>
            <Row>
                {booking.map((pd, index) => (
                    <Col key={pd._id} md={6} lg={4} className="mb-4">
                        <Card className="h-100">
                            <Card.Body>
                                <Card.Title>Booking #{index + 1}</Card.Title>
                                <Card.Text><strong>Name:</strong> {pd.name}</Card.Text>
                                <Card.Text><strong>Email:</strong> {pd.email}</Card.Text>
                                <Card.Text><strong>Contact:</strong> {pd.number}</Card.Text>
                                <Card.Text><strong>Tour Place:</strong> {pd.booked.title}</Card.Text>
                                <div className="d-flex justify-content-between align-items-center">
                                    {(pd.status === 'Approved') ?
                                        <Button variant="warning">{pd.status}</Button> :
                                        <Button variant="primary" onClick={() => handleStatus(pd._id)}>{pd.status}</Button>
                                    }
                                    <Button variant="danger" onClick={() => handleDelete(pd._id)}>Delete</Button>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    );
};

export default AllBooking;
