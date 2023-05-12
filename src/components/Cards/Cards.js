import React from 'react';
import "./../Cards/Cards.css"
import AppartmentCard from "../AppartmentCard/AppartmentCard"

const Cards = () => {
    return (
        <div className='cards'>
            <AppartmentCard />
            <AppartmentCard />
            <AppartmentCard />
            <AppartmentCard />
            <AppartmentCard />
            <AppartmentCard />
            <AppartmentCard />
            <AppartmentCard />
        </div>
    );
};

export default Cards;