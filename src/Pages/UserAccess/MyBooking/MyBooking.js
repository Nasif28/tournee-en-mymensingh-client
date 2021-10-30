import React, { useState } from "react";
import { useEffect } from "react";
import { Table } from 'react-bootstrap';
import useFirebase from './../../../Hooks/useFirebase';

const MyBooking = () => {
    const { user } = useFirebase();
    const [myBooking, setMyBooking] = useState([]);
    const [control, setConrol] = useState(false);

    useEffect(() => {
        fetch(`https://fierce-basin-29909.herokuapp.com/myBooking/${user?.email}`)
            .then((res) => res.json())
            .then((data) => setMyBooking(data));
    }, [user.email, control]);

    // DELETE BOOKING
    const handleDelete = (id) => {
        const proceed = window.confirm('Are you sure you want to cancel?');
        if (proceed) {
            fetch(`https://fierce-basin-29909.herokuapp.com/deleteMyBooking/${id}`, {
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

    return (
        <div className="container">
            <h1>My Bookings: {myBooking?.length}</h1>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Contact</th>
                        <th>Tour PLace</th>
                    </tr>
                </thead>
                {myBooking?.map((pd, index) => (
                    <tbody>
                        <tr>
                            <td>{index}</td>
                            <td>{pd?.name}</td>
                            <td>{pd?.email}</td>
                            <td>{pd?.number}</td>
                            <td>{pd?.booked.title}</td>
                            <button onClick={() => handleDelete(pd._id)} className="btn bg-danger p-2 text-white">Cancel</button>
                        </tr>
                    </tbody>
                ))}
            </Table>
        </div>
    );
};

export default MyBooking;