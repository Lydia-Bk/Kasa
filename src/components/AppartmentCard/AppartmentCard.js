import React from 'react';
import "./AppartmentCard.css"

const AppartmentCard = ({photo, title}) => {
    return (
        <div className='apartment'>
            <div className="apartment_title">{title}</div>
            <img src={photo} alt="apartment"/>
        </div>
    );
};

export default AppartmentCard;