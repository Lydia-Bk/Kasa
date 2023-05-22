import React from 'react';
import "./AppartmentCard.css"

const AppartmentCard = (props) => {
    const apartmentTitle = props.apartmentTitle
    const apartmentCover = props.apartmentCover

    return (
        <div className='apartment'>
            <div className="apartment_title">{apartmentTitle}</div>
            <img src={apartmentCover} alt="apartment"/>
        </div>
    );
};

export default AppartmentCard;