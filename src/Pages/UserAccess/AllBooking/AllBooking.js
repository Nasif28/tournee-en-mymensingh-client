import axios from "axios";
import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";

const AllBooking = () => {
    const [booking, setBooking] = useState([]);
    const [control, setConrol] = useState(false);
    const [statuss, setStatuss] = useState(false);

    useEffect(() => {
        fetch("https://tournee-en-mymensingh.onrender.com/allBooking")
            .then((res) => res.json())
            .then((data) => setBooking(data));
    }, [control, statuss]);


    // DELETE BOOKING
    const handleDelete = (id) => {
        const proceed = window.confirm('Are you sure you want to delete?');
        if (proceed) {
            fetch(`https://tournee-en-mymensingh.onrender.com/deleteBooking/${id}`, {
                method: "DELETE",
                headers: { "content-type": "application/json" },
            })
                .then((res) => res.json())
                .then((data) => {
                    if (data.deletedCount) {
                        setConrol(!control);
                        alert('deleted successfully');
                    } else {
                        setConrol(false);
                    }
                });
        }
    };

    // HANDLE STATUS
    const handleStatus = (id) => {
        axios.put(`https://tournee-en-mymensingh.onrender.com/updateStatus`, { id })
            .then(res => console.log("Your order Approved"))
            .then((data) => setStatuss(true))
    };

    return (
        <div className="container">
            <h1>Totall Bookings: {booking?.length}</h1>
            <Table striped bordered hover responsive>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Contact</th>
                        <th>Tour PLace</th>
                    </tr>
                </thead>
                {booking?.map((pd, index) => (
                    <tbody>
                        <tr>
                            <td>{index}</td>
                            <td>{pd?.name}</td>
                            <td>{pd?.email}</td>
                            <td>{pd?.number}</td>
                            <td>{pd?.booked.title}</td>
                            <p>
                                {(pd.status === 'Approved') ? <button className="btn bg-warning mx-2 text-white">{pd?.status}</button> :
                                    <button onClick={() => handleStatus(pd._id)} className="btn bg-primary mx-2 text-white">{pd?.status}</button>
                                }
                            </p>
                            <button onClick={() => handleDelete(pd._id)} className="btn bg-danger p-2 text-white">Delete</button>
                        </tr>
                    </tbody>
                ))}
            </Table>
        </div>
    );
};

export default AllBooking;