import React from 'react';
import {useParams} from 'react-router-dom';

import ApartmentDescription from '../components/ApartmentDescription/ApartmentDescription';
import ApartmentHeader from '../components/ApartmentHeader/ApartmentHeader';
import apartmentsList from "../data/logements.json"


const ApartmentPage = () => {

    const {id} = useParams();

    const appartment = apartmentsList.find(appartment => appartment.id == id);

    return (
        <div className='apartment_page'>

            <ApartmentHeader />

            {appartment && <div className="apartment_description_flexbox">
                <ApartmentDescription title="Description" content={appartment.description}/>
                <ApartmentDescription title="Logements" content={appartment.equipments}/>
            </div>}

        </div>
    );
};

export default ApartmentPage;