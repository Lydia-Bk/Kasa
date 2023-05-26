import React from 'react';
import { Link } from "react-router-dom";
import "./../Cards/Cards.css"
import AppartmentCard from "../AppartmentCard/AppartmentCard"
import apartmentsList from "../../data/logements.json"


const Cards = () => {
    return (
        <div className='cards'>
            {apartmentsList.map((apartment) => ( // on boucle sur tous les appartements dans le fichier json
                <div className='card'>
                    <Link to={`/logement/${apartment.id}`}>
                        <AppartmentCard apartmentTitle={apartment.title} apartmentCover={apartment.cover} />
                    </Link>
                </div>
            ))}
        </div>
    );
};

export default Cards;