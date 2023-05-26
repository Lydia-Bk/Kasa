import React from 'react';
import "./../Banner/Banner.css"

const Banner = (props) => {
    return (
        <div className='banner'>
            <img src="/home_banner.png"/>
            <h2>Chez vous, partout et ailleurs</h2> 
        </div>
    );
};

export default Banner;