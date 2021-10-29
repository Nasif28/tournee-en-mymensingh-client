import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';
import './Services.css'
import { Container, Row } from 'react-bootstrap';

const Services = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/places')
            .then(res => res.json())
            .then(data => setServices(data));
    }, [])

    return (
        <Container id="services" fluid="lg" className="mt-5">
             <h2 className="fw-bold text-success m-3">Our Services</h2>
            <Row xs={1} md={2} lg={2} className="g-4">
            {
                services.map((service) => <Service
                key={service.no}
                service={service}
                ></Service>)
            }
            </Row>
        </Container>
    );
};

export default Services;