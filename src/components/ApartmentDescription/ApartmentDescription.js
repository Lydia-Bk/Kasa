import React from 'react';
import "./ApartmentDescription.css"

const ApartmentDescription = (props) => {
    return (
        <div className="apartment_description">
            <p className='apartment_description_title'>{props.title}<i class="fa-solid fa-chevron-up"></i></p>
            <p className='apartment_description_content'>
                {Array.isArray(props.content) && <ul>
                    {props.content.map(equipment => <li>{equipment}</li>)}
                </ul>}
                {!Array.isArray(props.content) && props.content}
            </p>
        </div>
    );
};

export default ApartmentDescription;