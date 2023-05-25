import React from 'react';
import "./ApartmentHeader.css"

const ApartmentHeader = (props) => {
    // function generateRating() {
    //     let stars = []
    //     for(let i = 0; i == props.rating; i++) {
    //         stars.push(<i class="fa-solid fa-star" style="color: #ff6060;"></i>)
    //     }
    //     return stars;
    // }

    return (
        <div>
            <div className="apartment_header">
                <div apartment_page className="apartment_page_title">
                    <h1>{props.title}</h1>
                    <h2>{props.location}</h2>
                    <div className='tags'>
                        {props.tags.map((tag) => (
                            <span>{tag}</span>
                        ))}
                    </div>
                </div>

                <div className="apartment_owner">
                    <div className="apartment_owner_details">
                        <h3>{props.host.name}</h3>
                        <div className="apartment_owner_badge">
                            <img src={props.host.picture} alt="host image" />
                        </div>
                    </div>

                    {/* <i class="fa-solid fa-star" style="color: #e3e3e3;"></i> */}
                    
                    <div className="apartment_owner_stars">
                        {/* RATING ICI */}
                    </div>
                </div>
            </div>

        </div>
    );
};

export default ApartmentHeader;