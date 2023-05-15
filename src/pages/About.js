import React from 'react';
import Banner from '../components/Banner/Banner';
import ApartmentDescription from '../components/ApartmentDescription/ApartmentDescription';


const About = () => {
    return (
        <div>
            <Banner />

<div className="About_container">
            <ApartmentDescription />
            <ApartmentDescription />
            <ApartmentDescription />
            <ApartmentDescription />
            </div>
        </div>
    );
};

export default About;