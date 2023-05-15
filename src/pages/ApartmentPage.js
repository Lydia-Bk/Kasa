import React from 'react';
import ApartmentDescription from '../components/ApartmentDescription/ApartmentDescription';
import ApartmentHeader from '../components/ApartmentHeader/ApartmentHeader';

const ApartmentPage = () => {
    return (
        <div className='apartment_page'>

            <ApartmentHeader />

            <div className="apartment_description_flexbox">
                <ApartmentDescription />
                <ApartmentDescription />
                
            </div>

        </div>
    );
};

export default ApartmentPage;