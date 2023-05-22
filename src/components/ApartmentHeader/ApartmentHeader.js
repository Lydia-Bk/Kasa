import React from 'react';
import "./ApartmentHeader.css"

const ApartmentHeader = () => {
    return (
        <div>
            <div className='carroussel_photo'>
                <img src="/background.png" alt="img" />
            </div>

            <div className="apartment_header">
                <div apartment_page className="apartment_page_title">
                    <h1>Cozy loft on the Canal Saint Martin</h1>
                    <h2>Paris, Ile de France</h2>
                    <div className='tags'>
                        <span>Cozy</span>
                        <span>Canal</span>
                        <span>Paris 10</span>
                    </div>
                </div>


                <div className="apartment_owner">
                    <div className="apartment_owner_details">
                        <h3><span>Alexandre</span><span>Dumas</span></h3>
                        <div className="apartment_owner_badge">
                            {/* <img src="https://upload.wikimedia.org/wikipedia/commons/a/a7/Meeting_M%C3%A9lenchon_Toulouse_-_2017-04-16_-_Jean-Luc_M%C3%A9lenchon_-_41_%28cropped_2%29.jpg"/> */}
                        </div>
                    </div>

                    <div className="apartment_owner_stars">
                        <span className='on'>★</span>
                        <span className='on'>★</span>
                        <span className='on'>★</span>
                        <span className='off'>★</span>
                        <span className='off'>★</span>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default ApartmentHeader;