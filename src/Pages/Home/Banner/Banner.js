import React from 'react';
import { Carousel } from 'react-bootstrap';
import './Banner.css'

const Banner = () => {
    return (
        <>
            <Carousel className="banner">
                <Carousel.Item>
                    <img
                        className=" w-100"
                        src={'https://farm2.staticflickr.com/1929/44848006491_69be003f07_o.jpg'}
                        alt="First slide"
                    />
                    <Carousel.Caption className="cap">
                        <h3>Alexander Castle</h3>
                        <p>Alexander Castle is an ancient traditional structure located in the heart of Mymensingh city. The palace was built in 1879 by the then Maharaja of Muktagasa Suryakant Acharya to protect the property of district magistrate Alexander.</p>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                    <img
                        className=" w-100"
                        src={'https://farm5.staticflickr.com/4124/35750015655_50c183e7b5_o.jpg'}
                        alt="Second slide"
                    />
                    <Carousel.Caption className="cap">
                        <h3>Meghmati Village Resort</h3>
                        <p>Meghmati Village Resort has been set up at Valuka in Mymensingh district to spend their retirement in a rural environment and green. It takes only two and a half hours to reach Meghmati Village Resort from the capital Dhaka.</p>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                    <img
                        className="w-100"
                        src={'https://farm2.staticflickr.com/1109/845464506_9f04f1aac4.jpg'}
                        alt="Third slide"
                    />
                    <Carousel.Caption className="cap">
                        <h3>Shilpaacharya Zainul Abidin Park</h3>
                        <p>On the banks of the Brahmaputra river flowing on the chest of the Mymensingh city, the paintings of famous painter Shilpaacharya Zainul Abidin are preserved at the house of Saheb Quarter Nalini Ranjan Sarkar.</p>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                    <img
                        className="w-100"
                        src={'https://farm5.staticflickr.com/4571/39034282762_1f741349d8_o.jpg'}
                        alt="Fourth slide"
                    />
                    <Carousel.Caption className="cap">
                        <h3>Bangladesh Agricultural University</h3>
                        <p>Bangladesh Agricultural University was established with 1,200 acres of land near the bank of the Brahmaputra river in Mymensingh district, 4km away from the district.</p>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                    <img
                        className=" w-100"
                        src={'https://live.staticflickr.com/7852/47400305842_74883f3816_o.jpg'}
                        alt="Fifth slide"
                    />
                    <Carousel.Caption className="cap">
                        <h3>Santoshpur Rubber Garden</h3>
                        <p>The Apurva Santoshpur forest covers 106 acres of hilly land. There are also trees of different varieties, including Shawls and Gajaris in the forest and about 500 monkeys of rare species.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </>
    );
};

export default Banner;