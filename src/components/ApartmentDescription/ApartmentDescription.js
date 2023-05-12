import React from 'react';
import "./ApartmentDescription.css"

const ApartmentDescription = () => {
    return (
        <div>
            <div className="apartment_description">
                <p className='apartment_description_title'>Description<i class="fa-solid fa-chevron-up"></i></p>

                <p className='apartment_description_content'>Vous serez à 50m du canal Saint-martin où vous pourrez pique-niquer l'été et à côté de nombreux bars et restaurants. Au cœur de Paris avec 5 lignes de métro et de nombreux bus. Logement parfait pour les voyageurs en solo et les voyageurs d'affaires. Vous êtes à1 station de la gare de l'est (7 minutes à pied). </p>
            </div>
        </div>
    );
};

export default ApartmentDescription;