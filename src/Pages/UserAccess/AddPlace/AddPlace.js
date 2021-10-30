import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";
import './AddPlace.css'

const AddService = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {

        axios.post('https://fierce-basin-29909.herokuapp.com/places', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('added successfully');
                    reset();
                }
            })
    }

    return (
        <div className="add-service">
            <h2 className="text-success fw-bolder mt-5">Please Add a Place fo Tourist</h2>

            <div className="row">

                <div className="col-12 col-md-2 col-lg-3"></div>

                <div className="col-12 col-md-8 col-lg-6">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <input {...register("title", { required: true, maxLength: 20 })} placeholder="Place Title" />
                        <input {...register("Place", { required: true, maxLength: 20 })} placeholder="Location" />
                        <input {...register("guide", { required: true, maxLength: 20 })} placeholder="Guide Name" />
                        <input {...register("day", { required: true, maxLength: 20 })} placeholder="Tour Duration" />
                        <input type="number" {...register("cost")} placeholder="Total Cost" />
                        <input {...register("img")} placeholder="Img URL" />
                        <textarea {...register("shortDescription")} placeholder="Short Description" />
                        <textarea {...register("description")} placeholder="Full Description" />
                        <input className="btn btn-success" type="submit" value="Add Place" />
                    </form>
                </div>

                <div className="col-12 col-md-2 col-lg-3"></div>

            </div>
        </div>
    );
};

export default AddService;