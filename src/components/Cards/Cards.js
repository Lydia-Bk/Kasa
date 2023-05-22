import React from 'react';
import "./../Cards/Cards.css"
import AppartmentCard from "../AppartmentCard/AppartmentCard"
import apartmentsList from "../../data/logements.json"

const Cards = () => {
    return (
        <div className='cards'>
                {apartmentsList.map((apartment) => ( // on boucle sur tous les appartements dans le fichier json
                    <AppartmentCard apartmentTitle={apartment.title} apartmentCover={apartment.cover}/>
                ))}
        </div>
    );
};

export default Cards;