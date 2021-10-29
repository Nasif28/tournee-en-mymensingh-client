import React from 'react';
import { Card } from 'react-bootstrap';

const Clients = () => {
    return (
        <div id="guides" className="clients container my-5">
            <hr />
            <h2 className="my-5 text-success fw-bold ">Our Guides</h2>
            <div className="row mx-auto my-3">
                <div className="col-lg-3">
                    <Card className="text-start h-100">
                        <Card.Img variant="top" src={'https://cdn.pixabay.com/photo/2017/05/30/03/24/ramadan-2355624_960_720.jpg'} />
                        <Card.Body>
                            <Card.Title className="text-success fw-bolder fs-4 text-center">Kuddus Sordar</Card.Title>
                        </Card.Body>
                    </Card>
                </div>
                <div className="col-lg-3">
                    <Card className="text-start h-100">
                        <Card.Img variant="top" src={'https://cdn.pixabay.com/photo/2021/02/18/12/59/women-6027128_960_720.jpg'} />
                        <Card.Body>
                            <Card.Title className="text-success fw-bolder fs-4 text-center">Lolita Banu</Card.Title>
                        </Card.Body>
                    </Card>
                </div>
                <div className="col-lg-3">
                    <Card className="text-start h-100">
                        <Card.Img variant="top" src={'https://cdn.pixabay.com/photo/2020/05/24/15/40/bay-of-bengal-5214779_960_720.jpg'} />
                        <Card.Body>
                            <Card.Title className="text-success fw-bolder fs-4 text-center">Akash Sorkar</Card.Title>
                        </Card.Body>
                    </Card>
                </div>
                <div className="col-lg-3">
                    <Card className="text-start h-100">
                        <Card.Img variant="top" src={'https://cdn.pixabay.com/photo/2021/02/16/06/55/boy-6020024_960_720.jpg'} />
                        <Card.Body>
                            <Card.Title className="text-success fw-bolder fs-4 text-center">Shazzad Hossain</Card.Title>
                        </Card.Body>
                    </Card>
                </div>
            </div>

            <div className="row mx-auto">
                <div className="col-lg-3">
                    <Card className="text-start h-100">
                        <Card.Img variant="top" src={'https://cdn.pixabay.com/photo/2021/02/27/13/13/woman-6054534_960_720.jpg'} />
                        <Card.Body>
                            <Card.Title className="text-success fw-bolder fs-4 text-center">Adiba Mili</Card.Title>
                        </Card.Body>
                    </Card>
                </div>
                <div className="col-lg-3">
                    <Card className="text-start h-100">
                        <Card.Img variant="top" src={'https://cdn.pixabay.com/photo/2019/11/01/12/20/people-4594057_960_720.jpg'} />
                        <Card.Body>
                            <Card.Title className="text-success fw-bolder fs-4 text-center">Tamanna Akter</Card.Title>
                        </Card.Body>
                    </Card>
                </div>
                <div className="col-lg-3">
                    <Card className="text-start h-100">
                        <Card.Img variant="top" src={'https://cdn.pixabay.com/photo/2020/06/19/14/51/bangladesh-5317681_960_720.jpg'} />
                        <Card.Body>
                            <Card.Title className="text-success fw-bolder fs-4 text-center">Shohel Khan</Card.Title>
                        </Card.Body>
                    </Card>
                </div>
                <div className="col-lg-3">
                    <Card className="text-start h-100">
                        <Card.Img variant="top" src={'https://cdn.pixabay.com/photo/2021/02/21/18/48/the-beauty-of-nature-6037522_960_720.jpg'} />
                        <Card.Body>
                            <Card.Title className="text-success fw-bolder fs-4 text-center">Fahimul Islam</Card.Title>
                        </Card.Body>
                    </Card>
                </div>
            </div>
        </div >
    );
};

export default Clients;