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
        <div>
            <div className="apartment_header">
                <div className="apartment_page_title">
                    <h1>{props.title}</h1>
                    <h2>{props.location}</h2>
                    <div className='tags'>
                        {props.tags.map((tag) => (
                            <span key={tag}>{tag}</span>
                        ))}
                    </div>
                </div>

                <div className="apartment_owner">
                    <div className="apartment_owner_details">
                        <h3>{props.host.name}</h3>
                        <div className="apartment_owner_badge">
                            <img src={props.host.picture} alt="host" />
                        </div>
                    </div>

                    <div className="apartment_owner_stars">{renderRatings().map((ratingColor, i) => <i
                        key={i}
                        className="fa-solid fa-star" 
                        style={{
                            color: ratingColor
                    }}></i>)}</div>
                </div>
            </div>

        </div>
    );
};

export default ApartmentHeader;