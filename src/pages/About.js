import React from 'react';
import Banner from '../components/Banner/Banner';
import ApartmentDescription from '../components/ApartmentDescription/ApartmentDescription';
import BannerAbout from '../components/BannerAbout/BannerAbout'


const About = () => {
    return (
        <div>
            <BannerAbout/>

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