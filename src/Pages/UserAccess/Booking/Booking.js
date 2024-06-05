import React, { useEffect, useState } from 'react';
import './Booking.css';
import { useParams } from 'react-router';
import { Button, Container, Row, Col, Card, Form } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import useAuth from '../../../Hooks/useAuth';
import axios from 'axios';

const Booking = () => {
    // Show Single Service by ID
    const { serviceId } = useParams();
    const [service, setService] = useState({});

    useEffect(() => {
        fetch(`https://tournee-en-mymensingh.onrender.com/places/${serviceId}`)
            .then(res => res.json())
            .then(data => setService(data));
    }, [serviceId]);

    // Click and Book Service
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const { user } = useAuth();

    const onSubmit = data => {
        data.status = "Pending";
        data.booked = service;
        axios.post('https://tournee-en-mymensingh.onrender.com/booking', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('Added successfully');
                    reset();
                }
            });
    };

    return (
        <Container id="details" className="my-5">
            <h1 className="text-center fw-bold text-success mb-5">Details of {service?.title}</h1>
            <Row>
                <Col lg={8} className="mb-4">
                    <Card>
                        <Card.Img variant="top" src={service?.img} alt={service?.title} />
                        <Card.Body>
                            <Card.Title className="fw-bold text-success">{service?.title}</Card.Title>
                            <Card.Text>{service?.place}</Card.Text>
                            <Card.Text className="mt-4">
                                <strong>Guide:</strong> {service?.guide}<br />
                                <strong>Duration:</strong> {service?.day}<br />
                                <strong>Total Cost:</strong> ${service?.cost}
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>

                <Col lg={4}>
                    <Card className="p-3">
                        <Form onSubmit={handleSubmit(onSubmit)}>
                            <Form.Group controlId="formName">
                                <Form.Label>Name</Form.Label>
                                <Form.Control defaultValue={user.displayName} {...register("name")} />
                            </Form.Group>
                            <Form.Group controlId="formEmail" className="mt-3">
                                <Form.Label>Email</Form.Label>
                                <Form.Control defaultValue={user.email} {...register("email", { required: true })} />
                                {errors.email && <Form.Text className="text-danger">This field is required</Form.Text>}
                            </Form.Group>
                            <Form.Group controlId="formAddress" className="mt-3">
                                <Form.Label>Address</Form.Label>
                                <Form.Control placeholder="Address" {...register("address")} />
                            </Form.Group>
                            <Form.Group controlId="formPerson" className="mt-3">
                                <Form.Label>Number of Person</Form.Label>
                                <Form.Control placeholder="Number of Person" {...register("person")} />
                            </Form.Group>
                            <Form.Group controlId="formPhoneNumber" className="mt-3">
                                <Form.Label>Phone Number</Form.Label>
                                <Form.Control placeholder="Phone Number" {...register("number")} />
                            </Form.Group>
                            <Button type="submit" className="btn-success w-100 mt-4">Confirm Booking</Button>
                        </Form>
                    </Card>
                </Col>
            </Row>

            <h2 className="mt-5 fw-bold text-success">Description of {service?.title}</h2>
            <p>{service?.description}</p>
            <Button href="/home#services" className="btn-success mt-3">Back</Button>
        </Container>
    );
};

export default Booking;
