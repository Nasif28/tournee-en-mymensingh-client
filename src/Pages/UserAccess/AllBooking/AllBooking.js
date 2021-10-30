import React, { useEffect, useState } from "react";
import { Form, Spinner, Table } from "react-bootstrap";

const AllBooking = () => {
    const [booking, setBooking] = useState([]);
    const [control, setConrol] = useState(false);

    useEffect(() => {
        fetch("http://localhost:5000/allBooking")
            .then((res) => res.json())
            .then((data) => setBooking(data));
    }, [control]);


    // DELETE BOOKING
    const handleDelete = (id) => {
        const proceed = window.confirm('Are you sure you want to delete?');
        if (proceed) {
            fetch(`http://localhost:5000/deleteBooking/${id}`, {
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

    // DELETE BOOKING
    const handleStatus = (id) => {
        fetch(`http://localhost:5000/updateStatus/${id}`, {
            method: "PUT",
            headers: { "content-type": "application/json" },
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.nModified) {
                    // setConrol(!control);
                    alert('Updated successfully');
                }
                // else {
                //     setConrol(false);
                // }
            });
    };

    return (
        <div className="container">
            <h1>Totall Bookings: {booking?.length}</h1>
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
                {booking?.map((pd, index) => (
                    <tbody>
                        <tr>
                            <td>{index}</td>
                            <td>{pd?.name}</td>
                            <td>{pd?.email}</td>
                            <td>{pd?.number}</td>
                            <td>{pd?.booked.title}</td>
                            {/* <Form.Select>
                                <option>Panding</option>
                                <option>Confirm</option>
                            </Form.Select> */}
                            <button onClick={() => handleStatus(pd.status)} className="btn bg-primary mx-2 text-white"><td>{pd?.status}</td></button>
                            <button onClick={() => handleDelete(pd._id)} className="btn bg-danger p-2 text-white">Delete</button>
                        </tr>
                    </tbody>
                ))}
            </Table>
        </div>
    );
};

export default AllBooking;