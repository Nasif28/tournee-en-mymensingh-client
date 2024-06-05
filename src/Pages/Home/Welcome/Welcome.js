import React from 'react';
import './Welcome.css';
import { Row, Col } from 'react-bootstrap';

const Welcome = () => {
    return (
        <div id="welcome" className="welcome">
            <Row className="container-fluid p-5">
                <Col lg={6} md={12} className="mb-4 mb-lg-0">
                    <img src={'https://cdn.pixabay.com/photo/2017/12/16/22/22/bora-bora-3023437_960_720.jpg'} width="80%" alt="" />
                </Col>
                <Col lg={6} md={12} className="text-start pt-3 ps-lg-5 text-white">
                    <h3 className="fw-bold text-success text-center">Welcome to</h3>
                    <h1 className="fw-bold text-success text-center mb-4">Tournee en Mymensingh</h1>
                    <p>
                        Broadcast neglectful and poignantly well until and some listlessly amidst
                        successful concentrically ably dachshund more far but forwardly echidna
                        outside tiger split thanks far vibrantly gosh hence pangolin however
                        notwithstanding leapt untruthful gauchely yikes komodo dully more.
                    </p>
                    <p>
                        As abandoned winced this more far wow jeepers near more wow goodness so
                        revealed much along worm some grasshopper.
                    </p>
                    <br />
                    <small className="text-danger"><i> - Nasif Zeehan</i></small>
                </Col>
            </Row>
        </div>
    );
};

export default Welcome;
