import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <div>
            <section id="contact" className="container foot mt-5">
                <hr />
                <div className="row py-5">
                    <div className="contact col-12 col-md-6 col-lg-4 text-start">
                        <p className="low">Tournee en Mymensingh is the largest directory of Mymensingh tour and travel. 
                        We have tried to list out all tourist spots of Mymensingh. It's will help you to make trip plane 
                        based on spots description, rating, photos as well videos.</p>
                        <div className="add low">
                            <p><i className="fab fa-facebook-square"></i> www.facebook.com/nasif28</p>
                            <p><i className="fas fa-envelope-square"></i> nasifzeehan1@gmail.com</p>
                            <p><i className="fas fa-map-marker-alt"></i> 70/K South Banasree, Dhaka-1219</p>
                            <p><i className="fas fa-phone-square"></i> +8801983794542</p>
                        </div>
                    </div>

                    <div className="f-2 col-12 col-md-6 col-lg-4 d-flex">
                        <div className="info-1 col-6 col-md-6 col-lg-6">
                            <div className="d-flex justify-content-center">
                                <div>
                                    <h4 className="pb-3">Information</h4>
                                    <p> About Us</p>
                                    <p> Top Guides</p>
                                    <p> Our Office</p>
                                    <p> Services</p>
                                    <p> Secure Tour</p>
                                </div>
                            </div>
                        </div>

                        <div className="info-2 col-6 col-md-6 col-lg-6">
                            <div className="d-flex justify-content-center">
                                <div>
                                    <h4 className="pb-3">My Account</h4>
                                    <p> My Account</p>
                                    <p> Discount</p>
                                    <p> Information</p>
                                    <p> My Address</p>
                                    <p> Tourist</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-12 col-md-12 col-lg-4">
                        <img src={'https://upload.wikimedia.org/wikipedia/commons/7/7f/Saint-martin%27s-island.JPG'} width="100%" alt="" />
                    </div>
                </div>
            </section>


            <div className="rights">
                <p>Copyright &copy; 2021 Organive.All rights reserved Nasif Zeehan </p>
            </div>
        </div>
    );
};

export default Footer;