import React from 'react';
import Guides from '../Guides/Guides';
import Services from '../Services/Services';
import Welcome from '../Welcome/Welcome';
import Banner from './../Banner/Banner';

const Home = () => {
    return (
        <div id="home">
            <Banner></Banner>
            <Services></Services>
            <Guides></Guides>
            <Welcome></Welcome>
        </div>
    );
};

export default Home;