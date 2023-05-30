import React from 'react';
import "./AppartmentCard.css"

const AppartmentCard = (props) => {
    const apartmentTitle = props.apartmentTitle
    const apartmentCover = props.apartmentCover

    return (
        <div className='apartment_card'>
            <div className="apartment_card_title">{apartmentTitle}</div>
            <img src={apartmentCover} alt="apartment_img"/>
        </div>
    );
};

export default AppartmentCard;