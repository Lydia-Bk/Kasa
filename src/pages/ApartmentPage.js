import React from 'react';
import ApartmentDescription from '../components/ApartmentDescription/ApartmentDescription';
import ApartmentHeader from '../components/ApartmentHeader/ApartmentHeader';

const ApartmentPage = () => {
    return (
        <div className='apartment_page'>

            <ApartmentHeader/>
            
            <ApartmentDescription/>
            <ApartmentDescription/>

        </div>
    );
};

export default ApartmentPage;