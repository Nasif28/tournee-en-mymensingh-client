import React from 'react';
import './Booking.css'
import { useParams } from 'react-router';
import { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import useAuth from '../../../Hooks/useAuth';
import axios from 'axios';

const Booking = (props) => {
    // Show Single Service by ID
    const { serviceId } = useParams();
    const [service, setService] = useState({});

    useEffect(() => {
        fetch(`https://tournee-en-mymensingh.onrender.com/places/${serviceId}`)
            .then(res => res.json())
            .then(data => setService(data));
    }, [])


    // Click and Book Survice
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const { user } = useAuth();

    const onSubmit = data => {
        data.status = "Panding";
        data.booked = service;
        axios.post('https://tournee-en-mymensingh.onrender.com/booking', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('added successfully');
                    reset();
                }
            });
    };

    return (
        <div id="details" className="container">
            <h1 className="fw-bold text-success my-5">Details of {service?.title}</h1>
            <div className="row">
                <div className="col-12 col-md-12 col-lg-8">
                    <img className="img-fluid" src={service?.img} alt="" />
                    <h2 className="fw-bold text-success">{service?.title}</h2>
                    <small>{service?.Place}</small>
                    <p></p>
                    <h6 className="text-start mt-5">Guide: {service?.guide}</h6>
                    <h6 className="text-start">Duration: {service?.day}</h6>
                    <h6 className="text-start">Total Cost: ${service?.cost}</h6>
                </div>

                <div className="col-12 col-md-12 col-lg-4">
                    <form className="shipping-form" onSubmit={handleSubmit(onSubmit)}>
                        <input defaultValue={user.displayName} {...register("name")} />
                        <input defaultValue={user.email} {...register("email", { required: true })} />
                        {errors.email && <span className="error">This field is required</span>}
                        <input placeholder="Address" defaultValue="" {...register("address")} />
                        <input placeholder="Number of Person" defaultValue="" {...register("person")} />
                        <input placeholder="Phone Number" defaultValue="" {...register("number")} />
                        <input className="btn btn-success" type="submit" value="Confirm Book" />
                    </form>
                </div>
            </div>

            <h2 className="mt-5 fw-bold text-success">Description of {service?.title} </h2>
            <p>{service?.description}</p>
            <Button href="/home#services" className="btn fw-bolder btn-success px-5 mt-3">Back</Button>

        </div>
    );
};

export default Booking;