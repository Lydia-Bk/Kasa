import React from 'react';
import "./ApartmentHeader.css"

const ApartmentHeader = (props) => {
    const renderRatings = () => {
        let ratings = []
        for(let i = 1; i <= 5; i++) {
            i <= props.rating ? ratings.push('#FF6060') : ratings.push('grey');
        }
        return ratings
    }

    return (
        <div className="apartment_header_container">
            <div className="apartment_title">
                <h2>{props.title}</h2>
                <p>{props.location}</p>
                <div className='apartment_tags'>
                    {props.tags.map((tag) => (
                        <span key={tag} className='tag'>{tag}</span>
                    ))}
                </div>
            </div>

            <div className="apartment_owner">
                <div className="apartment_owner_details">
                    <p className="apartment_owner_name">{props.host.name}</p>
                    <div className="apartment_owner_avatar">
                        <img src={props.host.picture} alt="host" />
                    </div>
                </div>
                <div className="ratings">{renderRatings().map((ratingColor, i) => 
                    <i key={i} className="fa-solid fa-star" style={{color: ratingColor}}></i>
                )}
                </div>
            </div>
        </div>
    );
};

export default ApartmentHeader;