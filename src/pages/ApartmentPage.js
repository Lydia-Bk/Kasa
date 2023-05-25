import React from 'react';
import { useParams } from 'react-router-dom';
import Collapse from '../components/Collapse/Collapse';
import ApartmentHeader from '../components/ApartmentHeader/ApartmentHeader';
import apartmentsList from "../data/logements.json"
import Gallery from '../components/Gallery/Gallery';


const ApartmentPage = () => {
    const { id } = useParams();
    const appartment = apartmentsList.find(appartment => appartment.id === id);

    return (

        <div className='apartment_page'>

            <Gallery pictures={appartment.pictures}/>

            <ApartmentHeader
                title={appartment.title}
                cover={appartment.cover}
                decription={appartment.description}
                host={appartment.host}
                rating={appartment.rating}
                location={appartment.location}
                equipments={appartment.equipments}
                tags={appartment.tags} />

            {appartment && <div className="apartment_description_flexbox">
                <Collapse title="Description" content={appartment.description} />
                <Collapse title="Logements" content={appartment.equipments} />
            </div>}

        </div>
    );
};

export default ApartmentPage;