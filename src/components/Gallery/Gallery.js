import React, { useState } from "react";
import "../Gallery/Gallery.css"

const Gallery = (props) => {
    // Ici la variable "current" va définir l'image qui est active dans la galerie
    const [current, setCurrent] = useState(0); //rend donnée réactive (pour les afficher dans le DOM)
    //setCurrent me permet d'actualiser la valeur de ma variable current
    const length = props.pictures.length; //définit le nombre d'images à afficher

    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1); // vérifie où on se trouve dans le tableau d'images en fonction de la lenght du tableau et de l'index de la currentImage.
    };

    const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1);
    };


    return (
        <div className='main_gallery'>
            <div className="gallery_current_img">
                {props.pictures.map((picture, index) => {
                    return (
                        index === current && (<img src={picture} alt="photos caroussel" key={index}/>)
                    )
                })}
            </div>

            <div className="left_arrow" onClick={prevSlide}>
                <i className="fa-solid fa-chevron-left"></i>
            </div>

            <div className="right_arrow" onClick={nextSlide}>
                <i className="fa-solid fa-chevron-right"></i>
            </div>

            <div className="gallery_counter">
                <p>{current + 1}/{props.pictures.length}</p>
            </div>
        </div>
    );
};

export default Gallery;